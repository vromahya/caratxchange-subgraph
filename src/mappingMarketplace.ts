import { BigInt } from "@graphprotocol/graph-ts";
import {MarketPlace as marketplaceContract, 
        DirectSaleCreated, 
        DirectSaleDone, 
        OrderInTransit, 
        OrderCompleted } from "../generated/marketplace/MarketPlace"
import { Token } from "../generated/schema"




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