import { Bytes } from "@graphprotocol/graph-ts"
import {
  User,
} from "../generated/schema"

export const zeroAddress = '0x0000000000000000000000000000000000000000'

export function getBidId(
  tokenId: string,
  bidder: string
): string {
  return tokenId + '-' + bidder
}

export function findOrCreateUser(id: Bytes): User {

  let user = User.load(id)

  if (!user) {
    user = new User(id)
    user.save()
  }

  return user as User
}