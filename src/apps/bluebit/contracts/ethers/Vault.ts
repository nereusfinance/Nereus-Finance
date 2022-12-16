/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface VaultInterface extends utils.Interface {
  functions: {
    'deposit(uint256)': FunctionFragment;
    'harvest(address)': FunctionFragment;
    'init()': FunctionFragment;
    'pairType()': FunctionFragment;
    'swapPair()': FunctionFragment;
    'swapPath()': FunctionFragment;
    'swapRouter()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawFee()': FunctionFragment;
    'withdrawInterval()': FunctionFragment;
    'stableSwap()': FunctionFragment;
    'tokens()': FunctionFragment;
    'getVirtualPrice()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'deposit'
      | 'harvest'
      | 'init'
      | 'pairType'
      | 'swapPair'
      | 'swapPath'
      | 'swapRouter'
      | 'totalSupply'
      | 'withdraw'
      | 'withdrawFee'
      | 'withdrawInterval'
      | 'stableSwap'
      | 'tokens'
      | 'getVirtualPrice',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'deposit', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'harvest', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'init', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pairType', values?: undefined): string;
  encodeFunctionData(functionFragment: 'swapPair', values?: undefined): string;
  encodeFunctionData(functionFragment: 'swapPath', values?: undefined): string;
  encodeFunctionData(functionFragment: 'swapRouter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'withdrawFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawInterval', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stableSwap', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tokens', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getVirtualPrice', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pairType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapPath', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapRouter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawInterval', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stableSwap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVirtualPrice', data: BytesLike): Result;

  events: {
    'FeeDistributorChanged(address,address)': EventFragment;
    'RewardTokenAdded(address)': EventFragment;
    'RewardTokenRemoved(address)': EventFragment;
    'RewarderChanged(address,address)': EventFragment;
    'SwapPathChanged(address,address)': EventFragment;
    'WithdrawFeeChanged(uint256,uint256)': EventFragment;
    'WithdrawIntervalChanged(uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'FeeDistributorChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardTokenAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardTokenRemoved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewarderChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SwapPathChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WithdrawFeeChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WithdrawIntervalChanged'): EventFragment;
}

export interface FeeDistributorChangedEventObject {
  previousValue: string;
  newValue: string;
}
export type FeeDistributorChangedEvent = TypedEvent<[string, string], FeeDistributorChangedEventObject>;

export type FeeDistributorChangedEventFilter = TypedEventFilter<FeeDistributorChangedEvent>;

export interface RewardTokenAddedEventObject {
  token: string;
}
export type RewardTokenAddedEvent = TypedEvent<[string], RewardTokenAddedEventObject>;

export type RewardTokenAddedEventFilter = TypedEventFilter<RewardTokenAddedEvent>;

export interface RewardTokenRemovedEventObject {
  token: string;
}
export type RewardTokenRemovedEvent = TypedEvent<[string], RewardTokenRemovedEventObject>;

export type RewardTokenRemovedEventFilter = TypedEventFilter<RewardTokenRemovedEvent>;

export interface RewarderChangedEventObject {
  previousValue: string;
  newValue: string;
}
export type RewarderChangedEvent = TypedEvent<[string, string], RewarderChangedEventObject>;

export type RewarderChangedEventFilter = TypedEventFilter<RewarderChangedEvent>;

export interface SwapPathChangedEventObject {
  previousValue: string;
  newValue: string;
}
export type SwapPathChangedEvent = TypedEvent<[string, string], SwapPathChangedEventObject>;

export type SwapPathChangedEventFilter = TypedEventFilter<SwapPathChangedEvent>;

export interface WithdrawFeeChangedEventObject {
  previousValue: BigNumber;
  newValue: BigNumber;
}
export type WithdrawFeeChangedEvent = TypedEvent<[BigNumber, BigNumber], WithdrawFeeChangedEventObject>;

export type WithdrawFeeChangedEventFilter = TypedEventFilter<WithdrawFeeChangedEvent>;

export interface WithdrawIntervalChangedEventObject {
  previousValue: BigNumber;
  newValue: BigNumber;
}
export type WithdrawIntervalChangedEvent = TypedEvent<[BigNumber, BigNumber], WithdrawIntervalChangedEventObject>;

export type WithdrawIntervalChangedEventFilter = TypedEventFilter<WithdrawIntervalChangedEvent>;

export interface Vault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    harvest(
      feeDistributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    pairType(overrides?: CallOverrides): Promise<[BigNumber]>;

    swapPair(overrides?: CallOverrides): Promise<[string]>;

    swapPath(overrides?: CallOverrides): Promise<[string]>;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    stableSwap(overrides?: CallOverrides): Promise<[string]>;

    tokens(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVirtualPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  deposit(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  harvest(
    feeDistributor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  pairType(overrides?: CallOverrides): Promise<BigNumber>;

  swapPair(overrides?: CallOverrides): Promise<string>;

  swapPath(overrides?: CallOverrides): Promise<string>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawInterval(overrides?: CallOverrides): Promise<BigNumber>;

  stableSwap(overrides?: CallOverrides): Promise<string>;

  tokens(overrides?: CallOverrides): Promise<BigNumber>;

  getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    deposit(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    harvest(feeDistributor: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    init(overrides?: CallOverrides): Promise<void>;

    pairType(overrides?: CallOverrides): Promise<BigNumber>;

    swapPair(overrides?: CallOverrides): Promise<string>;

    swapPath(overrides?: CallOverrides): Promise<string>;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawInterval(overrides?: CallOverrides): Promise<BigNumber>;

    stableSwap(overrides?: CallOverrides): Promise<string>;

    tokens(overrides?: CallOverrides): Promise<BigNumber>;

    getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'FeeDistributorChanged(address,address)'(
      previousValue?: PromiseOrValue<string> | null,
      newValue?: PromiseOrValue<string> | null,
    ): FeeDistributorChangedEventFilter;
    FeeDistributorChanged(
      previousValue?: PromiseOrValue<string> | null,
      newValue?: PromiseOrValue<string> | null,
    ): FeeDistributorChangedEventFilter;

    'RewardTokenAdded(address)'(token?: PromiseOrValue<string> | null): RewardTokenAddedEventFilter;
    RewardTokenAdded(token?: PromiseOrValue<string> | null): RewardTokenAddedEventFilter;

    'RewardTokenRemoved(address)'(token?: PromiseOrValue<string> | null): RewardTokenRemovedEventFilter;
    RewardTokenRemoved(token?: PromiseOrValue<string> | null): RewardTokenRemovedEventFilter;

    'RewarderChanged(address,address)'(
      previousValue?: PromiseOrValue<string> | null,
      newValue?: PromiseOrValue<string> | null,
    ): RewarderChangedEventFilter;
    RewarderChanged(
      previousValue?: PromiseOrValue<string> | null,
      newValue?: PromiseOrValue<string> | null,
    ): RewarderChangedEventFilter;

    'SwapPathChanged(address,address)'(
      previousValue?: PromiseOrValue<string> | null,
      newValue?: PromiseOrValue<string> | null,
    ): SwapPathChangedEventFilter;
    SwapPathChanged(
      previousValue?: PromiseOrValue<string> | null,
      newValue?: PromiseOrValue<string> | null,
    ): SwapPathChangedEventFilter;

    'WithdrawFeeChanged(uint256,uint256)'(
      previousValue?: PromiseOrValue<BigNumberish> | null,
      newValue?: PromiseOrValue<BigNumberish> | null,
    ): WithdrawFeeChangedEventFilter;
    WithdrawFeeChanged(
      previousValue?: PromiseOrValue<BigNumberish> | null,
      newValue?: PromiseOrValue<BigNumberish> | null,
    ): WithdrawFeeChangedEventFilter;

    'WithdrawIntervalChanged(uint256,uint256)'(
      previousValue?: PromiseOrValue<BigNumberish> | null,
      newValue?: PromiseOrValue<BigNumberish> | null,
    ): WithdrawIntervalChangedEventFilter;
    WithdrawIntervalChanged(
      previousValue?: PromiseOrValue<BigNumberish> | null,
      newValue?: PromiseOrValue<BigNumberish> | null,
    ): WithdrawIntervalChangedEventFilter;
  };

  estimateGas: {
    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    harvest(
      feeDistributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    pairType(overrides?: CallOverrides): Promise<BigNumber>;

    swapPair(overrides?: CallOverrides): Promise<BigNumber>;

    swapPath(overrides?: CallOverrides): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawInterval(overrides?: CallOverrides): Promise<BigNumber>;

    stableSwap(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(overrides?: CallOverrides): Promise<BigNumber>;

    getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    harvest(
      feeDistributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    init(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    pairType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapPair(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapPath(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stableSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVirtualPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
