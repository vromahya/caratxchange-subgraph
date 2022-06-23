// import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  Transfer,
  RoleGranted,
  RoleRevoked
} from "../generated/Contract/Contract"
import { Token, User } from "../generated/schema"
import { ipfs, json } from '@graphprotocol/graph-ts'

export function handleTransfer(event: Transfer): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());

    token.tokenId = event.params.tokenId;
    
    token.creator = event.params.to;

    let tokenContract = Contract.bind(event.address);

    token.tokenURI = tokenContract.tokenURI(token.tokenId); 
    let hash = token.tokenURI
    let metadata = ipfs.cat(hash);
    if (metadata) {
      const value = json.fromBytes(metadata).toObject()
      if (value) {
        const image = value.get('image')
        const name = value.get('name')
        const description = value.get('description')
        const collection = value.get('collection')

        if (name && image && description) {
          token.name = name.toString()
          token.image = image.toString()
          token.description = description.toString()
        }
        if(collection){
          token.collection = collection.toString();
        }
      }
    }

    token.createdAtTimestamp = event.block.timestamp;

    token.onAuction = false;

    token.onDirectSale = false;

    token.onOrderTransit = false;
    
    token.onOrderCompleted = false;
  }
  token.owner = event.params.to;
  token.save();
  //user update or create
  let user = User.load(event.params.to)
  if (!user) {
    user = new User(event.params.to); 
    user.seller=false; 
    user.save();
  }
}
export function handleRoleGranted(event: RoleGranted): void {
    let user = User.load(event.params.account);
    if(!user){
      user = new User(event.params.account);
      user.seller = true
    }
    user.seller = true;
    user.save();
}
export function handleRoleRevoked(event: RoleRevoked): void {
    let user = User.load(event.params.account);
    if(!user){
      user = new User(event.params.account);
      user.seller = false;
    }
    user.seller = false;
    user.save();
}


