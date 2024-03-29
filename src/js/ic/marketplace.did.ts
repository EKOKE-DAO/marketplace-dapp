import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type AllowanceError =
  | { AllowanceNotFound: null }
  | { BadSpender: null }
  | { AllowanceChanged: null }
  | { BadExpiration: null }
  | { AllowanceExpired: null }
  | { InsufficientFunds: null };
export type ApproveError =
  | {
      GenericError: { message: string; error_code: bigint };
    }
  | { TemporarilyUnavailable: null }
  | { Duplicate: { duplicate_of: bigint } }
  | { BadFee: { expected_fee: bigint } }
  | { AllowanceChanged: { current_allowance: bigint } }
  | { CreatedInFuture: { ledger_time: bigint } }
  | { TooOld: null }
  | { Expired: { ledger_time: bigint } }
  | { InsufficientFunds: { balance: bigint } };
export type BalanceError =
  | { AccountNotFound: null }
  | { InsufficientBalance: null };
export type BuyError =
  | { TokenHasNoOwner: null }
  | { IcpAllowanceNotEnough: null }
  | { CallerAlreadyOwnsToken: null }
  | { IcpAllowanceExpired: null };
export type ConfigurationError =
  | { AdminsCantBeEmpty: null }
  | { AnonymousAdmin: null };
export type ConfigurationError_1 =
  | { CustodialsCantBeEmpty: null }
  | { AnonymousCustodial: null };
export type DeferredError =
  | { Nft: NftError }
  | { Ekoke: EkokeError }
  | { Configuration: ConfigurationError_1 }
  | { Unauthorized: null }
  | { Token: TokenError }
  | { StorageError: null }
  | { CanisterCall: [RejectionCode, string] };
export type EcdsaError =
  | { RecoveryIdError: null }
  | { InvalidSignature: null }
  | { InvalidPublicKey: null };
export type EkokeError =
  | { Configuration: ConfigurationError }
  | { Icrc2Approve: ApproveError }
  | { Icrc1Transfer: TransferError }
  | { Pool: PoolError }
  | { Allowance: AllowanceError }
  | { Register: RegisterError }
  | { EthRpcError: [number, string] }
  | { XrcError: null }
  | { StorageError: null }
  | { CanisterCall: [RejectionCode, string] }
  | { Balance: BalanceError }
  | { Icrc2Transfer: TransferFromError }
  | { Ecdsa: EcdsaError };
export type MarketplaceError =
  | { Buy: BuyError }
  | { Configuration: ConfigurationError }
  | { Icrc1Transfer: TransferError }
  | { DeferredCanister: DeferredError }
  | { TokenNotFound: null }
  | { EkokeCanister: EkokeError }
  | { XrcError: string }
  | { StorageError: null }
  | { CanisterCall: [RejectionCode, string] }
  | { Dip721: NftError }
  | { Icrc2Transfer: TransferFromError };
export interface MarketplaceInitData {
  deferred_canister: Principal;
  icp_ledger_canister: Principal;
  ekoke_liquidity_pool_canister: Principal;
  xrc_canister: Principal;
  ekoke_reward_pool_canister: Principal;
  admins: Array<Principal>;
}
export type NftError =
  | { UnauthorizedOperator: null }
  | { SelfTransfer: null }
  | { TokenNotFound: null }
  | { UnauthorizedOwner: null }
  | { TxNotFound: null }
  | { SelfApprove: null }
  | { OperatorNotFound: null }
  | { ExistedNFT: null }
  | { OwnerNotFound: null }
  | { Other: string };
export type PoolError = { PoolNotFound: bigint } | { NotEnoughTokens: null };
export type RegisterError = { TransactionNotFound: null };
export type RejectionCode =
  | { NoError: null }
  | { CanisterError: null }
  | { SysTransient: null }
  | { DestinationInvalid: null }
  | { Unknown: null }
  | { SysFatal: null }
  | { CanisterReject: null };
export type Result = { Ok: null } | { Err: MarketplaceError };
export type Result_1 = { Ok: bigint } | { Err: MarketplaceError };
export type TokenError =
  | { ContractAlreadySigned: bigint }
  | { ContractValueIsNotMultipleOfInstallments: null }
  | { TokenAlreadyExists: bigint }
  | { TokensMismatch: null }
  | { ContractAlreadyExists: bigint }
  | { ContractTokensShouldBeEmpty: null }
  | { TokenDoesNotBelongToContract: bigint }
  | { TokenNotFound: bigint }
  | { ContractSellerQuotaIsNot100: null }
  | { ContractNotFound: bigint }
  | { CannotCloseContract: null }
  | { ContractNotSigned: bigint }
  | { ContractHasNoSeller: null }
  | { BadContractExpiration: null }
  | { ContractHasNoTokens: null }
  | { TokenIsBurned: bigint }
  | { BadMintTokenOwner: bigint }
  | { BadContractProperty: null };
