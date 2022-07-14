import { BigInt } from "@graphprotocol/graph-ts";
import {MarketPlace as marketplaceContract, 
        DirectSaleCreated, 
        DirectSaleDone, 
        OrderInTransit, 
        OrderCompleted } from "../generated/marketplace/MarketPlace"
import { Token } from "../generated/schema"
import { findOrCreateUser } from "./loadingFunction";



export function handleDirectSaleCreated(event: DirectSaleCreated): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.onDirectSale = true;
    token.reservedPrice = event.params.price
    token.save();
}

export function handleDirectSaleDone(event: DirectSaleDone): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.onDirectSale = false;
    token.save();
    const user = findOrCreateUser(token.creator); 
    const userTotalSales = user.totalSales

    if(!userTotalSales){
    user.totalSales = event.params.price;
    user.save();
    return;
    } else {
    user.totalSales = event.params.price.plus(userTotalSales);
    user.save();
    }
}
export function handleOrderInTransit(event: OrderInTransit): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.onOrderTransit = true;
    token.save();
}

export function handleOrderCompleted(event: OrderCompleted): void {
    let token = Token.load(event.params.tokenId.toString());
    if(!token) return;
    token.onOrderTransit=false;
    token.onOrderCompleted = true;
    token.save();
}