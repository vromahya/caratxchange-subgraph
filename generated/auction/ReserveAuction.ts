// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuctionBid extends ethereum.Event {
  get params(): AuctionBid__Params {
    return new AuctionBid__Params(this);
  }
}

export class AuctionBid__Params {
  _event: AuctionBid;

  constructor(event: AuctionBid) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get auction(): AuctionBidAuctionStruct {
    return changetype<AuctionBidAuctionStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class AuctionBidAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class AuctionCanceled extends ethereum.Event {
  get params(): AuctionCanceled__Params {
    return new AuctionCanceled__Params(this);
  }
}

export class AuctionCanceled__Params {
  _event: AuctionCanceled;

  constructor(event: AuctionCanceled) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get auction(): AuctionCanceledAuctionStruct {
    return changetype<AuctionCanceledAuctionStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class AuctionCanceledAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get auction(): AuctionCreatedAuctionStruct {
    return changetype<AuctionCreatedAuctionStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class AuctionCreatedAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class AuctionEnded extends ethereum.Event {
  get params(): AuctionEnded__Params {
    return new AuctionEnded__Params(this);
  }
}

export class AuctionEnded__Params {
  _event: AuctionEnded;

  constructor(event: AuctionEnded) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get auction(): AuctionEndedAuctionStruct {
    return changetype<AuctionEndedAuctionStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class AuctionEndedAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class AuctionReservePriceUpdated extends ethereum.Event {
  get params(): AuctionReservePriceUpdated__Params {
    return new AuctionReservePriceUpdated__Params(this);
  }
}

export class AuctionReservePriceUpdated__Params {
  _event: AuctionReservePriceUpdated;

  constructor(event: AuctionReservePriceUpdated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get auction(): AuctionReservePriceUpdatedAuctionStruct {
    return changetype<AuctionReservePriceUpdatedAuctionStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class AuctionReservePriceUpdatedAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class ReserveAuction__auctionForNFTResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: Address;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: Address,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class ReserveAuction extends ethereum.SmartContract {
  static bind(address: Address): ReserveAuction {
    return new ReserveAuction("ReserveAuction", address);
  }

  auctionForNFT(param0: BigInt): ReserveAuction__auctionForNFTResult {
    let result = super.call(
      "auctionForNFT",
      "auctionForNFT(uint256):(address,uint96,address,uint96,address,uint32,uint32,uint32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ReserveAuction__auctionForNFTResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_auctionForNFT(
    param0: BigInt
  ): ethereum.CallResult<ReserveAuction__auctionForNFTResult> {
    let result = super.tryCall(
      "auctionForNFT",
      "auctionForNFT(uint256):(address,uint96,address,uint96,address,uint32,uint32,uint32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ReserveAuction__auctionForNFTResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
      )
    );
  }

  getHighestBid(_tokenId: BigInt): BigInt {
    let result = super.call(
      "getHighestBid",
      "getHighestBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getHighestBid(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getHighestBid",
      "getHighestBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getHighestBidder(_tokenId: BigInt): Address {
    let result = super.call(
      "getHighestBidder",
      "getHighestBidder(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toAddress();
  }

  try_getHighestBidder(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getHighestBidder",
      "getHighestBidder(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class CreateAuctionCall extends ethereum.Call {
  get inputs(): CreateAuctionCall__Inputs {
    return new CreateAuctionCall__Inputs(this);
  }

  get outputs(): CreateAuctionCall__Outputs {
    return new CreateAuctionCall__Outputs(this);
  }
}

export class CreateAuctionCall__Inputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _reservePrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _sellerFundsRecipient(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _startTime(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class CreateAuctionCall__Outputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }
}

export class CreateBidCall extends ethereum.Call {
  get inputs(): CreateBidCall__Inputs {
    return new CreateBidCall__Inputs(this);
  }

  get outputs(): CreateBidCall__Outputs {
    return new CreateBidCall__Outputs(this);
  }
}

export class CreateBidCall__Inputs {
  _call: CreateBidCall;

  constructor(call: CreateBidCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get bidder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateBidCall__Outputs {
  _call: CreateBidCall;

  constructor(call: CreateBidCall) {
    this._call = call;
  }
}

export class ReleaseFundsCall extends ethereum.Call {
  get inputs(): ReleaseFundsCall__Inputs {
    return new ReleaseFundsCall__Inputs(this);
  }

  get outputs(): ReleaseFundsCall__Outputs {
    return new ReleaseFundsCall__Outputs(this);
  }
}

export class ReleaseFundsCall__Inputs {
  _call: ReleaseFundsCall;

  constructor(call: ReleaseFundsCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReleaseFundsCall__Outputs {
  _call: ReleaseFundsCall;

  constructor(call: ReleaseFundsCall) {
    this._call = call;
  }
}

export class SetAuctionReservePriceCall extends ethereum.Call {
  get inputs(): SetAuctionReservePriceCall__Inputs {
    return new SetAuctionReservePriceCall__Inputs(this);
  }

  get outputs(): SetAuctionReservePriceCall__Outputs {
    return new SetAuctionReservePriceCall__Outputs(this);
  }
}

export class SetAuctionReservePriceCall__Inputs {
  _call: SetAuctionReservePriceCall;

  constructor(call: SetAuctionReservePriceCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _reservePrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetAuctionReservePriceCall__Outputs {
  _call: SetAuctionReservePriceCall;

  constructor(call: SetAuctionReservePriceCall) {
    this._call = call;
  }
}

export class SettleAuctionCall extends ethereum.Call {
  get inputs(): SettleAuctionCall__Inputs {
    return new SettleAuctionCall__Inputs(this);
  }

  get outputs(): SettleAuctionCall__Outputs {
    return new SettleAuctionCall__Outputs(this);
  }
}

export class SettleAuctionCall__Inputs {
  _call: SettleAuctionCall;

  constructor(call: SettleAuctionCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SettleAuctionCall__Outputs {
  _call: SettleAuctionCall;

  constructor(call: SettleAuctionCall) {
    this._call = call;
  }
}