export type TransferError =
  | {
      GenericError: { message: string; error_code: bigint };
    }
  | { TemporarilyUnavailable: null }
  | { BadBurn: { min_burn_amount: bigint } }
  | { Duplicate: { duplicate_of: bigint } }
  | { BadFee: { expected_fee: bigint } }
  | { CreatedInFuture: { ledger_time: bigint } }
  | { TooOld: null }
  | { InsufficientFunds: { balance: bigint } };
export type TransferFromError =
  | {
      GenericError: { message: string; error_code: bigint };
    }
  | { TemporarilyUnavailable: null }
  | { InsufficientAllowance: { allowance: bigint } }
  | { BadBurn: { min_burn_amount: bigint } }
  | { Duplicate: { duplicate_of: bigint } }
  | { BadFee: { expected_fee: bigint } }
  | { CreatedInFuture: { ledger_time: bigint } }
  | { TooOld: null }
  | { InsufficientFunds: { balance: bigint } };

export interface Marketplace {
  admin_cycles: ActorMethod<[], bigint>;
  admin_set_admins: ActorMethod<[Array<Principal>], Result>;
  admin_set_deferred_canister: ActorMethod<[Principal], undefined>;
  admin_set_ekoke_ledger_canister: ActorMethod<[Principal], Result>;
  admin_set_ekoke_liquidity_pool_canister: ActorMethod<[Principal], Result>;
  admin_set_icp_ledger_canister: ActorMethod<[Principal], undefined>;
  admin_set_interest_rate_for_buyer: ActorMethod<[number], undefined>;
  admin_set_xrc_canister: ActorMethod<[Principal], undefined>;
  buy_token: ActorMethod<[bigint, [] | [Uint8Array | number[]]], Result>;
  get_token_price_icp: ActorMethod<[bigint], Result_1>;
}

