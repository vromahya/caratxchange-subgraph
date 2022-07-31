import {ReserveAuction as auctionContract,  
        AuctionCreated, 
        AuctionCanceled, 
        AuctionReservePriceUpdated, 
        AuctionEnded,
        AuctionBid } from "../generated/auction/ReserveAuction"
import { Token, Bid } from "../generated/schema"
import { getBidId, findOrCreateUser } from "./loadingFunction";

export function handleAuctionCreated(event: AuctionCreated): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.onAuction = true;
    token.reservedPrice = event.params.auction.reservePrice;
    token.auctionEndAt = event.block.timestamp.plus(event.params.auction.duration);
    token.save();
}
export function handleAuctionCancelled(event: AuctionCanceled): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.onAuction = false;
    token.save();
}
export function handleReservePriceUpdated(event: AuctionReservePriceUpdated): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.reservedPrice = event.params.auction.reservePrice;
    token.save();
}
export function handleAuctionEnded(event: AuctionEnded): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.reservedPrice = event.params.auction.highestBid;
    token.onAuction = false;
    token.onOrderTransit=true;
    token.save();
    const user = findOrCreateUser(token.creator); 
    const userTotalSales = user.totalSales
    if(!userTotalSales){
    user.totalSales = event.params.auction.highestBid;
    user.save();
    return;
    } else {
    user.totalSales = event.params.auction.highestBid.plus(userTotalSales);
    user.save();
    }    
}
export function handleAuctionBid(event: AuctionBid): void {

    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;

    token.reservedPrice = event.params.auction.highestBid;

    token.save();
    
    const bidder = findOrCreateUser(event.params.auction.highestBidder)   
    

    const bidderAddress = bidder.id;

    let bid = new Bid(getBidId(event.params.tokenId.toString(),bidderAddress.toHexString()));
        bid.token = token.id;
        bid.bidder = bidder.id;
        bid.bid = event.params.auction.highestBid;
        bid.createdAtTimeStamp = event.block.timestamp;
        bid.save();
}
