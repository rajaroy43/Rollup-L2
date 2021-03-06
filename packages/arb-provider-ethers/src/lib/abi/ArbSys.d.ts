/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers'
import { Listener, Provider } from 'ethers/providers'
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils'
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from '.'

interface ArbSysInterface extends Interface {
  functions: {
    arbOSVersion: TypedFunctionDescription<{ encode([]: []): string }>

    getStorageAt: TypedFunctionDescription<{
      encode([account, index]: [string, BigNumberish]): string
    }>

    getTransactionCount: TypedFunctionDescription<{
      encode([account]: [string]): string
    }>

    withdrawERC20: TypedFunctionDescription<{
      encode([dest, amount]: [string, BigNumberish]): string
    }>

    withdrawERC721: TypedFunctionDescription<{
      encode([dest, id]: [string, BigNumberish]): string
    }>

    withdrawEth: TypedFunctionDescription<{ encode([dest]: [string]): string }>
  }

  events: {
    ERC20Withdrawal: TypedEventDescription<{
      encodeTopics([destAddr, tokenAddr, amount]: [
        string | null,
        string | null,
        null
      ]): string[]
    }>

    ERC721Withdrawal: TypedEventDescription<{
      encodeTopics([destAddr, tokenAddr, id]: [
        string | null,
        string | null,
        BigNumberish | null
      ]): string[]
    }>

    EthWithdrawal: TypedEventDescription<{
      encodeTopics([destAddr, amount]: [string | null, null]): string[]
    }>
  }
}

export class ArbSys extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ArbSys
  attach(addressOrName: string): ArbSys
  deployed(): Promise<ArbSys>

  on(event: EventFilter | string, listener: Listener): ArbSys
  once(event: EventFilter | string, listener: Listener): ArbSys
  addListener(eventName: EventFilter | string, listener: Listener): ArbSys
  removeAllListeners(eventName: EventFilter | string): ArbSys
  removeListener(eventName: any, listener: Listener): ArbSys

  interface: ArbSysInterface

  functions: {
    arbOSVersion(overrides?: TransactionOverrides): Promise<BigNumber>

    'arbOSVersion()'(overrides?: TransactionOverrides): Promise<BigNumber>

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'getStorageAt(address,uint256)'(
      account: string,
      index: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    getTransactionCount(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'getTransactionCount(address)'(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    withdrawERC20(
      dest: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    'withdrawERC20(address,uint256)'(
      dest: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    withdrawERC721(
      dest: string,
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    'withdrawERC721(address,uint256)'(
      dest: string,
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    withdrawEth(
      dest: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    'withdrawEth(address)'(
      dest: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>
  }

  arbOSVersion(overrides?: TransactionOverrides): Promise<BigNumber>

  'arbOSVersion()'(overrides?: TransactionOverrides): Promise<BigNumber>

  getStorageAt(
    account: string,
    index: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>

  'getStorageAt(address,uint256)'(
    account: string,
    index: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>

  getTransactionCount(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>

  'getTransactionCount(address)'(
    account: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>

  withdrawERC20(
    dest: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  'withdrawERC20(address,uint256)'(
    dest: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  withdrawERC721(
    dest: string,
    id: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  'withdrawERC721(address,uint256)'(
    dest: string,
    id: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  withdrawEth(
    dest: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  'withdrawEth(address)'(
    dest: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  filters: {
    ERC20Withdrawal(
      destAddr: string | null,
      tokenAddr: string | null,
      amount: null
    ): EventFilter

    ERC721Withdrawal(
      destAddr: string | null,
      tokenAddr: string | null,
      id: BigNumberish | null
    ): EventFilter

    EthWithdrawal(destAddr: string | null, amount: null): EventFilter
  }

  estimate: {
    arbOSVersion(overrides?: TransactionOverrides): Promise<BigNumber>

    'arbOSVersion()'(overrides?: TransactionOverrides): Promise<BigNumber>

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'getStorageAt(address,uint256)'(
      account: string,
      index: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    getTransactionCount(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'getTransactionCount(address)'(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    withdrawERC20(
      dest: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'withdrawERC20(address,uint256)'(
      dest: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    withdrawERC721(
      dest: string,
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'withdrawERC721(address,uint256)'(
      dest: string,
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    withdrawEth(
      dest: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'withdrawEth(address)'(
      dest: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>
  }
}