export const idlFactory = ({ IDL }) => {
  const MarketplaceInitData = IDL.Record({
    deferred_canister: IDL.Principal,
    icp_ledger_canister: IDL.Principal,
    ekoke_liquidity_pool_canister: IDL.Principal,
    xrc_canister: IDL.Principal,
    ekoke_reward_pool_canister: IDL.Principal,
    admins: IDL.Vec(IDL.Principal),
  });
  const BuyError = IDL.Variant({
    TokenHasNoOwner: IDL.Null,
    IcpAllowanceNotEnough: IDL.Null,
    CallerAlreadyOwnsToken: IDL.Null,
    IcpAllowanceExpired: IDL.Null,
  });
  const ConfigurationError = IDL.Variant({
    AdminsCantBeEmpty: IDL.Null,
    AnonymousAdmin: IDL.Null,
  });
  const TransferError = IDL.Variant({
    GenericError: IDL.Record({
      message: IDL.Text,
      error_code: IDL.Nat,
    }),
    TemporarilyUnavailable: IDL.Null,
    BadBurn: IDL.Record({ min_burn_amount: IDL.Nat }),
    Duplicate: IDL.Record({ duplicate_of: IDL.Nat }),
    BadFee: IDL.Record({ expected_fee: IDL.Nat }),
    CreatedInFuture: IDL.Record({ ledger_time: IDL.Nat64 }),
    TooOld: IDL.Null,
    InsufficientFunds: IDL.Record({ balance: IDL.Nat }),
  });
  const NftError = IDL.Variant({
    UnauthorizedOperator: IDL.Null,
    SelfTransfer: IDL.Null,
    TokenNotFound: IDL.Null,
    UnauthorizedOwner: IDL.Null,
    TxNotFound: IDL.Null,
    SelfApprove: IDL.Null,
    OperatorNotFound: IDL.Null,
    ExistedNFT: IDL.Null,
    OwnerNotFound: IDL.Null,
    Other: IDL.Text,
  });
  const ApproveError = IDL.Variant({
    GenericError: IDL.Record({
      message: IDL.Text,
      error_code: IDL.Nat,
    }),
    TemporarilyUnavailable: IDL.Null,
    Duplicate: IDL.Record({ duplicate_of: IDL.Nat }),
    BadFee: IDL.Record({ expected_fee: IDL.Nat }),
    AllowanceChanged: IDL.Record({ current_allowance: IDL.Nat }),
    CreatedInFuture: IDL.Record({ ledger_time: IDL.Nat64 }),
    TooOld: IDL.Null,
    Expired: IDL.Record({ ledger_time: IDL.Nat64 }),
    InsufficientFunds: IDL.Record({ balance: IDL.Nat }),
  });
  const PoolError = IDL.Variant({
    PoolNotFound: IDL.Nat,
    NotEnoughTokens: IDL.Null,
  });
  const AllowanceError = IDL.Variant({
    AllowanceNotFound: IDL.Null,
    BadSpender: IDL.Null,
    AllowanceChanged: IDL.Null,
    BadExpiration: IDL.Null,
    AllowanceExpired: IDL.Null,
    InsufficientFunds: IDL.Null,
  });
  const RegisterError = IDL.Variant({ TransactionNotFound: IDL.Null });
  const RejectionCode = IDL.Variant({
    NoError: IDL.Null,
    CanisterError: IDL.Null,
    SysTransient: IDL.Null,
    DestinationInvalid: IDL.Null,
    Unknown: IDL.Null,
    SysFatal: IDL.Null,
    CanisterReject: IDL.Null,
  });
  const BalanceError = IDL.Variant({
    AccountNotFound: IDL.Null,
    InsufficientBalance: IDL.Null,
  });
  const TransferFromError = IDL.Variant({
    GenericError: IDL.Record({
      message: IDL.Text,
      error_code: IDL.Nat,
    }),
    TemporarilyUnavailable: IDL.Null,
    InsufficientAllowance: IDL.Record({ allowance: IDL.Nat }),
    BadBurn: IDL.Record({ min_burn_amount: IDL.Nat }),
    Duplicate: IDL.Record({ duplicate_of: IDL.Nat }),
    BadFee: IDL.Record({ expected_fee: IDL.Nat }),
    CreatedInFuture: IDL.Record({ ledger_time: IDL.Nat64 }),
    TooOld: IDL.Null,
    InsufficientFunds: IDL.Record({ balance: IDL.Nat }),
  });
  const EcdsaError = IDL.Variant({
    RecoveryIdError: IDL.Null,
    InvalidSignature: IDL.Null,
    InvalidPublicKey: IDL.Null,
  });
  const EkokeError = IDL.Variant({
    Configuration: ConfigurationError,
    Icrc2Approve: ApproveError,
    Icrc1Transfer: TransferError,
    Pool: PoolError,
    Allowance: AllowanceError,
    Register: RegisterError,
    EthRpcError: IDL.Tuple(IDL.Int32, IDL.Text),
    XrcError: IDL.Null,
    StorageError: IDL.Null,
    CanisterCall: IDL.Tuple(RejectionCode, IDL.Text),
    Balance: BalanceError,
    Icrc2Transfer: TransferFromError,
    Ecdsa: EcdsaError,
  });
  const ConfigurationError_1 = IDL.Variant({
    CustodialsCantBeEmpty: IDL.Null,
    AnonymousCustodial: IDL.Null,
  });
  const TokenError = IDL.Variant({
    ContractAlreadySigned: IDL.Nat,
    ContractValueIsNotMultipleOfInstallments: IDL.Null,
    TokenAlreadyExists: IDL.Nat,
    TokensMismatch: IDL.Null,
    ContractAlreadyExists: IDL.Nat,
    ContractTokensShouldBeEmpty: IDL.Null,
    TokenDoesNotBelongToContract: IDL.Nat,
    TokenNotFound: IDL.Nat,
    ContractSellerQuotaIsNot100: IDL.Null,
    ContractNotFound: IDL.Nat,
    CannotCloseContract: IDL.Null,
    ContractNotSigned: IDL.Nat,
    ContractHasNoSeller: IDL.Null,
    BadContractExpiration: IDL.Null,
    ContractHasNoTokens: IDL.Null,
    TokenIsBurned: IDL.Nat,
    BadMintTokenOwner: IDL.Nat,
    BadContractProperty: IDL.Null,
  });
  const DeferredError = IDL.Variant({
    Nft: NftError,
    Ekoke: EkokeError,
    Configuration: ConfigurationError_1,
    Unauthorized: IDL.Null,
    Token: TokenError,
    StorageError: IDL.Null,
    CanisterCall: IDL.Tuple(RejectionCode, IDL.Text),
  });
  const MarketplaceError = IDL.Variant({
    Buy: BuyError,
    Configuration: ConfigurationError,
    Icrc1Transfer: TransferError,
    DeferredCanister: DeferredError,
    TokenNotFound: IDL.Null,
    EkokeCanister: EkokeError,
    XrcError: IDL.Text,
    StorageError: IDL.Null,
    CanisterCall: IDL.Tuple(RejectionCode, IDL.Text),
    Dip721: NftError,
    Icrc2Transfer: TransferFromError,
  });
  const Result = IDL.Variant({ Ok: IDL.Null, Err: MarketplaceError });
  const Result_1 = IDL.Variant({ Ok: IDL.Nat64, Err: MarketplaceError });
  return IDL.Service({
    admin_cycles: IDL.Func([], [IDL.Nat], ['query']),
    admin_set_admins: IDL.Func([IDL.Vec(IDL.Principal)], [Result], []),
    admin_set_deferred_canister: IDL.Func([IDL.Principal], [], []),
    admin_set_ekoke_ledger_canister: IDL.Func([IDL.Principal], [Result], []),
    admin_set_ekoke_liquidity_pool_canister: IDL.Func(
      [IDL.Principal],
      [Result],
      [],
    ),
    admin_set_icp_ledger_canister: IDL.Func([IDL.Principal], [], []),
    admin_set_interest_rate_for_buyer: IDL.Func([IDL.Float64], [], []),
    admin_set_xrc_canister: IDL.Func([IDL.Principal], [], []),
    buy_token: IDL.Func([IDL.Nat, IDL.Opt(IDL.Vec(IDL.Nat8))], [Result], []),
    get_token_price_icp: IDL.Func([IDL.Nat], [Result_1], []),
  });
};
