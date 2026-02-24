
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model entete_facture
 * 
 */
export type entete_facture = $Result.DefaultSelection<Prisma.$entete_facturePayload>
/**
 * Model detail_facture
 * 
 */
export type detail_facture = $Result.DefaultSelection<Prisma.$detail_facturePayload>
/**
 * Model taxe_details
 * 
 */
export type taxe_details = $Result.DefaultSelection<Prisma.$taxe_detailsPayload>
/**
 * Model taxe_pieds
 * 
 */
export type taxe_pieds = $Result.DefaultSelection<Prisma.$taxe_piedsPayload>
/**
 * Model tiers
 * 
 */
export type tiers = $Result.DefaultSelection<Prisma.$tiersPayload>
/**
 * Model information_complementaire
 * 
 */
export type information_complementaire = $Result.DefaultSelection<Prisma.$information_complementairePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entete_factures
 * const entete_factures = await prisma.entete_facture.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Entete_factures
   * const entete_factures = await prisma.entete_facture.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.entete_facture`: Exposes CRUD operations for the **entete_facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entete_factures
    * const entete_factures = await prisma.entete_facture.findMany()
    * ```
    */
  get entete_facture(): Prisma.entete_factureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_facture`: Exposes CRUD operations for the **detail_facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_factures
    * const detail_factures = await prisma.detail_facture.findMany()
    * ```
    */
  get detail_facture(): Prisma.detail_factureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxe_details`: Exposes CRUD operations for the **taxe_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxe_details
    * const taxe_details = await prisma.taxe_details.findMany()
    * ```
    */
  get taxe_details(): Prisma.taxe_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taxe_pieds`: Exposes CRUD operations for the **taxe_pieds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxe_pieds
    * const taxe_pieds = await prisma.taxe_pieds.findMany()
    * ```
    */
  get taxe_pieds(): Prisma.taxe_piedsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiers`: Exposes CRUD operations for the **tiers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tiers
    * const tiers = await prisma.tiers.findMany()
    * ```
    */
  get tiers(): Prisma.tiersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.information_complementaire`: Exposes CRUD operations for the **information_complementaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Information_complementaires
    * const information_complementaires = await prisma.information_complementaire.findMany()
    * ```
    */
  get information_complementaire(): Prisma.information_complementaireDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    entete_facture: 'entete_facture',
    detail_facture: 'detail_facture',
    taxe_details: 'taxe_details',
    taxe_pieds: 'taxe_pieds',
    tiers: 'tiers',
    information_complementaire: 'information_complementaire'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "entete_facture" | "detail_facture" | "taxe_details" | "taxe_pieds" | "tiers" | "information_complementaire"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      entete_facture: {
        payload: Prisma.$entete_facturePayload<ExtArgs>
        fields: Prisma.entete_factureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entete_factureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entete_factureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload>
          }
          findFirst: {
            args: Prisma.entete_factureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entete_factureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload>
          }
          findMany: {
            args: Prisma.entete_factureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload>[]
          }
          create: {
            args: Prisma.entete_factureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload>
          }
          createMany: {
            args: Prisma.entete_factureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.entete_factureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload>
          }
          update: {
            args: Prisma.entete_factureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload>
          }
          deleteMany: {
            args: Prisma.entete_factureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entete_factureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entete_factureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entete_facturePayload>
          }
          aggregate: {
            args: Prisma.Entete_factureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntete_facture>
          }
          groupBy: {
            args: Prisma.entete_factureGroupByArgs<ExtArgs>
            result: $Utils.Optional<Entete_factureGroupByOutputType>[]
          }
          count: {
            args: Prisma.entete_factureCountArgs<ExtArgs>
            result: $Utils.Optional<Entete_factureCountAggregateOutputType> | number
          }
        }
      }
      detail_facture: {
        payload: Prisma.$detail_facturePayload<ExtArgs>
        fields: Prisma.detail_factureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_factureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_factureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload>
          }
          findFirst: {
            args: Prisma.detail_factureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_factureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload>
          }
          findMany: {
            args: Prisma.detail_factureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload>[]
          }
          create: {
            args: Prisma.detail_factureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload>
          }
          createMany: {
            args: Prisma.detail_factureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detail_factureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload>
          }
          update: {
            args: Prisma.detail_factureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload>
          }
          deleteMany: {
            args: Prisma.detail_factureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_factureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detail_factureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_facturePayload>
          }
          aggregate: {
            args: Prisma.Detail_factureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_facture>
          }
          groupBy: {
            args: Prisma.detail_factureGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_factureGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_factureCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_factureCountAggregateOutputType> | number
          }
        }
      }
      taxe_details: {
        payload: Prisma.$taxe_detailsPayload<ExtArgs>
        fields: Prisma.taxe_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taxe_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taxe_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload>
          }
          findFirst: {
            args: Prisma.taxe_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taxe_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload>
          }
          findMany: {
            args: Prisma.taxe_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload>[]
          }
          create: {
            args: Prisma.taxe_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload>
          }
          createMany: {
            args: Prisma.taxe_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.taxe_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload>
          }
          update: {
            args: Prisma.taxe_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload>
          }
          deleteMany: {
            args: Prisma.taxe_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taxe_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.taxe_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_detailsPayload>
          }
          aggregate: {
            args: Prisma.Taxe_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxe_details>
          }
          groupBy: {
            args: Prisma.taxe_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Taxe_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.taxe_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Taxe_detailsCountAggregateOutputType> | number
          }
        }
      }
      taxe_pieds: {
        payload: Prisma.$taxe_piedsPayload<ExtArgs>
        fields: Prisma.taxe_piedsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taxe_piedsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taxe_piedsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload>
          }
          findFirst: {
            args: Prisma.taxe_piedsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taxe_piedsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload>
          }
          findMany: {
            args: Prisma.taxe_piedsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload>[]
          }
          create: {
            args: Prisma.taxe_piedsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload>
          }
          createMany: {
            args: Prisma.taxe_piedsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.taxe_piedsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload>
          }
          update: {
            args: Prisma.taxe_piedsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload>
          }
          deleteMany: {
            args: Prisma.taxe_piedsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taxe_piedsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.taxe_piedsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taxe_piedsPayload>
          }
          aggregate: {
            args: Prisma.Taxe_piedsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaxe_pieds>
          }
          groupBy: {
            args: Prisma.taxe_piedsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Taxe_piedsGroupByOutputType>[]
          }
          count: {
            args: Prisma.taxe_piedsCountArgs<ExtArgs>
            result: $Utils.Optional<Taxe_piedsCountAggregateOutputType> | number
          }
        }
      }
      tiers: {
        payload: Prisma.$tiersPayload<ExtArgs>
        fields: Prisma.tiersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tiersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tiersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload>
          }
          findFirst: {
            args: Prisma.tiersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tiersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload>
          }
          findMany: {
            args: Prisma.tiersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload>[]
          }
          create: {
            args: Prisma.tiersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload>
          }
          createMany: {
            args: Prisma.tiersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tiersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload>
          }
          update: {
            args: Prisma.tiersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload>
          }
          deleteMany: {
            args: Prisma.tiersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tiersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tiersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiersPayload>
          }
          aggregate: {
            args: Prisma.TiersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiers>
          }
          groupBy: {
            args: Prisma.tiersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiersGroupByOutputType>[]
          }
          count: {
            args: Prisma.tiersCountArgs<ExtArgs>
            result: $Utils.Optional<TiersCountAggregateOutputType> | number
          }
        }
      }
      information_complementaire: {
        payload: Prisma.$information_complementairePayload<ExtArgs>
        fields: Prisma.information_complementaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.information_complementaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.information_complementaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload>
          }
          findFirst: {
            args: Prisma.information_complementaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.information_complementaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload>
          }
          findMany: {
            args: Prisma.information_complementaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload>[]
          }
          create: {
            args: Prisma.information_complementaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload>
          }
          createMany: {
            args: Prisma.information_complementaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.information_complementaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload>
          }
          update: {
            args: Prisma.information_complementaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload>
          }
          deleteMany: {
            args: Prisma.information_complementaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.information_complementaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.information_complementaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$information_complementairePayload>
          }
          aggregate: {
            args: Prisma.Information_complementaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInformation_complementaire>
          }
          groupBy: {
            args: Prisma.information_complementaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<Information_complementaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.information_complementaireCountArgs<ExtArgs>
            result: $Utils.Optional<Information_complementaireCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    entete_facture?: entete_factureOmit
    detail_facture?: detail_factureOmit
    taxe_details?: taxe_detailsOmit
    taxe_pieds?: taxe_piedsOmit
    tiers?: tiersOmit
    information_complementaire?: information_complementaireOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Entete_factureCountOutputType
   */

  export type Entete_factureCountOutputType = {
    detail_facture: number
    taxe_pieds: number
  }

  export type Entete_factureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_facture?: boolean | Entete_factureCountOutputTypeCountDetail_factureArgs
    taxe_pieds?: boolean | Entete_factureCountOutputTypeCountTaxe_piedsArgs
  }

  // Custom InputTypes
  /**
   * Entete_factureCountOutputType without action
   */
  export type Entete_factureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entete_factureCountOutputType
     */
    select?: Entete_factureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Entete_factureCountOutputType without action
   */
  export type Entete_factureCountOutputTypeCountDetail_factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_factureWhereInput
  }

  /**
   * Entete_factureCountOutputType without action
   */
  export type Entete_factureCountOutputTypeCountTaxe_piedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taxe_piedsWhereInput
  }


  /**
   * Count Type Detail_factureCountOutputType
   */

  export type Detail_factureCountOutputType = {
    taxe_details: number
  }

  export type Detail_factureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taxe_details?: boolean | Detail_factureCountOutputTypeCountTaxe_detailsArgs
  }

  // Custom InputTypes
  /**
   * Detail_factureCountOutputType without action
   */
  export type Detail_factureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_factureCountOutputType
     */
    select?: Detail_factureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Detail_factureCountOutputType without action
   */
  export type Detail_factureCountOutputTypeCountTaxe_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taxe_detailsWhereInput
  }


  /**
   * Count Type TiersCountOutputType
   */

  export type TiersCountOutputType = {
    entete_facture: number
  }

  export type TiersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entete_facture?: boolean | TiersCountOutputTypeCountEntete_factureArgs
  }

  // Custom InputTypes
  /**
   * TiersCountOutputType without action
   */
  export type TiersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiersCountOutputType
     */
    select?: TiersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiersCountOutputType without action
   */
  export type TiersCountOutputTypeCountEntete_factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entete_factureWhereInput
  }


  /**
   * Count Type Information_complementaireCountOutputType
   */

  export type Information_complementaireCountOutputType = {
    entete_facture: number
  }

  export type Information_complementaireCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entete_facture?: boolean | Information_complementaireCountOutputTypeCountEntete_factureArgs
  }

  // Custom InputTypes
  /**
   * Information_complementaireCountOutputType without action
   */
  export type Information_complementaireCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Information_complementaireCountOutputType
     */
    select?: Information_complementaireCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Information_complementaireCountOutputType without action
   */
  export type Information_complementaireCountOutputTypeCountEntete_factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entete_factureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model entete_facture
   */

  export type AggregateEntete_facture = {
    _count: Entete_factureCountAggregateOutputType | null
    _avg: Entete_factureAvgAggregateOutputType | null
    _sum: Entete_factureSumAggregateOutputType | null
    _min: Entete_factureMinAggregateOutputType | null
    _max: Entete_factureMaxAggregateOutputType | null
  }

  export type Entete_factureAvgAggregateOutputType = {
    id: number | null
    total_ht: Decimal | null
    total_tva: Decimal | null
    total_remise: Decimal | null
    total_autre_taxe: Decimal | null
    total_ttc: Decimal | null
    certifie: number | null
    id_tiers: number | null
    id_information_complementaire: number | null
  }

  export type Entete_factureSumAggregateOutputType = {
    id: bigint | null
    total_ht: Decimal | null
    total_tva: Decimal | null
    total_remise: Decimal | null
    total_autre_taxe: Decimal | null
    total_ttc: Decimal | null
    certifie: number | null
    id_tiers: bigint | null
    id_information_complementaire: bigint | null
  }

  export type Entete_factureMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    numero_facture: string | null
    date_facture: Date | null
    code_type_facture: string | null
    code_type_facturation: string | null
    code_mode_paiement: string | null
    code_devise: string | null
    total_ht: Decimal | null
    total_tva: Decimal | null
    total_remise: Decimal | null
    total_autre_taxe: Decimal | null
    total_ttc: Decimal | null
    point_vente: string | null
    etablissement: string | null
    certifie: number | null
    retour_ncc: string | null
    retour_id_facture: string | null
    retour_token: string | null
    numero_facture_origine: string | null
    id_tiers: bigint | null
    id_information_complementaire: bigint | null
  }

  export type Entete_factureMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    numero_facture: string | null
    date_facture: Date | null
    code_type_facture: string | null
    code_type_facturation: string | null
    code_mode_paiement: string | null
    code_devise: string | null
    total_ht: Decimal | null
    total_tva: Decimal | null
    total_remise: Decimal | null
    total_autre_taxe: Decimal | null
    total_ttc: Decimal | null
    point_vente: string | null
    etablissement: string | null
    certifie: number | null
    retour_ncc: string | null
    retour_id_facture: string | null
    retour_token: string | null
    numero_facture_origine: string | null
    id_tiers: bigint | null
    id_information_complementaire: bigint | null
  }

  export type Entete_factureCountAggregateOutputType = {
    id: number
    uuid: number
    numero_facture: number
    date_facture: number
    code_type_facture: number
    code_type_facturation: number
    code_mode_paiement: number
    code_devise: number
    total_ht: number
    total_tva: number
    total_remise: number
    total_autre_taxe: number
    total_ttc: number
    point_vente: number
    etablissement: number
    certifie: number
    retour_ncc: number
    retour_id_facture: number
    retour_token: number
    numero_facture_origine: number
    id_tiers: number
    id_information_complementaire: number
    _all: number
  }


  export type Entete_factureAvgAggregateInputType = {
    id?: true
    total_ht?: true
    total_tva?: true
    total_remise?: true
    total_autre_taxe?: true
    total_ttc?: true
    certifie?: true
    id_tiers?: true
    id_information_complementaire?: true
  }

  export type Entete_factureSumAggregateInputType = {
    id?: true
    total_ht?: true
    total_tva?: true
    total_remise?: true
    total_autre_taxe?: true
    total_ttc?: true
    certifie?: true
    id_tiers?: true
    id_information_complementaire?: true
  }

  export type Entete_factureMinAggregateInputType = {
    id?: true
    uuid?: true
    numero_facture?: true
    date_facture?: true
    code_type_facture?: true
    code_type_facturation?: true
    code_mode_paiement?: true
    code_devise?: true
    total_ht?: true
    total_tva?: true
    total_remise?: true
    total_autre_taxe?: true
    total_ttc?: true
    point_vente?: true
    etablissement?: true
    certifie?: true
    retour_ncc?: true
    retour_id_facture?: true
    retour_token?: true
    numero_facture_origine?: true
    id_tiers?: true
    id_information_complementaire?: true
  }

  export type Entete_factureMaxAggregateInputType = {
    id?: true
    uuid?: true
    numero_facture?: true
    date_facture?: true
    code_type_facture?: true
    code_type_facturation?: true
    code_mode_paiement?: true
    code_devise?: true
    total_ht?: true
    total_tva?: true
    total_remise?: true
    total_autre_taxe?: true
    total_ttc?: true
    point_vente?: true
    etablissement?: true
    certifie?: true
    retour_ncc?: true
    retour_id_facture?: true
    retour_token?: true
    numero_facture_origine?: true
    id_tiers?: true
    id_information_complementaire?: true
  }

  export type Entete_factureCountAggregateInputType = {
    id?: true
    uuid?: true
    numero_facture?: true
    date_facture?: true
    code_type_facture?: true
    code_type_facturation?: true
    code_mode_paiement?: true
    code_devise?: true
    total_ht?: true
    total_tva?: true
    total_remise?: true
    total_autre_taxe?: true
    total_ttc?: true
    point_vente?: true
    etablissement?: true
    certifie?: true
    retour_ncc?: true
    retour_id_facture?: true
    retour_token?: true
    numero_facture_origine?: true
    id_tiers?: true
    id_information_complementaire?: true
    _all?: true
  }

  export type Entete_factureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entete_facture to aggregate.
     */
    where?: entete_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entete_factures to fetch.
     */
    orderBy?: entete_factureOrderByWithRelationInput | entete_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entete_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entete_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entete_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entete_factures
    **/
    _count?: true | Entete_factureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Entete_factureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Entete_factureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Entete_factureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Entete_factureMaxAggregateInputType
  }

  export type GetEntete_factureAggregateType<T extends Entete_factureAggregateArgs> = {
        [P in keyof T & keyof AggregateEntete_facture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntete_facture[P]>
      : GetScalarType<T[P], AggregateEntete_facture[P]>
  }




  export type entete_factureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entete_factureWhereInput
    orderBy?: entete_factureOrderByWithAggregationInput | entete_factureOrderByWithAggregationInput[]
    by: Entete_factureScalarFieldEnum[] | Entete_factureScalarFieldEnum
    having?: entete_factureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Entete_factureCountAggregateInputType | true
    _avg?: Entete_factureAvgAggregateInputType
    _sum?: Entete_factureSumAggregateInputType
    _min?: Entete_factureMinAggregateInputType
    _max?: Entete_factureMaxAggregateInputType
  }

  export type Entete_factureGroupByOutputType = {
    id: bigint
    uuid: string
    numero_facture: string
    date_facture: Date
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal
    total_tva: Decimal
    total_remise: Decimal
    total_autre_taxe: Decimal
    total_ttc: Decimal
    point_vente: string
    etablissement: string
    certifie: number
    retour_ncc: string | null
    retour_id_facture: string | null
    retour_token: string | null
    numero_facture_origine: string | null
    id_tiers: bigint
    id_information_complementaire: bigint | null
    _count: Entete_factureCountAggregateOutputType | null
    _avg: Entete_factureAvgAggregateOutputType | null
    _sum: Entete_factureSumAggregateOutputType | null
    _min: Entete_factureMinAggregateOutputType | null
    _max: Entete_factureMaxAggregateOutputType | null
  }

  type GetEntete_factureGroupByPayload<T extends entete_factureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Entete_factureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Entete_factureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Entete_factureGroupByOutputType[P]>
            : GetScalarType<T[P], Entete_factureGroupByOutputType[P]>
        }
      >
    >


  export type entete_factureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    numero_facture?: boolean
    date_facture?: boolean
    code_type_facture?: boolean
    code_type_facturation?: boolean
    code_mode_paiement?: boolean
    code_devise?: boolean
    total_ht?: boolean
    total_tva?: boolean
    total_remise?: boolean
    total_autre_taxe?: boolean
    total_ttc?: boolean
    point_vente?: boolean
    etablissement?: boolean
    certifie?: boolean
    retour_ncc?: boolean
    retour_id_facture?: boolean
    retour_token?: boolean
    numero_facture_origine?: boolean
    id_tiers?: boolean
    id_information_complementaire?: boolean
    tiers?: boolean | tiersDefaultArgs<ExtArgs>
    information_complementaire?: boolean | entete_facture$information_complementaireArgs<ExtArgs>
    detail_facture?: boolean | entete_facture$detail_factureArgs<ExtArgs>
    taxe_pieds?: boolean | entete_facture$taxe_piedsArgs<ExtArgs>
    _count?: boolean | Entete_factureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entete_facture"]>



  export type entete_factureSelectScalar = {
    id?: boolean
    uuid?: boolean
    numero_facture?: boolean
    date_facture?: boolean
    code_type_facture?: boolean
    code_type_facturation?: boolean
    code_mode_paiement?: boolean
    code_devise?: boolean
    total_ht?: boolean
    total_tva?: boolean
    total_remise?: boolean
    total_autre_taxe?: boolean
    total_ttc?: boolean
    point_vente?: boolean
    etablissement?: boolean
    certifie?: boolean
    retour_ncc?: boolean
    retour_id_facture?: boolean
    retour_token?: boolean
    numero_facture_origine?: boolean
    id_tiers?: boolean
    id_information_complementaire?: boolean
  }

  export type entete_factureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "numero_facture" | "date_facture" | "code_type_facture" | "code_type_facturation" | "code_mode_paiement" | "code_devise" | "total_ht" | "total_tva" | "total_remise" | "total_autre_taxe" | "total_ttc" | "point_vente" | "etablissement" | "certifie" | "retour_ncc" | "retour_id_facture" | "retour_token" | "numero_facture_origine" | "id_tiers" | "id_information_complementaire", ExtArgs["result"]["entete_facture"]>
  export type entete_factureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiers?: boolean | tiersDefaultArgs<ExtArgs>
    information_complementaire?: boolean | entete_facture$information_complementaireArgs<ExtArgs>
    detail_facture?: boolean | entete_facture$detail_factureArgs<ExtArgs>
    taxe_pieds?: boolean | entete_facture$taxe_piedsArgs<ExtArgs>
    _count?: boolean | Entete_factureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $entete_facturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entete_facture"
    objects: {
      tiers: Prisma.$tiersPayload<ExtArgs>
      information_complementaire: Prisma.$information_complementairePayload<ExtArgs> | null
      detail_facture: Prisma.$detail_facturePayload<ExtArgs>[]
      taxe_pieds: Prisma.$taxe_piedsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      numero_facture: string
      date_facture: Date
      code_type_facture: string
      code_type_facturation: string
      code_mode_paiement: string
      code_devise: string
      total_ht: Prisma.Decimal
      total_tva: Prisma.Decimal
      total_remise: Prisma.Decimal
      total_autre_taxe: Prisma.Decimal
      total_ttc: Prisma.Decimal
      point_vente: string
      etablissement: string
      certifie: number
      retour_ncc: string | null
      retour_id_facture: string | null
      retour_token: string | null
      numero_facture_origine: string | null
      id_tiers: bigint
      id_information_complementaire: bigint | null
    }, ExtArgs["result"]["entete_facture"]>
    composites: {}
  }

  type entete_factureGetPayload<S extends boolean | null | undefined | entete_factureDefaultArgs> = $Result.GetResult<Prisma.$entete_facturePayload, S>

  type entete_factureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entete_factureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Entete_factureCountAggregateInputType | true
    }

  export interface entete_factureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entete_facture'], meta: { name: 'entete_facture' } }
    /**
     * Find zero or one Entete_facture that matches the filter.
     * @param {entete_factureFindUniqueArgs} args - Arguments to find a Entete_facture
     * @example
     * // Get one Entete_facture
     * const entete_facture = await prisma.entete_facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entete_factureFindUniqueArgs>(args: SelectSubset<T, entete_factureFindUniqueArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entete_facture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entete_factureFindUniqueOrThrowArgs} args - Arguments to find a Entete_facture
     * @example
     * // Get one Entete_facture
     * const entete_facture = await prisma.entete_facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entete_factureFindUniqueOrThrowArgs>(args: SelectSubset<T, entete_factureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entete_facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entete_factureFindFirstArgs} args - Arguments to find a Entete_facture
     * @example
     * // Get one Entete_facture
     * const entete_facture = await prisma.entete_facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entete_factureFindFirstArgs>(args?: SelectSubset<T, entete_factureFindFirstArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entete_facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entete_factureFindFirstOrThrowArgs} args - Arguments to find a Entete_facture
     * @example
     * // Get one Entete_facture
     * const entete_facture = await prisma.entete_facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entete_factureFindFirstOrThrowArgs>(args?: SelectSubset<T, entete_factureFindFirstOrThrowArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entete_factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entete_factureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entete_factures
     * const entete_factures = await prisma.entete_facture.findMany()
     * 
     * // Get first 10 Entete_factures
     * const entete_factures = await prisma.entete_facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entete_factureWithIdOnly = await prisma.entete_facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entete_factureFindManyArgs>(args?: SelectSubset<T, entete_factureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entete_facture.
     * @param {entete_factureCreateArgs} args - Arguments to create a Entete_facture.
     * @example
     * // Create one Entete_facture
     * const Entete_facture = await prisma.entete_facture.create({
     *   data: {
     *     // ... data to create a Entete_facture
     *   }
     * })
     * 
     */
    create<T extends entete_factureCreateArgs>(args: SelectSubset<T, entete_factureCreateArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entete_factures.
     * @param {entete_factureCreateManyArgs} args - Arguments to create many Entete_factures.
     * @example
     * // Create many Entete_factures
     * const entete_facture = await prisma.entete_facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entete_factureCreateManyArgs>(args?: SelectSubset<T, entete_factureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entete_facture.
     * @param {entete_factureDeleteArgs} args - Arguments to delete one Entete_facture.
     * @example
     * // Delete one Entete_facture
     * const Entete_facture = await prisma.entete_facture.delete({
     *   where: {
     *     // ... filter to delete one Entete_facture
     *   }
     * })
     * 
     */
    delete<T extends entete_factureDeleteArgs>(args: SelectSubset<T, entete_factureDeleteArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entete_facture.
     * @param {entete_factureUpdateArgs} args - Arguments to update one Entete_facture.
     * @example
     * // Update one Entete_facture
     * const entete_facture = await prisma.entete_facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entete_factureUpdateArgs>(args: SelectSubset<T, entete_factureUpdateArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entete_factures.
     * @param {entete_factureDeleteManyArgs} args - Arguments to filter Entete_factures to delete.
     * @example
     * // Delete a few Entete_factures
     * const { count } = await prisma.entete_facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entete_factureDeleteManyArgs>(args?: SelectSubset<T, entete_factureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entete_factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entete_factureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entete_factures
     * const entete_facture = await prisma.entete_facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entete_factureUpdateManyArgs>(args: SelectSubset<T, entete_factureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entete_facture.
     * @param {entete_factureUpsertArgs} args - Arguments to update or create a Entete_facture.
     * @example
     * // Update or create a Entete_facture
     * const entete_facture = await prisma.entete_facture.upsert({
     *   create: {
     *     // ... data to create a Entete_facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entete_facture we want to update
     *   }
     * })
     */
    upsert<T extends entete_factureUpsertArgs>(args: SelectSubset<T, entete_factureUpsertArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entete_factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entete_factureCountArgs} args - Arguments to filter Entete_factures to count.
     * @example
     * // Count the number of Entete_factures
     * const count = await prisma.entete_facture.count({
     *   where: {
     *     // ... the filter for the Entete_factures we want to count
     *   }
     * })
    **/
    count<T extends entete_factureCountArgs>(
      args?: Subset<T, entete_factureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Entete_factureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entete_facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Entete_factureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Entete_factureAggregateArgs>(args: Subset<T, Entete_factureAggregateArgs>): Prisma.PrismaPromise<GetEntete_factureAggregateType<T>>

    /**
     * Group by Entete_facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entete_factureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entete_factureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entete_factureGroupByArgs['orderBy'] }
        : { orderBy?: entete_factureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entete_factureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntete_factureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entete_facture model
   */
  readonly fields: entete_factureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entete_facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entete_factureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiers<T extends tiersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tiersDefaultArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    information_complementaire<T extends entete_facture$information_complementaireArgs<ExtArgs> = {}>(args?: Subset<T, entete_facture$information_complementaireArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detail_facture<T extends entete_facture$detail_factureArgs<ExtArgs> = {}>(args?: Subset<T, entete_facture$detail_factureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taxe_pieds<T extends entete_facture$taxe_piedsArgs<ExtArgs> = {}>(args?: Subset<T, entete_facture$taxe_piedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entete_facture model
   */
  interface entete_factureFieldRefs {
    readonly id: FieldRef<"entete_facture", 'BigInt'>
    readonly uuid: FieldRef<"entete_facture", 'String'>
    readonly numero_facture: FieldRef<"entete_facture", 'String'>
    readonly date_facture: FieldRef<"entete_facture", 'DateTime'>
    readonly code_type_facture: FieldRef<"entete_facture", 'String'>
    readonly code_type_facturation: FieldRef<"entete_facture", 'String'>
    readonly code_mode_paiement: FieldRef<"entete_facture", 'String'>
    readonly code_devise: FieldRef<"entete_facture", 'String'>
    readonly total_ht: FieldRef<"entete_facture", 'Decimal'>
    readonly total_tva: FieldRef<"entete_facture", 'Decimal'>
    readonly total_remise: FieldRef<"entete_facture", 'Decimal'>
    readonly total_autre_taxe: FieldRef<"entete_facture", 'Decimal'>
    readonly total_ttc: FieldRef<"entete_facture", 'Decimal'>
    readonly point_vente: FieldRef<"entete_facture", 'String'>
    readonly etablissement: FieldRef<"entete_facture", 'String'>
    readonly certifie: FieldRef<"entete_facture", 'Int'>
    readonly retour_ncc: FieldRef<"entete_facture", 'String'>
    readonly retour_id_facture: FieldRef<"entete_facture", 'String'>
    readonly retour_token: FieldRef<"entete_facture", 'String'>
    readonly numero_facture_origine: FieldRef<"entete_facture", 'String'>
    readonly id_tiers: FieldRef<"entete_facture", 'BigInt'>
    readonly id_information_complementaire: FieldRef<"entete_facture", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * entete_facture findUnique
   */
  export type entete_factureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * Filter, which entete_facture to fetch.
     */
    where: entete_factureWhereUniqueInput
  }

  /**
   * entete_facture findUniqueOrThrow
   */
  export type entete_factureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * Filter, which entete_facture to fetch.
     */
    where: entete_factureWhereUniqueInput
  }

  /**
   * entete_facture findFirst
   */
  export type entete_factureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * Filter, which entete_facture to fetch.
     */
    where?: entete_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entete_factures to fetch.
     */
    orderBy?: entete_factureOrderByWithRelationInput | entete_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entete_factures.
     */
    cursor?: entete_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entete_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entete_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entete_factures.
     */
    distinct?: Entete_factureScalarFieldEnum | Entete_factureScalarFieldEnum[]
  }

  /**
   * entete_facture findFirstOrThrow
   */
  export type entete_factureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * Filter, which entete_facture to fetch.
     */
    where?: entete_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entete_factures to fetch.
     */
    orderBy?: entete_factureOrderByWithRelationInput | entete_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entete_factures.
     */
    cursor?: entete_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entete_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entete_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entete_factures.
     */
    distinct?: Entete_factureScalarFieldEnum | Entete_factureScalarFieldEnum[]
  }

  /**
   * entete_facture findMany
   */
  export type entete_factureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * Filter, which entete_factures to fetch.
     */
    where?: entete_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entete_factures to fetch.
     */
    orderBy?: entete_factureOrderByWithRelationInput | entete_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entete_factures.
     */
    cursor?: entete_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entete_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entete_factures.
     */
    skip?: number
    distinct?: Entete_factureScalarFieldEnum | Entete_factureScalarFieldEnum[]
  }

  /**
   * entete_facture create
   */
  export type entete_factureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * The data needed to create a entete_facture.
     */
    data: XOR<entete_factureCreateInput, entete_factureUncheckedCreateInput>
  }

  /**
   * entete_facture createMany
   */
  export type entete_factureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entete_factures.
     */
    data: entete_factureCreateManyInput | entete_factureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entete_facture update
   */
  export type entete_factureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * The data needed to update a entete_facture.
     */
    data: XOR<entete_factureUpdateInput, entete_factureUncheckedUpdateInput>
    /**
     * Choose, which entete_facture to update.
     */
    where: entete_factureWhereUniqueInput
  }

  /**
   * entete_facture updateMany
   */
  export type entete_factureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entete_factures.
     */
    data: XOR<entete_factureUpdateManyMutationInput, entete_factureUncheckedUpdateManyInput>
    /**
     * Filter which entete_factures to update
     */
    where?: entete_factureWhereInput
    /**
     * Limit how many entete_factures to update.
     */
    limit?: number
  }

  /**
   * entete_facture upsert
   */
  export type entete_factureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * The filter to search for the entete_facture to update in case it exists.
     */
    where: entete_factureWhereUniqueInput
    /**
     * In case the entete_facture found by the `where` argument doesn't exist, create a new entete_facture with this data.
     */
    create: XOR<entete_factureCreateInput, entete_factureUncheckedCreateInput>
    /**
     * In case the entete_facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entete_factureUpdateInput, entete_factureUncheckedUpdateInput>
  }

  /**
   * entete_facture delete
   */
  export type entete_factureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    /**
     * Filter which entete_facture to delete.
     */
    where: entete_factureWhereUniqueInput
  }

  /**
   * entete_facture deleteMany
   */
  export type entete_factureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entete_factures to delete
     */
    where?: entete_factureWhereInput
    /**
     * Limit how many entete_factures to delete.
     */
    limit?: number
  }

  /**
   * entete_facture.information_complementaire
   */
  export type entete_facture$information_complementaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    where?: information_complementaireWhereInput
  }

  /**
   * entete_facture.detail_facture
   */
  export type entete_facture$detail_factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    where?: detail_factureWhereInput
    orderBy?: detail_factureOrderByWithRelationInput | detail_factureOrderByWithRelationInput[]
    cursor?: detail_factureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_factureScalarFieldEnum | Detail_factureScalarFieldEnum[]
  }

  /**
   * entete_facture.taxe_pieds
   */
  export type entete_facture$taxe_piedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    where?: taxe_piedsWhereInput
    orderBy?: taxe_piedsOrderByWithRelationInput | taxe_piedsOrderByWithRelationInput[]
    cursor?: taxe_piedsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Taxe_piedsScalarFieldEnum | Taxe_piedsScalarFieldEnum[]
  }

  /**
   * entete_facture without action
   */
  export type entete_factureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
  }


  /**
   * Model detail_facture
   */

  export type AggregateDetail_facture = {
    _count: Detail_factureCountAggregateOutputType | null
    _avg: Detail_factureAvgAggregateOutputType | null
    _sum: Detail_factureSumAggregateOutputType | null
    _min: Detail_factureMinAggregateOutputType | null
    _max: Detail_factureMaxAggregateOutputType | null
  }

  export type Detail_factureAvgAggregateOutputType = {
    id: number | null
    id_entete_facture: number | null
    quantite: number | null
    prix: Decimal | null
    montant_ht: Decimal | null
    remise: number | null
    montant_ttc: Decimal | null
    montant_taux_imposition: Decimal | null
    ligne_avoir: number | null
    id_detail_origine_facture: number | null
    montant_remise: Decimal | null
  }

  export type Detail_factureSumAggregateOutputType = {
    id: bigint | null
    id_entete_facture: bigint | null
    quantite: number | null
    prix: Decimal | null
    montant_ht: Decimal | null
    remise: number | null
    montant_ttc: Decimal | null
    montant_taux_imposition: Decimal | null
    ligne_avoir: number | null
    id_detail_origine_facture: bigint | null
    montant_remise: Decimal | null
  }

  export type Detail_factureMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    id_entete_facture: bigint | null
    code_taux_imposition: string | null
    reference_article: string | null
    designation_article: string | null
    quantite: number | null
    unite_vente: string | null
    prix: Decimal | null
    montant_ht: Decimal | null
    remise: number | null
    montant_ttc: Decimal | null
    montant_taux_imposition: Decimal | null
    retour_detail: string | null
    ligne_avoir: number | null
    id_detail_origine_facture: bigint | null
    montant_remise: Decimal | null
  }

  export type Detail_factureMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    id_entete_facture: bigint | null
    code_taux_imposition: string | null
    reference_article: string | null
    designation_article: string | null
    quantite: number | null
    unite_vente: string | null
    prix: Decimal | null
    montant_ht: Decimal | null
    remise: number | null
    montant_ttc: Decimal | null
    montant_taux_imposition: Decimal | null
    retour_detail: string | null
    ligne_avoir: number | null
    id_detail_origine_facture: bigint | null
    montant_remise: Decimal | null
  }

  export type Detail_factureCountAggregateOutputType = {
    id: number
    uuid: number
    id_entete_facture: number
    code_taux_imposition: number
    reference_article: number
    designation_article: number
    quantite: number
    unite_vente: number
    prix: number
    montant_ht: number
    remise: number
    montant_ttc: number
    montant_taux_imposition: number
    retour_detail: number
    ligne_avoir: number
    id_detail_origine_facture: number
    montant_remise: number
    _all: number
  }


  export type Detail_factureAvgAggregateInputType = {
    id?: true
    id_entete_facture?: true
    quantite?: true
    prix?: true
    montant_ht?: true
    remise?: true
    montant_ttc?: true
    montant_taux_imposition?: true
    ligne_avoir?: true
    id_detail_origine_facture?: true
    montant_remise?: true
  }

  export type Detail_factureSumAggregateInputType = {
    id?: true
    id_entete_facture?: true
    quantite?: true
    prix?: true
    montant_ht?: true
    remise?: true
    montant_ttc?: true
    montant_taux_imposition?: true
    ligne_avoir?: true
    id_detail_origine_facture?: true
    montant_remise?: true
  }

  export type Detail_factureMinAggregateInputType = {
    id?: true
    uuid?: true
    id_entete_facture?: true
    code_taux_imposition?: true
    reference_article?: true
    designation_article?: true
    quantite?: true
    unite_vente?: true
    prix?: true
    montant_ht?: true
    remise?: true
    montant_ttc?: true
    montant_taux_imposition?: true
    retour_detail?: true
    ligne_avoir?: true
    id_detail_origine_facture?: true
    montant_remise?: true
  }

  export type Detail_factureMaxAggregateInputType = {
    id?: true
    uuid?: true
    id_entete_facture?: true
    code_taux_imposition?: true
    reference_article?: true
    designation_article?: true
    quantite?: true
    unite_vente?: true
    prix?: true
    montant_ht?: true
    remise?: true
    montant_ttc?: true
    montant_taux_imposition?: true
    retour_detail?: true
    ligne_avoir?: true
    id_detail_origine_facture?: true
    montant_remise?: true
  }

  export type Detail_factureCountAggregateInputType = {
    id?: true
    uuid?: true
    id_entete_facture?: true
    code_taux_imposition?: true
    reference_article?: true
    designation_article?: true
    quantite?: true
    unite_vente?: true
    prix?: true
    montant_ht?: true
    remise?: true
    montant_ttc?: true
    montant_taux_imposition?: true
    retour_detail?: true
    ligne_avoir?: true
    id_detail_origine_facture?: true
    montant_remise?: true
    _all?: true
  }

  export type Detail_factureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_facture to aggregate.
     */
    where?: detail_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_factures to fetch.
     */
    orderBy?: detail_factureOrderByWithRelationInput | detail_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_factures
    **/
    _count?: true | Detail_factureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_factureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_factureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_factureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_factureMaxAggregateInputType
  }

  export type GetDetail_factureAggregateType<T extends Detail_factureAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_facture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_facture[P]>
      : GetScalarType<T[P], AggregateDetail_facture[P]>
  }




  export type detail_factureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_factureWhereInput
    orderBy?: detail_factureOrderByWithAggregationInput | detail_factureOrderByWithAggregationInput[]
    by: Detail_factureScalarFieldEnum[] | Detail_factureScalarFieldEnum
    having?: detail_factureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_factureCountAggregateInputType | true
    _avg?: Detail_factureAvgAggregateInputType
    _sum?: Detail_factureSumAggregateInputType
    _min?: Detail_factureMinAggregateInputType
    _max?: Detail_factureMaxAggregateInputType
  }

  export type Detail_factureGroupByOutputType = {
    id: bigint
    uuid: string
    id_entete_facture: bigint
    code_taux_imposition: string
    reference_article: string | null
    designation_article: string | null
    quantite: number
    unite_vente: string
    prix: Decimal
    montant_ht: Decimal
    remise: number
    montant_ttc: Decimal
    montant_taux_imposition: Decimal
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint
    montant_remise: Decimal
    _count: Detail_factureCountAggregateOutputType | null
    _avg: Detail_factureAvgAggregateOutputType | null
    _sum: Detail_factureSumAggregateOutputType | null
    _min: Detail_factureMinAggregateOutputType | null
    _max: Detail_factureMaxAggregateOutputType | null
  }

  type GetDetail_factureGroupByPayload<T extends detail_factureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_factureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_factureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_factureGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_factureGroupByOutputType[P]>
        }
      >
    >


  export type detail_factureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    id_entete_facture?: boolean
    code_taux_imposition?: boolean
    reference_article?: boolean
    designation_article?: boolean
    quantite?: boolean
    unite_vente?: boolean
    prix?: boolean
    montant_ht?: boolean
    remise?: boolean
    montant_ttc?: boolean
    montant_taux_imposition?: boolean
    retour_detail?: boolean
    ligne_avoir?: boolean
    id_detail_origine_facture?: boolean
    montant_remise?: boolean
    entete_facture?: boolean | entete_factureDefaultArgs<ExtArgs>
    taxe_details?: boolean | detail_facture$taxe_detailsArgs<ExtArgs>
    _count?: boolean | Detail_factureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_facture"]>



  export type detail_factureSelectScalar = {
    id?: boolean
    uuid?: boolean
    id_entete_facture?: boolean
    code_taux_imposition?: boolean
    reference_article?: boolean
    designation_article?: boolean
    quantite?: boolean
    unite_vente?: boolean
    prix?: boolean
    montant_ht?: boolean
    remise?: boolean
    montant_ttc?: boolean
    montant_taux_imposition?: boolean
    retour_detail?: boolean
    ligne_avoir?: boolean
    id_detail_origine_facture?: boolean
    montant_remise?: boolean
  }

  export type detail_factureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "id_entete_facture" | "code_taux_imposition" | "reference_article" | "designation_article" | "quantite" | "unite_vente" | "prix" | "montant_ht" | "remise" | "montant_ttc" | "montant_taux_imposition" | "retour_detail" | "ligne_avoir" | "id_detail_origine_facture" | "montant_remise", ExtArgs["result"]["detail_facture"]>
  export type detail_factureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entete_facture?: boolean | entete_factureDefaultArgs<ExtArgs>
    taxe_details?: boolean | detail_facture$taxe_detailsArgs<ExtArgs>
    _count?: boolean | Detail_factureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $detail_facturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_facture"
    objects: {
      entete_facture: Prisma.$entete_facturePayload<ExtArgs>
      taxe_details: Prisma.$taxe_detailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      id_entete_facture: bigint
      code_taux_imposition: string
      reference_article: string | null
      designation_article: string | null
      quantite: number
      unite_vente: string
      prix: Prisma.Decimal
      montant_ht: Prisma.Decimal
      remise: number
      montant_ttc: Prisma.Decimal
      montant_taux_imposition: Prisma.Decimal
      retour_detail: string
      ligne_avoir: number
      id_detail_origine_facture: bigint
      montant_remise: Prisma.Decimal
    }, ExtArgs["result"]["detail_facture"]>
    composites: {}
  }

  type detail_factureGetPayload<S extends boolean | null | undefined | detail_factureDefaultArgs> = $Result.GetResult<Prisma.$detail_facturePayload, S>

  type detail_factureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detail_factureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_factureCountAggregateInputType | true
    }

  export interface detail_factureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_facture'], meta: { name: 'detail_facture' } }
    /**
     * Find zero or one Detail_facture that matches the filter.
     * @param {detail_factureFindUniqueArgs} args - Arguments to find a Detail_facture
     * @example
     * // Get one Detail_facture
     * const detail_facture = await prisma.detail_facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_factureFindUniqueArgs>(args: SelectSubset<T, detail_factureFindUniqueArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_facture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_factureFindUniqueOrThrowArgs} args - Arguments to find a Detail_facture
     * @example
     * // Get one Detail_facture
     * const detail_facture = await prisma.detail_facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_factureFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_factureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_factureFindFirstArgs} args - Arguments to find a Detail_facture
     * @example
     * // Get one Detail_facture
     * const detail_facture = await prisma.detail_facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_factureFindFirstArgs>(args?: SelectSubset<T, detail_factureFindFirstArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_factureFindFirstOrThrowArgs} args - Arguments to find a Detail_facture
     * @example
     * // Get one Detail_facture
     * const detail_facture = await prisma.detail_facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_factureFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_factureFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_factureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_factures
     * const detail_factures = await prisma.detail_facture.findMany()
     * 
     * // Get first 10 Detail_factures
     * const detail_factures = await prisma.detail_facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detail_factureWithIdOnly = await prisma.detail_facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detail_factureFindManyArgs>(args?: SelectSubset<T, detail_factureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_facture.
     * @param {detail_factureCreateArgs} args - Arguments to create a Detail_facture.
     * @example
     * // Create one Detail_facture
     * const Detail_facture = await prisma.detail_facture.create({
     *   data: {
     *     // ... data to create a Detail_facture
     *   }
     * })
     * 
     */
    create<T extends detail_factureCreateArgs>(args: SelectSubset<T, detail_factureCreateArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_factures.
     * @param {detail_factureCreateManyArgs} args - Arguments to create many Detail_factures.
     * @example
     * // Create many Detail_factures
     * const detail_facture = await prisma.detail_facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_factureCreateManyArgs>(args?: SelectSubset<T, detail_factureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detail_facture.
     * @param {detail_factureDeleteArgs} args - Arguments to delete one Detail_facture.
     * @example
     * // Delete one Detail_facture
     * const Detail_facture = await prisma.detail_facture.delete({
     *   where: {
     *     // ... filter to delete one Detail_facture
     *   }
     * })
     * 
     */
    delete<T extends detail_factureDeleteArgs>(args: SelectSubset<T, detail_factureDeleteArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_facture.
     * @param {detail_factureUpdateArgs} args - Arguments to update one Detail_facture.
     * @example
     * // Update one Detail_facture
     * const detail_facture = await prisma.detail_facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_factureUpdateArgs>(args: SelectSubset<T, detail_factureUpdateArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_factures.
     * @param {detail_factureDeleteManyArgs} args - Arguments to filter Detail_factures to delete.
     * @example
     * // Delete a few Detail_factures
     * const { count } = await prisma.detail_facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_factureDeleteManyArgs>(args?: SelectSubset<T, detail_factureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_factureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_factures
     * const detail_facture = await prisma.detail_facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_factureUpdateManyArgs>(args: SelectSubset<T, detail_factureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detail_facture.
     * @param {detail_factureUpsertArgs} args - Arguments to update or create a Detail_facture.
     * @example
     * // Update or create a Detail_facture
     * const detail_facture = await prisma.detail_facture.upsert({
     *   create: {
     *     // ... data to create a Detail_facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_facture we want to update
     *   }
     * })
     */
    upsert<T extends detail_factureUpsertArgs>(args: SelectSubset<T, detail_factureUpsertArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_factureCountArgs} args - Arguments to filter Detail_factures to count.
     * @example
     * // Count the number of Detail_factures
     * const count = await prisma.detail_facture.count({
     *   where: {
     *     // ... the filter for the Detail_factures we want to count
     *   }
     * })
    **/
    count<T extends detail_factureCountArgs>(
      args?: Subset<T, detail_factureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_factureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_factureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detail_factureAggregateArgs>(args: Subset<T, Detail_factureAggregateArgs>): Prisma.PrismaPromise<GetDetail_factureAggregateType<T>>

    /**
     * Group by Detail_facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_factureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detail_factureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_factureGroupByArgs['orderBy'] }
        : { orderBy?: detail_factureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detail_factureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_factureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_facture model
   */
  readonly fields: detail_factureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_factureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entete_facture<T extends entete_factureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entete_factureDefaultArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taxe_details<T extends detail_facture$taxe_detailsArgs<ExtArgs> = {}>(args?: Subset<T, detail_facture$taxe_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detail_facture model
   */
  interface detail_factureFieldRefs {
    readonly id: FieldRef<"detail_facture", 'BigInt'>
    readonly uuid: FieldRef<"detail_facture", 'String'>
    readonly id_entete_facture: FieldRef<"detail_facture", 'BigInt'>
    readonly code_taux_imposition: FieldRef<"detail_facture", 'String'>
    readonly reference_article: FieldRef<"detail_facture", 'String'>
    readonly designation_article: FieldRef<"detail_facture", 'String'>
    readonly quantite: FieldRef<"detail_facture", 'Float'>
    readonly unite_vente: FieldRef<"detail_facture", 'String'>
    readonly prix: FieldRef<"detail_facture", 'Decimal'>
    readonly montant_ht: FieldRef<"detail_facture", 'Decimal'>
    readonly remise: FieldRef<"detail_facture", 'Float'>
    readonly montant_ttc: FieldRef<"detail_facture", 'Decimal'>
    readonly montant_taux_imposition: FieldRef<"detail_facture", 'Decimal'>
    readonly retour_detail: FieldRef<"detail_facture", 'String'>
    readonly ligne_avoir: FieldRef<"detail_facture", 'Int'>
    readonly id_detail_origine_facture: FieldRef<"detail_facture", 'BigInt'>
    readonly montant_remise: FieldRef<"detail_facture", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * detail_facture findUnique
   */
  export type detail_factureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * Filter, which detail_facture to fetch.
     */
    where: detail_factureWhereUniqueInput
  }

  /**
   * detail_facture findUniqueOrThrow
   */
  export type detail_factureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * Filter, which detail_facture to fetch.
     */
    where: detail_factureWhereUniqueInput
  }

  /**
   * detail_facture findFirst
   */
  export type detail_factureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * Filter, which detail_facture to fetch.
     */
    where?: detail_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_factures to fetch.
     */
    orderBy?: detail_factureOrderByWithRelationInput | detail_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_factures.
     */
    cursor?: detail_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_factures.
     */
    distinct?: Detail_factureScalarFieldEnum | Detail_factureScalarFieldEnum[]
  }

  /**
   * detail_facture findFirstOrThrow
   */
  export type detail_factureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * Filter, which detail_facture to fetch.
     */
    where?: detail_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_factures to fetch.
     */
    orderBy?: detail_factureOrderByWithRelationInput | detail_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_factures.
     */
    cursor?: detail_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_factures.
     */
    distinct?: Detail_factureScalarFieldEnum | Detail_factureScalarFieldEnum[]
  }

  /**
   * detail_facture findMany
   */
  export type detail_factureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * Filter, which detail_factures to fetch.
     */
    where?: detail_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_factures to fetch.
     */
    orderBy?: detail_factureOrderByWithRelationInput | detail_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_factures.
     */
    cursor?: detail_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_factures.
     */
    skip?: number
    distinct?: Detail_factureScalarFieldEnum | Detail_factureScalarFieldEnum[]
  }

  /**
   * detail_facture create
   */
  export type detail_factureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_facture.
     */
    data: XOR<detail_factureCreateInput, detail_factureUncheckedCreateInput>
  }

  /**
   * detail_facture createMany
   */
  export type detail_factureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_factures.
     */
    data: detail_factureCreateManyInput | detail_factureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_facture update
   */
  export type detail_factureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_facture.
     */
    data: XOR<detail_factureUpdateInput, detail_factureUncheckedUpdateInput>
    /**
     * Choose, which detail_facture to update.
     */
    where: detail_factureWhereUniqueInput
  }

  /**
   * detail_facture updateMany
   */
  export type detail_factureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_factures.
     */
    data: XOR<detail_factureUpdateManyMutationInput, detail_factureUncheckedUpdateManyInput>
    /**
     * Filter which detail_factures to update
     */
    where?: detail_factureWhereInput
    /**
     * Limit how many detail_factures to update.
     */
    limit?: number
  }

  /**
   * detail_facture upsert
   */
  export type detail_factureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_facture to update in case it exists.
     */
    where: detail_factureWhereUniqueInput
    /**
     * In case the detail_facture found by the `where` argument doesn't exist, create a new detail_facture with this data.
     */
    create: XOR<detail_factureCreateInput, detail_factureUncheckedCreateInput>
    /**
     * In case the detail_facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_factureUpdateInput, detail_factureUncheckedUpdateInput>
  }

  /**
   * detail_facture delete
   */
  export type detail_factureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
    /**
     * Filter which detail_facture to delete.
     */
    where: detail_factureWhereUniqueInput
  }

  /**
   * detail_facture deleteMany
   */
  export type detail_factureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_factures to delete
     */
    where?: detail_factureWhereInput
    /**
     * Limit how many detail_factures to delete.
     */
    limit?: number
  }

  /**
   * detail_facture.taxe_details
   */
  export type detail_facture$taxe_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    where?: taxe_detailsWhereInput
    orderBy?: taxe_detailsOrderByWithRelationInput | taxe_detailsOrderByWithRelationInput[]
    cursor?: taxe_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Taxe_detailsScalarFieldEnum | Taxe_detailsScalarFieldEnum[]
  }

  /**
   * detail_facture without action
   */
  export type detail_factureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_facture
     */
    select?: detail_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_facture
     */
    omit?: detail_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_factureInclude<ExtArgs> | null
  }


  /**
   * Model taxe_details
   */

  export type AggregateTaxe_details = {
    _count: Taxe_detailsCountAggregateOutputType | null
    _avg: Taxe_detailsAvgAggregateOutputType | null
    _sum: Taxe_detailsSumAggregateOutputType | null
    _min: Taxe_detailsMinAggregateOutputType | null
    _max: Taxe_detailsMaxAggregateOutputType | null
  }

  export type Taxe_detailsAvgAggregateOutputType = {
    id: number | null
    id_detail_facture: number | null
    taux_taxe_details: number | null
    montant_taxe_details: Decimal | null
  }

  export type Taxe_detailsSumAggregateOutputType = {
    id: bigint | null
    id_detail_facture: bigint | null
    taux_taxe_details: number | null
    montant_taxe_details: Decimal | null
  }

  export type Taxe_detailsMinAggregateOutputType = {
    id: bigint | null
    id_detail_facture: bigint | null
    libelle_taxe_details: string | null
    taux_taxe_details: number | null
    montant_taxe_details: Decimal | null
  }

  export type Taxe_detailsMaxAggregateOutputType = {
    id: bigint | null
    id_detail_facture: bigint | null
    libelle_taxe_details: string | null
    taux_taxe_details: number | null
    montant_taxe_details: Decimal | null
  }

  export type Taxe_detailsCountAggregateOutputType = {
    id: number
    id_detail_facture: number
    libelle_taxe_details: number
    taux_taxe_details: number
    montant_taxe_details: number
    _all: number
  }


  export type Taxe_detailsAvgAggregateInputType = {
    id?: true
    id_detail_facture?: true
    taux_taxe_details?: true
    montant_taxe_details?: true
  }

  export type Taxe_detailsSumAggregateInputType = {
    id?: true
    id_detail_facture?: true
    taux_taxe_details?: true
    montant_taxe_details?: true
  }

  export type Taxe_detailsMinAggregateInputType = {
    id?: true
    id_detail_facture?: true
    libelle_taxe_details?: true
    taux_taxe_details?: true
    montant_taxe_details?: true
  }

  export type Taxe_detailsMaxAggregateInputType = {
    id?: true
    id_detail_facture?: true
    libelle_taxe_details?: true
    taux_taxe_details?: true
    montant_taxe_details?: true
  }

  export type Taxe_detailsCountAggregateInputType = {
    id?: true
    id_detail_facture?: true
    libelle_taxe_details?: true
    taux_taxe_details?: true
    montant_taxe_details?: true
    _all?: true
  }

  export type Taxe_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taxe_details to aggregate.
     */
    where?: taxe_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_details to fetch.
     */
    orderBy?: taxe_detailsOrderByWithRelationInput | taxe_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taxe_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned taxe_details
    **/
    _count?: true | Taxe_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Taxe_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Taxe_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Taxe_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Taxe_detailsMaxAggregateInputType
  }

  export type GetTaxe_detailsAggregateType<T extends Taxe_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxe_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxe_details[P]>
      : GetScalarType<T[P], AggregateTaxe_details[P]>
  }




  export type taxe_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taxe_detailsWhereInput
    orderBy?: taxe_detailsOrderByWithAggregationInput | taxe_detailsOrderByWithAggregationInput[]
    by: Taxe_detailsScalarFieldEnum[] | Taxe_detailsScalarFieldEnum
    having?: taxe_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Taxe_detailsCountAggregateInputType | true
    _avg?: Taxe_detailsAvgAggregateInputType
    _sum?: Taxe_detailsSumAggregateInputType
    _min?: Taxe_detailsMinAggregateInputType
    _max?: Taxe_detailsMaxAggregateInputType
  }

  export type Taxe_detailsGroupByOutputType = {
    id: bigint
    id_detail_facture: bigint
    libelle_taxe_details: string | null
    taux_taxe_details: number
    montant_taxe_details: Decimal
    _count: Taxe_detailsCountAggregateOutputType | null
    _avg: Taxe_detailsAvgAggregateOutputType | null
    _sum: Taxe_detailsSumAggregateOutputType | null
    _min: Taxe_detailsMinAggregateOutputType | null
    _max: Taxe_detailsMaxAggregateOutputType | null
  }

  type GetTaxe_detailsGroupByPayload<T extends taxe_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Taxe_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Taxe_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Taxe_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Taxe_detailsGroupByOutputType[P]>
        }
      >
    >


  export type taxe_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_detail_facture?: boolean
    libelle_taxe_details?: boolean
    taux_taxe_details?: boolean
    montant_taxe_details?: boolean
    detail_facture?: boolean | detail_factureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxe_details"]>



  export type taxe_detailsSelectScalar = {
    id?: boolean
    id_detail_facture?: boolean
    libelle_taxe_details?: boolean
    taux_taxe_details?: boolean
    montant_taxe_details?: boolean
  }

  export type taxe_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_detail_facture" | "libelle_taxe_details" | "taux_taxe_details" | "montant_taxe_details", ExtArgs["result"]["taxe_details"]>
  export type taxe_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_facture?: boolean | detail_factureDefaultArgs<ExtArgs>
  }

  export type $taxe_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "taxe_details"
    objects: {
      detail_facture: Prisma.$detail_facturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_detail_facture: bigint
      libelle_taxe_details: string | null
      taux_taxe_details: number
      montant_taxe_details: Prisma.Decimal
    }, ExtArgs["result"]["taxe_details"]>
    composites: {}
  }

  type taxe_detailsGetPayload<S extends boolean | null | undefined | taxe_detailsDefaultArgs> = $Result.GetResult<Prisma.$taxe_detailsPayload, S>

  type taxe_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taxe_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Taxe_detailsCountAggregateInputType | true
    }

  export interface taxe_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['taxe_details'], meta: { name: 'taxe_details' } }
    /**
     * Find zero or one Taxe_details that matches the filter.
     * @param {taxe_detailsFindUniqueArgs} args - Arguments to find a Taxe_details
     * @example
     * // Get one Taxe_details
     * const taxe_details = await prisma.taxe_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taxe_detailsFindUniqueArgs>(args: SelectSubset<T, taxe_detailsFindUniqueArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taxe_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taxe_detailsFindUniqueOrThrowArgs} args - Arguments to find a Taxe_details
     * @example
     * // Get one Taxe_details
     * const taxe_details = await prisma.taxe_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taxe_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, taxe_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxe_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_detailsFindFirstArgs} args - Arguments to find a Taxe_details
     * @example
     * // Get one Taxe_details
     * const taxe_details = await prisma.taxe_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taxe_detailsFindFirstArgs>(args?: SelectSubset<T, taxe_detailsFindFirstArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxe_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_detailsFindFirstOrThrowArgs} args - Arguments to find a Taxe_details
     * @example
     * // Get one Taxe_details
     * const taxe_details = await prisma.taxe_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taxe_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, taxe_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taxe_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxe_details
     * const taxe_details = await prisma.taxe_details.findMany()
     * 
     * // Get first 10 Taxe_details
     * const taxe_details = await prisma.taxe_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxe_detailsWithIdOnly = await prisma.taxe_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taxe_detailsFindManyArgs>(args?: SelectSubset<T, taxe_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taxe_details.
     * @param {taxe_detailsCreateArgs} args - Arguments to create a Taxe_details.
     * @example
     * // Create one Taxe_details
     * const Taxe_details = await prisma.taxe_details.create({
     *   data: {
     *     // ... data to create a Taxe_details
     *   }
     * })
     * 
     */
    create<T extends taxe_detailsCreateArgs>(args: SelectSubset<T, taxe_detailsCreateArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taxe_details.
     * @param {taxe_detailsCreateManyArgs} args - Arguments to create many Taxe_details.
     * @example
     * // Create many Taxe_details
     * const taxe_details = await prisma.taxe_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taxe_detailsCreateManyArgs>(args?: SelectSubset<T, taxe_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Taxe_details.
     * @param {taxe_detailsDeleteArgs} args - Arguments to delete one Taxe_details.
     * @example
     * // Delete one Taxe_details
     * const Taxe_details = await prisma.taxe_details.delete({
     *   where: {
     *     // ... filter to delete one Taxe_details
     *   }
     * })
     * 
     */
    delete<T extends taxe_detailsDeleteArgs>(args: SelectSubset<T, taxe_detailsDeleteArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taxe_details.
     * @param {taxe_detailsUpdateArgs} args - Arguments to update one Taxe_details.
     * @example
     * // Update one Taxe_details
     * const taxe_details = await prisma.taxe_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taxe_detailsUpdateArgs>(args: SelectSubset<T, taxe_detailsUpdateArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taxe_details.
     * @param {taxe_detailsDeleteManyArgs} args - Arguments to filter Taxe_details to delete.
     * @example
     * // Delete a few Taxe_details
     * const { count } = await prisma.taxe_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taxe_detailsDeleteManyArgs>(args?: SelectSubset<T, taxe_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxe_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxe_details
     * const taxe_details = await prisma.taxe_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taxe_detailsUpdateManyArgs>(args: SelectSubset<T, taxe_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Taxe_details.
     * @param {taxe_detailsUpsertArgs} args - Arguments to update or create a Taxe_details.
     * @example
     * // Update or create a Taxe_details
     * const taxe_details = await prisma.taxe_details.upsert({
     *   create: {
     *     // ... data to create a Taxe_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taxe_details we want to update
     *   }
     * })
     */
    upsert<T extends taxe_detailsUpsertArgs>(args: SelectSubset<T, taxe_detailsUpsertArgs<ExtArgs>>): Prisma__taxe_detailsClient<$Result.GetResult<Prisma.$taxe_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taxe_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_detailsCountArgs} args - Arguments to filter Taxe_details to count.
     * @example
     * // Count the number of Taxe_details
     * const count = await prisma.taxe_details.count({
     *   where: {
     *     // ... the filter for the Taxe_details we want to count
     *   }
     * })
    **/
    count<T extends taxe_detailsCountArgs>(
      args?: Subset<T, taxe_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Taxe_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taxe_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Taxe_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Taxe_detailsAggregateArgs>(args: Subset<T, Taxe_detailsAggregateArgs>): Prisma.PrismaPromise<GetTaxe_detailsAggregateType<T>>

    /**
     * Group by Taxe_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taxe_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taxe_detailsGroupByArgs['orderBy'] }
        : { orderBy?: taxe_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taxe_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxe_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the taxe_details model
   */
  readonly fields: taxe_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for taxe_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taxe_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail_facture<T extends detail_factureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, detail_factureDefaultArgs<ExtArgs>>): Prisma__detail_factureClient<$Result.GetResult<Prisma.$detail_facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the taxe_details model
   */
  interface taxe_detailsFieldRefs {
    readonly id: FieldRef<"taxe_details", 'BigInt'>
    readonly id_detail_facture: FieldRef<"taxe_details", 'BigInt'>
    readonly libelle_taxe_details: FieldRef<"taxe_details", 'String'>
    readonly taux_taxe_details: FieldRef<"taxe_details", 'Float'>
    readonly montant_taxe_details: FieldRef<"taxe_details", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * taxe_details findUnique
   */
  export type taxe_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_details to fetch.
     */
    where: taxe_detailsWhereUniqueInput
  }

  /**
   * taxe_details findUniqueOrThrow
   */
  export type taxe_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_details to fetch.
     */
    where: taxe_detailsWhereUniqueInput
  }

  /**
   * taxe_details findFirst
   */
  export type taxe_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_details to fetch.
     */
    where?: taxe_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_details to fetch.
     */
    orderBy?: taxe_detailsOrderByWithRelationInput | taxe_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxe_details.
     */
    cursor?: taxe_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxe_details.
     */
    distinct?: Taxe_detailsScalarFieldEnum | Taxe_detailsScalarFieldEnum[]
  }

  /**
   * taxe_details findFirstOrThrow
   */
  export type taxe_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_details to fetch.
     */
    where?: taxe_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_details to fetch.
     */
    orderBy?: taxe_detailsOrderByWithRelationInput | taxe_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxe_details.
     */
    cursor?: taxe_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxe_details.
     */
    distinct?: Taxe_detailsScalarFieldEnum | Taxe_detailsScalarFieldEnum[]
  }

  /**
   * taxe_details findMany
   */
  export type taxe_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_details to fetch.
     */
    where?: taxe_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_details to fetch.
     */
    orderBy?: taxe_detailsOrderByWithRelationInput | taxe_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing taxe_details.
     */
    cursor?: taxe_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_details.
     */
    skip?: number
    distinct?: Taxe_detailsScalarFieldEnum | Taxe_detailsScalarFieldEnum[]
  }

  /**
   * taxe_details create
   */
  export type taxe_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a taxe_details.
     */
    data: XOR<taxe_detailsCreateInput, taxe_detailsUncheckedCreateInput>
  }

  /**
   * taxe_details createMany
   */
  export type taxe_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many taxe_details.
     */
    data: taxe_detailsCreateManyInput | taxe_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * taxe_details update
   */
  export type taxe_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a taxe_details.
     */
    data: XOR<taxe_detailsUpdateInput, taxe_detailsUncheckedUpdateInput>
    /**
     * Choose, which taxe_details to update.
     */
    where: taxe_detailsWhereUniqueInput
  }

  /**
   * taxe_details updateMany
   */
  export type taxe_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update taxe_details.
     */
    data: XOR<taxe_detailsUpdateManyMutationInput, taxe_detailsUncheckedUpdateManyInput>
    /**
     * Filter which taxe_details to update
     */
    where?: taxe_detailsWhereInput
    /**
     * Limit how many taxe_details to update.
     */
    limit?: number
  }

  /**
   * taxe_details upsert
   */
  export type taxe_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the taxe_details to update in case it exists.
     */
    where: taxe_detailsWhereUniqueInput
    /**
     * In case the taxe_details found by the `where` argument doesn't exist, create a new taxe_details with this data.
     */
    create: XOR<taxe_detailsCreateInput, taxe_detailsUncheckedCreateInput>
    /**
     * In case the taxe_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taxe_detailsUpdateInput, taxe_detailsUncheckedUpdateInput>
  }

  /**
   * taxe_details delete
   */
  export type taxe_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
    /**
     * Filter which taxe_details to delete.
     */
    where: taxe_detailsWhereUniqueInput
  }

  /**
   * taxe_details deleteMany
   */
  export type taxe_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taxe_details to delete
     */
    where?: taxe_detailsWhereInput
    /**
     * Limit how many taxe_details to delete.
     */
    limit?: number
  }

  /**
   * taxe_details without action
   */
  export type taxe_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_details
     */
    select?: taxe_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_details
     */
    omit?: taxe_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_detailsInclude<ExtArgs> | null
  }


  /**
   * Model taxe_pieds
   */

  export type AggregateTaxe_pieds = {
    _count: Taxe_piedsCountAggregateOutputType | null
    _avg: Taxe_piedsAvgAggregateOutputType | null
    _sum: Taxe_piedsSumAggregateOutputType | null
    _min: Taxe_piedsMinAggregateOutputType | null
    _max: Taxe_piedsMaxAggregateOutputType | null
  }

  export type Taxe_piedsAvgAggregateOutputType = {
    id: number | null
    id_entete_facture: number | null
    taux_taxe_pieds: number | null
    montant_taxe_pieds: Decimal | null
  }

  export type Taxe_piedsSumAggregateOutputType = {
    id: bigint | null
    id_entete_facture: bigint | null
    taux_taxe_pieds: number | null
    montant_taxe_pieds: Decimal | null
  }

  export type Taxe_piedsMinAggregateOutputType = {
    id: bigint | null
    id_entete_facture: bigint | null
    libelle_taxe_pieds: string | null
    taux_taxe_pieds: number | null
    montant_taxe_pieds: Decimal | null
  }

  export type Taxe_piedsMaxAggregateOutputType = {
    id: bigint | null
    id_entete_facture: bigint | null
    libelle_taxe_pieds: string | null
    taux_taxe_pieds: number | null
    montant_taxe_pieds: Decimal | null
  }

  export type Taxe_piedsCountAggregateOutputType = {
    id: number
    id_entete_facture: number
    libelle_taxe_pieds: number
    taux_taxe_pieds: number
    montant_taxe_pieds: number
    _all: number
  }


  export type Taxe_piedsAvgAggregateInputType = {
    id?: true
    id_entete_facture?: true
    taux_taxe_pieds?: true
    montant_taxe_pieds?: true
  }

  export type Taxe_piedsSumAggregateInputType = {
    id?: true
    id_entete_facture?: true
    taux_taxe_pieds?: true
    montant_taxe_pieds?: true
  }

  export type Taxe_piedsMinAggregateInputType = {
    id?: true
    id_entete_facture?: true
    libelle_taxe_pieds?: true
    taux_taxe_pieds?: true
    montant_taxe_pieds?: true
  }

  export type Taxe_piedsMaxAggregateInputType = {
    id?: true
    id_entete_facture?: true
    libelle_taxe_pieds?: true
    taux_taxe_pieds?: true
    montant_taxe_pieds?: true
  }

  export type Taxe_piedsCountAggregateInputType = {
    id?: true
    id_entete_facture?: true
    libelle_taxe_pieds?: true
    taux_taxe_pieds?: true
    montant_taxe_pieds?: true
    _all?: true
  }

  export type Taxe_piedsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taxe_pieds to aggregate.
     */
    where?: taxe_piedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_pieds to fetch.
     */
    orderBy?: taxe_piedsOrderByWithRelationInput | taxe_piedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taxe_piedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_pieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_pieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned taxe_pieds
    **/
    _count?: true | Taxe_piedsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Taxe_piedsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Taxe_piedsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Taxe_piedsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Taxe_piedsMaxAggregateInputType
  }

  export type GetTaxe_piedsAggregateType<T extends Taxe_piedsAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxe_pieds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxe_pieds[P]>
      : GetScalarType<T[P], AggregateTaxe_pieds[P]>
  }




  export type taxe_piedsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taxe_piedsWhereInput
    orderBy?: taxe_piedsOrderByWithAggregationInput | taxe_piedsOrderByWithAggregationInput[]
    by: Taxe_piedsScalarFieldEnum[] | Taxe_piedsScalarFieldEnum
    having?: taxe_piedsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Taxe_piedsCountAggregateInputType | true
    _avg?: Taxe_piedsAvgAggregateInputType
    _sum?: Taxe_piedsSumAggregateInputType
    _min?: Taxe_piedsMinAggregateInputType
    _max?: Taxe_piedsMaxAggregateInputType
  }

  export type Taxe_piedsGroupByOutputType = {
    id: bigint
    id_entete_facture: bigint
    libelle_taxe_pieds: string | null
    taux_taxe_pieds: number
    montant_taxe_pieds: Decimal
    _count: Taxe_piedsCountAggregateOutputType | null
    _avg: Taxe_piedsAvgAggregateOutputType | null
    _sum: Taxe_piedsSumAggregateOutputType | null
    _min: Taxe_piedsMinAggregateOutputType | null
    _max: Taxe_piedsMaxAggregateOutputType | null
  }

  type GetTaxe_piedsGroupByPayload<T extends taxe_piedsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Taxe_piedsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Taxe_piedsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Taxe_piedsGroupByOutputType[P]>
            : GetScalarType<T[P], Taxe_piedsGroupByOutputType[P]>
        }
      >
    >


  export type taxe_piedsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_entete_facture?: boolean
    libelle_taxe_pieds?: boolean
    taux_taxe_pieds?: boolean
    montant_taxe_pieds?: boolean
    entete_facture?: boolean | entete_factureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taxe_pieds"]>



  export type taxe_piedsSelectScalar = {
    id?: boolean
    id_entete_facture?: boolean
    libelle_taxe_pieds?: boolean
    taux_taxe_pieds?: boolean
    montant_taxe_pieds?: boolean
  }

  export type taxe_piedsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_entete_facture" | "libelle_taxe_pieds" | "taux_taxe_pieds" | "montant_taxe_pieds", ExtArgs["result"]["taxe_pieds"]>
  export type taxe_piedsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entete_facture?: boolean | entete_factureDefaultArgs<ExtArgs>
  }

  export type $taxe_piedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "taxe_pieds"
    objects: {
      entete_facture: Prisma.$entete_facturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      id_entete_facture: bigint
      libelle_taxe_pieds: string | null
      taux_taxe_pieds: number
      montant_taxe_pieds: Prisma.Decimal
    }, ExtArgs["result"]["taxe_pieds"]>
    composites: {}
  }

  type taxe_piedsGetPayload<S extends boolean | null | undefined | taxe_piedsDefaultArgs> = $Result.GetResult<Prisma.$taxe_piedsPayload, S>

  type taxe_piedsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taxe_piedsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Taxe_piedsCountAggregateInputType | true
    }

  export interface taxe_piedsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['taxe_pieds'], meta: { name: 'taxe_pieds' } }
    /**
     * Find zero or one Taxe_pieds that matches the filter.
     * @param {taxe_piedsFindUniqueArgs} args - Arguments to find a Taxe_pieds
     * @example
     * // Get one Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taxe_piedsFindUniqueArgs>(args: SelectSubset<T, taxe_piedsFindUniqueArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taxe_pieds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taxe_piedsFindUniqueOrThrowArgs} args - Arguments to find a Taxe_pieds
     * @example
     * // Get one Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taxe_piedsFindUniqueOrThrowArgs>(args: SelectSubset<T, taxe_piedsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxe_pieds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_piedsFindFirstArgs} args - Arguments to find a Taxe_pieds
     * @example
     * // Get one Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taxe_piedsFindFirstArgs>(args?: SelectSubset<T, taxe_piedsFindFirstArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taxe_pieds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_piedsFindFirstOrThrowArgs} args - Arguments to find a Taxe_pieds
     * @example
     * // Get one Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taxe_piedsFindFirstOrThrowArgs>(args?: SelectSubset<T, taxe_piedsFindFirstOrThrowArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taxe_pieds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_piedsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.findMany()
     * 
     * // Get first 10 Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxe_piedsWithIdOnly = await prisma.taxe_pieds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taxe_piedsFindManyArgs>(args?: SelectSubset<T, taxe_piedsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taxe_pieds.
     * @param {taxe_piedsCreateArgs} args - Arguments to create a Taxe_pieds.
     * @example
     * // Create one Taxe_pieds
     * const Taxe_pieds = await prisma.taxe_pieds.create({
     *   data: {
     *     // ... data to create a Taxe_pieds
     *   }
     * })
     * 
     */
    create<T extends taxe_piedsCreateArgs>(args: SelectSubset<T, taxe_piedsCreateArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taxe_pieds.
     * @param {taxe_piedsCreateManyArgs} args - Arguments to create many Taxe_pieds.
     * @example
     * // Create many Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taxe_piedsCreateManyArgs>(args?: SelectSubset<T, taxe_piedsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Taxe_pieds.
     * @param {taxe_piedsDeleteArgs} args - Arguments to delete one Taxe_pieds.
     * @example
     * // Delete one Taxe_pieds
     * const Taxe_pieds = await prisma.taxe_pieds.delete({
     *   where: {
     *     // ... filter to delete one Taxe_pieds
     *   }
     * })
     * 
     */
    delete<T extends taxe_piedsDeleteArgs>(args: SelectSubset<T, taxe_piedsDeleteArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taxe_pieds.
     * @param {taxe_piedsUpdateArgs} args - Arguments to update one Taxe_pieds.
     * @example
     * // Update one Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taxe_piedsUpdateArgs>(args: SelectSubset<T, taxe_piedsUpdateArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taxe_pieds.
     * @param {taxe_piedsDeleteManyArgs} args - Arguments to filter Taxe_pieds to delete.
     * @example
     * // Delete a few Taxe_pieds
     * const { count } = await prisma.taxe_pieds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taxe_piedsDeleteManyArgs>(args?: SelectSubset<T, taxe_piedsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxe_pieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_piedsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taxe_piedsUpdateManyArgs>(args: SelectSubset<T, taxe_piedsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Taxe_pieds.
     * @param {taxe_piedsUpsertArgs} args - Arguments to update or create a Taxe_pieds.
     * @example
     * // Update or create a Taxe_pieds
     * const taxe_pieds = await prisma.taxe_pieds.upsert({
     *   create: {
     *     // ... data to create a Taxe_pieds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taxe_pieds we want to update
     *   }
     * })
     */
    upsert<T extends taxe_piedsUpsertArgs>(args: SelectSubset<T, taxe_piedsUpsertArgs<ExtArgs>>): Prisma__taxe_piedsClient<$Result.GetResult<Prisma.$taxe_piedsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taxe_pieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_piedsCountArgs} args - Arguments to filter Taxe_pieds to count.
     * @example
     * // Count the number of Taxe_pieds
     * const count = await prisma.taxe_pieds.count({
     *   where: {
     *     // ... the filter for the Taxe_pieds we want to count
     *   }
     * })
    **/
    count<T extends taxe_piedsCountArgs>(
      args?: Subset<T, taxe_piedsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Taxe_piedsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taxe_pieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Taxe_piedsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Taxe_piedsAggregateArgs>(args: Subset<T, Taxe_piedsAggregateArgs>): Prisma.PrismaPromise<GetTaxe_piedsAggregateType<T>>

    /**
     * Group by Taxe_pieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxe_piedsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends taxe_piedsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taxe_piedsGroupByArgs['orderBy'] }
        : { orderBy?: taxe_piedsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, taxe_piedsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxe_piedsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the taxe_pieds model
   */
  readonly fields: taxe_piedsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for taxe_pieds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taxe_piedsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entete_facture<T extends entete_factureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entete_factureDefaultArgs<ExtArgs>>): Prisma__entete_factureClient<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the taxe_pieds model
   */
  interface taxe_piedsFieldRefs {
    readonly id: FieldRef<"taxe_pieds", 'BigInt'>
    readonly id_entete_facture: FieldRef<"taxe_pieds", 'BigInt'>
    readonly libelle_taxe_pieds: FieldRef<"taxe_pieds", 'String'>
    readonly taux_taxe_pieds: FieldRef<"taxe_pieds", 'Float'>
    readonly montant_taxe_pieds: FieldRef<"taxe_pieds", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * taxe_pieds findUnique
   */
  export type taxe_piedsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_pieds to fetch.
     */
    where: taxe_piedsWhereUniqueInput
  }

  /**
   * taxe_pieds findUniqueOrThrow
   */
  export type taxe_piedsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_pieds to fetch.
     */
    where: taxe_piedsWhereUniqueInput
  }

  /**
   * taxe_pieds findFirst
   */
  export type taxe_piedsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_pieds to fetch.
     */
    where?: taxe_piedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_pieds to fetch.
     */
    orderBy?: taxe_piedsOrderByWithRelationInput | taxe_piedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxe_pieds.
     */
    cursor?: taxe_piedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_pieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_pieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxe_pieds.
     */
    distinct?: Taxe_piedsScalarFieldEnum | Taxe_piedsScalarFieldEnum[]
  }

  /**
   * taxe_pieds findFirstOrThrow
   */
  export type taxe_piedsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_pieds to fetch.
     */
    where?: taxe_piedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_pieds to fetch.
     */
    orderBy?: taxe_piedsOrderByWithRelationInput | taxe_piedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxe_pieds.
     */
    cursor?: taxe_piedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_pieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_pieds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxe_pieds.
     */
    distinct?: Taxe_piedsScalarFieldEnum | Taxe_piedsScalarFieldEnum[]
  }

  /**
   * taxe_pieds findMany
   */
  export type taxe_piedsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * Filter, which taxe_pieds to fetch.
     */
    where?: taxe_piedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxe_pieds to fetch.
     */
    orderBy?: taxe_piedsOrderByWithRelationInput | taxe_piedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing taxe_pieds.
     */
    cursor?: taxe_piedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxe_pieds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxe_pieds.
     */
    skip?: number
    distinct?: Taxe_piedsScalarFieldEnum | Taxe_piedsScalarFieldEnum[]
  }

  /**
   * taxe_pieds create
   */
  export type taxe_piedsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * The data needed to create a taxe_pieds.
     */
    data: XOR<taxe_piedsCreateInput, taxe_piedsUncheckedCreateInput>
  }

  /**
   * taxe_pieds createMany
   */
  export type taxe_piedsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many taxe_pieds.
     */
    data: taxe_piedsCreateManyInput | taxe_piedsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * taxe_pieds update
   */
  export type taxe_piedsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * The data needed to update a taxe_pieds.
     */
    data: XOR<taxe_piedsUpdateInput, taxe_piedsUncheckedUpdateInput>
    /**
     * Choose, which taxe_pieds to update.
     */
    where: taxe_piedsWhereUniqueInput
  }

  /**
   * taxe_pieds updateMany
   */
  export type taxe_piedsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update taxe_pieds.
     */
    data: XOR<taxe_piedsUpdateManyMutationInput, taxe_piedsUncheckedUpdateManyInput>
    /**
     * Filter which taxe_pieds to update
     */
    where?: taxe_piedsWhereInput
    /**
     * Limit how many taxe_pieds to update.
     */
    limit?: number
  }

  /**
   * taxe_pieds upsert
   */
  export type taxe_piedsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * The filter to search for the taxe_pieds to update in case it exists.
     */
    where: taxe_piedsWhereUniqueInput
    /**
     * In case the taxe_pieds found by the `where` argument doesn't exist, create a new taxe_pieds with this data.
     */
    create: XOR<taxe_piedsCreateInput, taxe_piedsUncheckedCreateInput>
    /**
     * In case the taxe_pieds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taxe_piedsUpdateInput, taxe_piedsUncheckedUpdateInput>
  }

  /**
   * taxe_pieds delete
   */
  export type taxe_piedsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
    /**
     * Filter which taxe_pieds to delete.
     */
    where: taxe_piedsWhereUniqueInput
  }

  /**
   * taxe_pieds deleteMany
   */
  export type taxe_piedsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taxe_pieds to delete
     */
    where?: taxe_piedsWhereInput
    /**
     * Limit how many taxe_pieds to delete.
     */
    limit?: number
  }

  /**
   * taxe_pieds without action
   */
  export type taxe_piedsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taxe_pieds
     */
    select?: taxe_piedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taxe_pieds
     */
    omit?: taxe_piedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: taxe_piedsInclude<ExtArgs> | null
  }


  /**
   * Model tiers
   */

  export type AggregateTiers = {
    _count: TiersCountAggregateOutputType | null
    _avg: TiersAvgAggregateOutputType | null
    _sum: TiersSumAggregateOutputType | null
    _min: TiersMinAggregateOutputType | null
    _max: TiersMaxAggregateOutputType | null
  }

  export type TiersAvgAggregateOutputType = {
    id: number | null
  }

  export type TiersSumAggregateOutputType = {
    id: bigint | null
  }

  export type TiersMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_tiers: string | null
    raison_sociale_tiers: string | null
    telephone_tiers: string | null
    email_tiers: string | null
  }

  export type TiersMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_tiers: string | null
    raison_sociale_tiers: string | null
    telephone_tiers: string | null
    email_tiers: string | null
  }

  export type TiersCountAggregateOutputType = {
    id: number
    uuid: number
    code_tiers: number
    raison_sociale_tiers: number
    telephone_tiers: number
    email_tiers: number
    _all: number
  }


  export type TiersAvgAggregateInputType = {
    id?: true
  }

  export type TiersSumAggregateInputType = {
    id?: true
  }

  export type TiersMinAggregateInputType = {
    id?: true
    uuid?: true
    code_tiers?: true
    raison_sociale_tiers?: true
    telephone_tiers?: true
    email_tiers?: true
  }

  export type TiersMaxAggregateInputType = {
    id?: true
    uuid?: true
    code_tiers?: true
    raison_sociale_tiers?: true
    telephone_tiers?: true
    email_tiers?: true
  }

  export type TiersCountAggregateInputType = {
    id?: true
    uuid?: true
    code_tiers?: true
    raison_sociale_tiers?: true
    telephone_tiers?: true
    email_tiers?: true
    _all?: true
  }

  export type TiersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiers to aggregate.
     */
    where?: tiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiers to fetch.
     */
    orderBy?: tiersOrderByWithRelationInput | tiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tiers
    **/
    _count?: true | TiersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiersMaxAggregateInputType
  }

  export type GetTiersAggregateType<T extends TiersAggregateArgs> = {
        [P in keyof T & keyof AggregateTiers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiers[P]>
      : GetScalarType<T[P], AggregateTiers[P]>
  }




  export type tiersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tiersWhereInput
    orderBy?: tiersOrderByWithAggregationInput | tiersOrderByWithAggregationInput[]
    by: TiersScalarFieldEnum[] | TiersScalarFieldEnum
    having?: tiersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiersCountAggregateInputType | true
    _avg?: TiersAvgAggregateInputType
    _sum?: TiersSumAggregateInputType
    _min?: TiersMinAggregateInputType
    _max?: TiersMaxAggregateInputType
  }

  export type TiersGroupByOutputType = {
    id: bigint
    uuid: string
    code_tiers: string
    raison_sociale_tiers: string
    telephone_tiers: string | null
    email_tiers: string | null
    _count: TiersCountAggregateOutputType | null
    _avg: TiersAvgAggregateOutputType | null
    _sum: TiersSumAggregateOutputType | null
    _min: TiersMinAggregateOutputType | null
    _max: TiersMaxAggregateOutputType | null
  }

  type GetTiersGroupByPayload<T extends tiersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiersGroupByOutputType[P]>
            : GetScalarType<T[P], TiersGroupByOutputType[P]>
        }
      >
    >


  export type tiersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code_tiers?: boolean
    raison_sociale_tiers?: boolean
    telephone_tiers?: boolean
    email_tiers?: boolean
    entete_facture?: boolean | tiers$entete_factureArgs<ExtArgs>
    _count?: boolean | TiersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiers"]>



  export type tiersSelectScalar = {
    id?: boolean
    uuid?: boolean
    code_tiers?: boolean
    raison_sociale_tiers?: boolean
    telephone_tiers?: boolean
    email_tiers?: boolean
  }

  export type tiersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code_tiers" | "raison_sociale_tiers" | "telephone_tiers" | "email_tiers", ExtArgs["result"]["tiers"]>
  export type tiersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entete_facture?: boolean | tiers$entete_factureArgs<ExtArgs>
    _count?: boolean | TiersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tiersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tiers"
    objects: {
      entete_facture: Prisma.$entete_facturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      code_tiers: string
      raison_sociale_tiers: string
      telephone_tiers: string | null
      email_tiers: string | null
    }, ExtArgs["result"]["tiers"]>
    composites: {}
  }

  type tiersGetPayload<S extends boolean | null | undefined | tiersDefaultArgs> = $Result.GetResult<Prisma.$tiersPayload, S>

  type tiersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiersCountAggregateInputType | true
    }

  export interface tiersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tiers'], meta: { name: 'tiers' } }
    /**
     * Find zero or one Tiers that matches the filter.
     * @param {tiersFindUniqueArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tiersFindUniqueArgs>(args: SelectSubset<T, tiersFindUniqueArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tiers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tiersFindUniqueOrThrowArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tiersFindUniqueOrThrowArgs>(args: SelectSubset<T, tiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiersFindFirstArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tiersFindFirstArgs>(args?: SelectSubset<T, tiersFindFirstArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tiers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiersFindFirstOrThrowArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tiersFindFirstOrThrowArgs>(args?: SelectSubset<T, tiersFindFirstOrThrowArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tiers
     * const tiers = await prisma.tiers.findMany()
     * 
     * // Get first 10 Tiers
     * const tiers = await prisma.tiers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiersWithIdOnly = await prisma.tiers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tiersFindManyArgs>(args?: SelectSubset<T, tiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tiers.
     * @param {tiersCreateArgs} args - Arguments to create a Tiers.
     * @example
     * // Create one Tiers
     * const Tiers = await prisma.tiers.create({
     *   data: {
     *     // ... data to create a Tiers
     *   }
     * })
     * 
     */
    create<T extends tiersCreateArgs>(args: SelectSubset<T, tiersCreateArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tiers.
     * @param {tiersCreateManyArgs} args - Arguments to create many Tiers.
     * @example
     * // Create many Tiers
     * const tiers = await prisma.tiers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tiersCreateManyArgs>(args?: SelectSubset<T, tiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tiers.
     * @param {tiersDeleteArgs} args - Arguments to delete one Tiers.
     * @example
     * // Delete one Tiers
     * const Tiers = await prisma.tiers.delete({
     *   where: {
     *     // ... filter to delete one Tiers
     *   }
     * })
     * 
     */
    delete<T extends tiersDeleteArgs>(args: SelectSubset<T, tiersDeleteArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tiers.
     * @param {tiersUpdateArgs} args - Arguments to update one Tiers.
     * @example
     * // Update one Tiers
     * const tiers = await prisma.tiers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tiersUpdateArgs>(args: SelectSubset<T, tiersUpdateArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tiers.
     * @param {tiersDeleteManyArgs} args - Arguments to filter Tiers to delete.
     * @example
     * // Delete a few Tiers
     * const { count } = await prisma.tiers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tiersDeleteManyArgs>(args?: SelectSubset<T, tiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tiers
     * const tiers = await prisma.tiers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tiersUpdateManyArgs>(args: SelectSubset<T, tiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tiers.
     * @param {tiersUpsertArgs} args - Arguments to update or create a Tiers.
     * @example
     * // Update or create a Tiers
     * const tiers = await prisma.tiers.upsert({
     *   create: {
     *     // ... data to create a Tiers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tiers we want to update
     *   }
     * })
     */
    upsert<T extends tiersUpsertArgs>(args: SelectSubset<T, tiersUpsertArgs<ExtArgs>>): Prisma__tiersClient<$Result.GetResult<Prisma.$tiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiersCountArgs} args - Arguments to filter Tiers to count.
     * @example
     * // Count the number of Tiers
     * const count = await prisma.tiers.count({
     *   where: {
     *     // ... the filter for the Tiers we want to count
     *   }
     * })
    **/
    count<T extends tiersCountArgs>(
      args?: Subset<T, tiersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiersAggregateArgs>(args: Subset<T, TiersAggregateArgs>): Prisma.PrismaPromise<GetTiersAggregateType<T>>

    /**
     * Group by Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tiersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tiersGroupByArgs['orderBy'] }
        : { orderBy?: tiersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tiers model
   */
  readonly fields: tiersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tiers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tiersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entete_facture<T extends tiers$entete_factureArgs<ExtArgs> = {}>(args?: Subset<T, tiers$entete_factureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tiers model
   */
  interface tiersFieldRefs {
    readonly id: FieldRef<"tiers", 'BigInt'>
    readonly uuid: FieldRef<"tiers", 'String'>
    readonly code_tiers: FieldRef<"tiers", 'String'>
    readonly raison_sociale_tiers: FieldRef<"tiers", 'String'>
    readonly telephone_tiers: FieldRef<"tiers", 'String'>
    readonly email_tiers: FieldRef<"tiers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tiers findUnique
   */
  export type tiersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * Filter, which tiers to fetch.
     */
    where: tiersWhereUniqueInput
  }

  /**
   * tiers findUniqueOrThrow
   */
  export type tiersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * Filter, which tiers to fetch.
     */
    where: tiersWhereUniqueInput
  }

  /**
   * tiers findFirst
   */
  export type tiersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * Filter, which tiers to fetch.
     */
    where?: tiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiers to fetch.
     */
    orderBy?: tiersOrderByWithRelationInput | tiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tiers.
     */
    cursor?: tiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tiers.
     */
    distinct?: TiersScalarFieldEnum | TiersScalarFieldEnum[]
  }

  /**
   * tiers findFirstOrThrow
   */
  export type tiersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * Filter, which tiers to fetch.
     */
    where?: tiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiers to fetch.
     */
    orderBy?: tiersOrderByWithRelationInput | tiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tiers.
     */
    cursor?: tiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tiers.
     */
    distinct?: TiersScalarFieldEnum | TiersScalarFieldEnum[]
  }

  /**
   * tiers findMany
   */
  export type tiersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * Filter, which tiers to fetch.
     */
    where?: tiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiers to fetch.
     */
    orderBy?: tiersOrderByWithRelationInput | tiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tiers.
     */
    cursor?: tiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiers.
     */
    skip?: number
    distinct?: TiersScalarFieldEnum | TiersScalarFieldEnum[]
  }

  /**
   * tiers create
   */
  export type tiersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * The data needed to create a tiers.
     */
    data: XOR<tiersCreateInput, tiersUncheckedCreateInput>
  }

  /**
   * tiers createMany
   */
  export type tiersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tiers.
     */
    data: tiersCreateManyInput | tiersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tiers update
   */
  export type tiersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * The data needed to update a tiers.
     */
    data: XOR<tiersUpdateInput, tiersUncheckedUpdateInput>
    /**
     * Choose, which tiers to update.
     */
    where: tiersWhereUniqueInput
  }

  /**
   * tiers updateMany
   */
  export type tiersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tiers.
     */
    data: XOR<tiersUpdateManyMutationInput, tiersUncheckedUpdateManyInput>
    /**
     * Filter which tiers to update
     */
    where?: tiersWhereInput
    /**
     * Limit how many tiers to update.
     */
    limit?: number
  }

  /**
   * tiers upsert
   */
  export type tiersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * The filter to search for the tiers to update in case it exists.
     */
    where: tiersWhereUniqueInput
    /**
     * In case the tiers found by the `where` argument doesn't exist, create a new tiers with this data.
     */
    create: XOR<tiersCreateInput, tiersUncheckedCreateInput>
    /**
     * In case the tiers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tiersUpdateInput, tiersUncheckedUpdateInput>
  }

  /**
   * tiers delete
   */
  export type tiersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
    /**
     * Filter which tiers to delete.
     */
    where: tiersWhereUniqueInput
  }

  /**
   * tiers deleteMany
   */
  export type tiersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiers to delete
     */
    where?: tiersWhereInput
    /**
     * Limit how many tiers to delete.
     */
    limit?: number
  }

  /**
   * tiers.entete_facture
   */
  export type tiers$entete_factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    where?: entete_factureWhereInput
    orderBy?: entete_factureOrderByWithRelationInput | entete_factureOrderByWithRelationInput[]
    cursor?: entete_factureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Entete_factureScalarFieldEnum | Entete_factureScalarFieldEnum[]
  }

  /**
   * tiers without action
   */
  export type tiersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiers
     */
    select?: tiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiers
     */
    omit?: tiersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tiersInclude<ExtArgs> | null
  }


  /**
   * Model information_complementaire
   */

  export type AggregateInformation_complementaire = {
    _count: Information_complementaireCountAggregateOutputType | null
    _avg: Information_complementaireAvgAggregateOutputType | null
    _sum: Information_complementaireSumAggregateOutputType | null
    _min: Information_complementaireMinAggregateOutputType | null
    _max: Information_complementaireMaxAggregateOutputType | null
  }

  export type Information_complementaireAvgAggregateOutputType = {
    id: number | null
  }

  export type Information_complementaireSumAggregateOutputType = {
    id: bigint | null
  }

  export type Information_complementaireMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    pied_de_page: string | null
    nom_commercial: string | null
    autre_mention: string | null
    plus_d_information: string | null
  }

  export type Information_complementaireMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    pied_de_page: string | null
    nom_commercial: string | null
    autre_mention: string | null
    plus_d_information: string | null
  }

  export type Information_complementaireCountAggregateOutputType = {
    id: number
    uuid: number
    pied_de_page: number
    nom_commercial: number
    autre_mention: number
    plus_d_information: number
    _all: number
  }


  export type Information_complementaireAvgAggregateInputType = {
    id?: true
  }

  export type Information_complementaireSumAggregateInputType = {
    id?: true
  }

  export type Information_complementaireMinAggregateInputType = {
    id?: true
    uuid?: true
    pied_de_page?: true
    nom_commercial?: true
    autre_mention?: true
    plus_d_information?: true
  }

  export type Information_complementaireMaxAggregateInputType = {
    id?: true
    uuid?: true
    pied_de_page?: true
    nom_commercial?: true
    autre_mention?: true
    plus_d_information?: true
  }

  export type Information_complementaireCountAggregateInputType = {
    id?: true
    uuid?: true
    pied_de_page?: true
    nom_commercial?: true
    autre_mention?: true
    plus_d_information?: true
    _all?: true
  }

  export type Information_complementaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which information_complementaire to aggregate.
     */
    where?: information_complementaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information_complementaires to fetch.
     */
    orderBy?: information_complementaireOrderByWithRelationInput | information_complementaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: information_complementaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information_complementaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information_complementaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned information_complementaires
    **/
    _count?: true | Information_complementaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Information_complementaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Information_complementaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Information_complementaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Information_complementaireMaxAggregateInputType
  }

  export type GetInformation_complementaireAggregateType<T extends Information_complementaireAggregateArgs> = {
        [P in keyof T & keyof AggregateInformation_complementaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInformation_complementaire[P]>
      : GetScalarType<T[P], AggregateInformation_complementaire[P]>
  }




  export type information_complementaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: information_complementaireWhereInput
    orderBy?: information_complementaireOrderByWithAggregationInput | information_complementaireOrderByWithAggregationInput[]
    by: Information_complementaireScalarFieldEnum[] | Information_complementaireScalarFieldEnum
    having?: information_complementaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Information_complementaireCountAggregateInputType | true
    _avg?: Information_complementaireAvgAggregateInputType
    _sum?: Information_complementaireSumAggregateInputType
    _min?: Information_complementaireMinAggregateInputType
    _max?: Information_complementaireMaxAggregateInputType
  }

  export type Information_complementaireGroupByOutputType = {
    id: bigint
    uuid: string
    pied_de_page: string | null
    nom_commercial: string | null
    autre_mention: string | null
    plus_d_information: string | null
    _count: Information_complementaireCountAggregateOutputType | null
    _avg: Information_complementaireAvgAggregateOutputType | null
    _sum: Information_complementaireSumAggregateOutputType | null
    _min: Information_complementaireMinAggregateOutputType | null
    _max: Information_complementaireMaxAggregateOutputType | null
  }

  type GetInformation_complementaireGroupByPayload<T extends information_complementaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Information_complementaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Information_complementaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Information_complementaireGroupByOutputType[P]>
            : GetScalarType<T[P], Information_complementaireGroupByOutputType[P]>
        }
      >
    >


  export type information_complementaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    pied_de_page?: boolean
    nom_commercial?: boolean
    autre_mention?: boolean
    plus_d_information?: boolean
    entete_facture?: boolean | information_complementaire$entete_factureArgs<ExtArgs>
    _count?: boolean | Information_complementaireCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["information_complementaire"]>



  export type information_complementaireSelectScalar = {
    id?: boolean
    uuid?: boolean
    pied_de_page?: boolean
    nom_commercial?: boolean
    autre_mention?: boolean
    plus_d_information?: boolean
  }

  export type information_complementaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "pied_de_page" | "nom_commercial" | "autre_mention" | "plus_d_information", ExtArgs["result"]["information_complementaire"]>
  export type information_complementaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entete_facture?: boolean | information_complementaire$entete_factureArgs<ExtArgs>
    _count?: boolean | Information_complementaireCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $information_complementairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "information_complementaire"
    objects: {
      entete_facture: Prisma.$entete_facturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      pied_de_page: string | null
      nom_commercial: string | null
      autre_mention: string | null
      plus_d_information: string | null
    }, ExtArgs["result"]["information_complementaire"]>
    composites: {}
  }

  type information_complementaireGetPayload<S extends boolean | null | undefined | information_complementaireDefaultArgs> = $Result.GetResult<Prisma.$information_complementairePayload, S>

  type information_complementaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<information_complementaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Information_complementaireCountAggregateInputType | true
    }

  export interface information_complementaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['information_complementaire'], meta: { name: 'information_complementaire' } }
    /**
     * Find zero or one Information_complementaire that matches the filter.
     * @param {information_complementaireFindUniqueArgs} args - Arguments to find a Information_complementaire
     * @example
     * // Get one Information_complementaire
     * const information_complementaire = await prisma.information_complementaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends information_complementaireFindUniqueArgs>(args: SelectSubset<T, information_complementaireFindUniqueArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Information_complementaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {information_complementaireFindUniqueOrThrowArgs} args - Arguments to find a Information_complementaire
     * @example
     * // Get one Information_complementaire
     * const information_complementaire = await prisma.information_complementaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends information_complementaireFindUniqueOrThrowArgs>(args: SelectSubset<T, information_complementaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Information_complementaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {information_complementaireFindFirstArgs} args - Arguments to find a Information_complementaire
     * @example
     * // Get one Information_complementaire
     * const information_complementaire = await prisma.information_complementaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends information_complementaireFindFirstArgs>(args?: SelectSubset<T, information_complementaireFindFirstArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Information_complementaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {information_complementaireFindFirstOrThrowArgs} args - Arguments to find a Information_complementaire
     * @example
     * // Get one Information_complementaire
     * const information_complementaire = await prisma.information_complementaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends information_complementaireFindFirstOrThrowArgs>(args?: SelectSubset<T, information_complementaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Information_complementaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {information_complementaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Information_complementaires
     * const information_complementaires = await prisma.information_complementaire.findMany()
     * 
     * // Get first 10 Information_complementaires
     * const information_complementaires = await prisma.information_complementaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const information_complementaireWithIdOnly = await prisma.information_complementaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends information_complementaireFindManyArgs>(args?: SelectSubset<T, information_complementaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Information_complementaire.
     * @param {information_complementaireCreateArgs} args - Arguments to create a Information_complementaire.
     * @example
     * // Create one Information_complementaire
     * const Information_complementaire = await prisma.information_complementaire.create({
     *   data: {
     *     // ... data to create a Information_complementaire
     *   }
     * })
     * 
     */
    create<T extends information_complementaireCreateArgs>(args: SelectSubset<T, information_complementaireCreateArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Information_complementaires.
     * @param {information_complementaireCreateManyArgs} args - Arguments to create many Information_complementaires.
     * @example
     * // Create many Information_complementaires
     * const information_complementaire = await prisma.information_complementaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends information_complementaireCreateManyArgs>(args?: SelectSubset<T, information_complementaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Information_complementaire.
     * @param {information_complementaireDeleteArgs} args - Arguments to delete one Information_complementaire.
     * @example
     * // Delete one Information_complementaire
     * const Information_complementaire = await prisma.information_complementaire.delete({
     *   where: {
     *     // ... filter to delete one Information_complementaire
     *   }
     * })
     * 
     */
    delete<T extends information_complementaireDeleteArgs>(args: SelectSubset<T, information_complementaireDeleteArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Information_complementaire.
     * @param {information_complementaireUpdateArgs} args - Arguments to update one Information_complementaire.
     * @example
     * // Update one Information_complementaire
     * const information_complementaire = await prisma.information_complementaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends information_complementaireUpdateArgs>(args: SelectSubset<T, information_complementaireUpdateArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Information_complementaires.
     * @param {information_complementaireDeleteManyArgs} args - Arguments to filter Information_complementaires to delete.
     * @example
     * // Delete a few Information_complementaires
     * const { count } = await prisma.information_complementaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends information_complementaireDeleteManyArgs>(args?: SelectSubset<T, information_complementaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Information_complementaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {information_complementaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Information_complementaires
     * const information_complementaire = await prisma.information_complementaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends information_complementaireUpdateManyArgs>(args: SelectSubset<T, information_complementaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Information_complementaire.
     * @param {information_complementaireUpsertArgs} args - Arguments to update or create a Information_complementaire.
     * @example
     * // Update or create a Information_complementaire
     * const information_complementaire = await prisma.information_complementaire.upsert({
     *   create: {
     *     // ... data to create a Information_complementaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Information_complementaire we want to update
     *   }
     * })
     */
    upsert<T extends information_complementaireUpsertArgs>(args: SelectSubset<T, information_complementaireUpsertArgs<ExtArgs>>): Prisma__information_complementaireClient<$Result.GetResult<Prisma.$information_complementairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Information_complementaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {information_complementaireCountArgs} args - Arguments to filter Information_complementaires to count.
     * @example
     * // Count the number of Information_complementaires
     * const count = await prisma.information_complementaire.count({
     *   where: {
     *     // ... the filter for the Information_complementaires we want to count
     *   }
     * })
    **/
    count<T extends information_complementaireCountArgs>(
      args?: Subset<T, information_complementaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Information_complementaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Information_complementaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Information_complementaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Information_complementaireAggregateArgs>(args: Subset<T, Information_complementaireAggregateArgs>): Prisma.PrismaPromise<GetInformation_complementaireAggregateType<T>>

    /**
     * Group by Information_complementaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {information_complementaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends information_complementaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: information_complementaireGroupByArgs['orderBy'] }
        : { orderBy?: information_complementaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, information_complementaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInformation_complementaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the information_complementaire model
   */
  readonly fields: information_complementaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for information_complementaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__information_complementaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entete_facture<T extends information_complementaire$entete_factureArgs<ExtArgs> = {}>(args?: Subset<T, information_complementaire$entete_factureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entete_facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the information_complementaire model
   */
  interface information_complementaireFieldRefs {
    readonly id: FieldRef<"information_complementaire", 'BigInt'>
    readonly uuid: FieldRef<"information_complementaire", 'String'>
    readonly pied_de_page: FieldRef<"information_complementaire", 'String'>
    readonly nom_commercial: FieldRef<"information_complementaire", 'String'>
    readonly autre_mention: FieldRef<"information_complementaire", 'String'>
    readonly plus_d_information: FieldRef<"information_complementaire", 'String'>
  }
    

  // Custom InputTypes
  /**
   * information_complementaire findUnique
   */
  export type information_complementaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * Filter, which information_complementaire to fetch.
     */
    where: information_complementaireWhereUniqueInput
  }

  /**
   * information_complementaire findUniqueOrThrow
   */
  export type information_complementaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * Filter, which information_complementaire to fetch.
     */
    where: information_complementaireWhereUniqueInput
  }

  /**
   * information_complementaire findFirst
   */
  export type information_complementaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * Filter, which information_complementaire to fetch.
     */
    where?: information_complementaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information_complementaires to fetch.
     */
    orderBy?: information_complementaireOrderByWithRelationInput | information_complementaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for information_complementaires.
     */
    cursor?: information_complementaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information_complementaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information_complementaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of information_complementaires.
     */
    distinct?: Information_complementaireScalarFieldEnum | Information_complementaireScalarFieldEnum[]
  }

  /**
   * information_complementaire findFirstOrThrow
   */
  export type information_complementaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * Filter, which information_complementaire to fetch.
     */
    where?: information_complementaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information_complementaires to fetch.
     */
    orderBy?: information_complementaireOrderByWithRelationInput | information_complementaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for information_complementaires.
     */
    cursor?: information_complementaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information_complementaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information_complementaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of information_complementaires.
     */
    distinct?: Information_complementaireScalarFieldEnum | Information_complementaireScalarFieldEnum[]
  }

  /**
   * information_complementaire findMany
   */
  export type information_complementaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * Filter, which information_complementaires to fetch.
     */
    where?: information_complementaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of information_complementaires to fetch.
     */
    orderBy?: information_complementaireOrderByWithRelationInput | information_complementaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing information_complementaires.
     */
    cursor?: information_complementaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` information_complementaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` information_complementaires.
     */
    skip?: number
    distinct?: Information_complementaireScalarFieldEnum | Information_complementaireScalarFieldEnum[]
  }

  /**
   * information_complementaire create
   */
  export type information_complementaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * The data needed to create a information_complementaire.
     */
    data?: XOR<information_complementaireCreateInput, information_complementaireUncheckedCreateInput>
  }

  /**
   * information_complementaire createMany
   */
  export type information_complementaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many information_complementaires.
     */
    data: information_complementaireCreateManyInput | information_complementaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * information_complementaire update
   */
  export type information_complementaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * The data needed to update a information_complementaire.
     */
    data: XOR<information_complementaireUpdateInput, information_complementaireUncheckedUpdateInput>
    /**
     * Choose, which information_complementaire to update.
     */
    where: information_complementaireWhereUniqueInput
  }

  /**
   * information_complementaire updateMany
   */
  export type information_complementaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update information_complementaires.
     */
    data: XOR<information_complementaireUpdateManyMutationInput, information_complementaireUncheckedUpdateManyInput>
    /**
     * Filter which information_complementaires to update
     */
    where?: information_complementaireWhereInput
    /**
     * Limit how many information_complementaires to update.
     */
    limit?: number
  }

  /**
   * information_complementaire upsert
   */
  export type information_complementaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * The filter to search for the information_complementaire to update in case it exists.
     */
    where: information_complementaireWhereUniqueInput
    /**
     * In case the information_complementaire found by the `where` argument doesn't exist, create a new information_complementaire with this data.
     */
    create: XOR<information_complementaireCreateInput, information_complementaireUncheckedCreateInput>
    /**
     * In case the information_complementaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<information_complementaireUpdateInput, information_complementaireUncheckedUpdateInput>
  }

  /**
   * information_complementaire delete
   */
  export type information_complementaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
    /**
     * Filter which information_complementaire to delete.
     */
    where: information_complementaireWhereUniqueInput
  }

  /**
   * information_complementaire deleteMany
   */
  export type information_complementaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which information_complementaires to delete
     */
    where?: information_complementaireWhereInput
    /**
     * Limit how many information_complementaires to delete.
     */
    limit?: number
  }

  /**
   * information_complementaire.entete_facture
   */
  export type information_complementaire$entete_factureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entete_facture
     */
    select?: entete_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entete_facture
     */
    omit?: entete_factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entete_factureInclude<ExtArgs> | null
    where?: entete_factureWhereInput
    orderBy?: entete_factureOrderByWithRelationInput | entete_factureOrderByWithRelationInput[]
    cursor?: entete_factureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Entete_factureScalarFieldEnum | Entete_factureScalarFieldEnum[]
  }

  /**
   * information_complementaire without action
   */
  export type information_complementaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the information_complementaire
     */
    select?: information_complementaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the information_complementaire
     */
    omit?: information_complementaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: information_complementaireInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Entete_factureScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    numero_facture: 'numero_facture',
    date_facture: 'date_facture',
    code_type_facture: 'code_type_facture',
    code_type_facturation: 'code_type_facturation',
    code_mode_paiement: 'code_mode_paiement',
    code_devise: 'code_devise',
    total_ht: 'total_ht',
    total_tva: 'total_tva',
    total_remise: 'total_remise',
    total_autre_taxe: 'total_autre_taxe',
    total_ttc: 'total_ttc',
    point_vente: 'point_vente',
    etablissement: 'etablissement',
    certifie: 'certifie',
    retour_ncc: 'retour_ncc',
    retour_id_facture: 'retour_id_facture',
    retour_token: 'retour_token',
    numero_facture_origine: 'numero_facture_origine',
    id_tiers: 'id_tiers',
    id_information_complementaire: 'id_information_complementaire'
  };

  export type Entete_factureScalarFieldEnum = (typeof Entete_factureScalarFieldEnum)[keyof typeof Entete_factureScalarFieldEnum]


  export const Detail_factureScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    id_entete_facture: 'id_entete_facture',
    code_taux_imposition: 'code_taux_imposition',
    reference_article: 'reference_article',
    designation_article: 'designation_article',
    quantite: 'quantite',
    unite_vente: 'unite_vente',
    prix: 'prix',
    montant_ht: 'montant_ht',
    remise: 'remise',
    montant_ttc: 'montant_ttc',
    montant_taux_imposition: 'montant_taux_imposition',
    retour_detail: 'retour_detail',
    ligne_avoir: 'ligne_avoir',
    id_detail_origine_facture: 'id_detail_origine_facture',
    montant_remise: 'montant_remise'
  };

  export type Detail_factureScalarFieldEnum = (typeof Detail_factureScalarFieldEnum)[keyof typeof Detail_factureScalarFieldEnum]


  export const Taxe_detailsScalarFieldEnum: {
    id: 'id',
    id_detail_facture: 'id_detail_facture',
    libelle_taxe_details: 'libelle_taxe_details',
    taux_taxe_details: 'taux_taxe_details',
    montant_taxe_details: 'montant_taxe_details'
  };

  export type Taxe_detailsScalarFieldEnum = (typeof Taxe_detailsScalarFieldEnum)[keyof typeof Taxe_detailsScalarFieldEnum]


  export const Taxe_piedsScalarFieldEnum: {
    id: 'id',
    id_entete_facture: 'id_entete_facture',
    libelle_taxe_pieds: 'libelle_taxe_pieds',
    taux_taxe_pieds: 'taux_taxe_pieds',
    montant_taxe_pieds: 'montant_taxe_pieds'
  };

  export type Taxe_piedsScalarFieldEnum = (typeof Taxe_piedsScalarFieldEnum)[keyof typeof Taxe_piedsScalarFieldEnum]


  export const TiersScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code_tiers: 'code_tiers',
    raison_sociale_tiers: 'raison_sociale_tiers',
    telephone_tiers: 'telephone_tiers',
    email_tiers: 'email_tiers'
  };

  export type TiersScalarFieldEnum = (typeof TiersScalarFieldEnum)[keyof typeof TiersScalarFieldEnum]


  export const Information_complementaireScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    pied_de_page: 'pied_de_page',
    nom_commercial: 'nom_commercial',
    autre_mention: 'autre_mention',
    plus_d_information: 'plus_d_information'
  };

  export type Information_complementaireScalarFieldEnum = (typeof Information_complementaireScalarFieldEnum)[keyof typeof Information_complementaireScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const entete_factureOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    numero_facture: 'numero_facture',
    code_type_facture: 'code_type_facture',
    code_type_facturation: 'code_type_facturation',
    code_mode_paiement: 'code_mode_paiement',
    code_devise: 'code_devise',
    point_vente: 'point_vente',
    etablissement: 'etablissement',
    retour_ncc: 'retour_ncc',
    retour_id_facture: 'retour_id_facture',
    retour_token: 'retour_token',
    numero_facture_origine: 'numero_facture_origine'
  };

  export type entete_factureOrderByRelevanceFieldEnum = (typeof entete_factureOrderByRelevanceFieldEnum)[keyof typeof entete_factureOrderByRelevanceFieldEnum]


  export const detail_factureOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_taux_imposition: 'code_taux_imposition',
    reference_article: 'reference_article',
    designation_article: 'designation_article',
    unite_vente: 'unite_vente',
    retour_detail: 'retour_detail'
  };

  export type detail_factureOrderByRelevanceFieldEnum = (typeof detail_factureOrderByRelevanceFieldEnum)[keyof typeof detail_factureOrderByRelevanceFieldEnum]


  export const taxe_detailsOrderByRelevanceFieldEnum: {
    libelle_taxe_details: 'libelle_taxe_details'
  };

  export type taxe_detailsOrderByRelevanceFieldEnum = (typeof taxe_detailsOrderByRelevanceFieldEnum)[keyof typeof taxe_detailsOrderByRelevanceFieldEnum]


  export const taxe_piedsOrderByRelevanceFieldEnum: {
    libelle_taxe_pieds: 'libelle_taxe_pieds'
  };

  export type taxe_piedsOrderByRelevanceFieldEnum = (typeof taxe_piedsOrderByRelevanceFieldEnum)[keyof typeof taxe_piedsOrderByRelevanceFieldEnum]


  export const tiersOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_tiers: 'code_tiers',
    raison_sociale_tiers: 'raison_sociale_tiers',
    telephone_tiers: 'telephone_tiers',
    email_tiers: 'email_tiers'
  };

  export type tiersOrderByRelevanceFieldEnum = (typeof tiersOrderByRelevanceFieldEnum)[keyof typeof tiersOrderByRelevanceFieldEnum]


  export const information_complementaireOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    pied_de_page: 'pied_de_page',
    nom_commercial: 'nom_commercial',
    autre_mention: 'autre_mention',
    plus_d_information: 'plus_d_information'
  };

  export type information_complementaireOrderByRelevanceFieldEnum = (typeof information_complementaireOrderByRelevanceFieldEnum)[keyof typeof information_complementaireOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type entete_factureWhereInput = {
    AND?: entete_factureWhereInput | entete_factureWhereInput[]
    OR?: entete_factureWhereInput[]
    NOT?: entete_factureWhereInput | entete_factureWhereInput[]
    id?: BigIntFilter<"entete_facture"> | bigint | number
    uuid?: StringFilter<"entete_facture"> | string
    numero_facture?: StringFilter<"entete_facture"> | string
    date_facture?: DateTimeFilter<"entete_facture"> | Date | string
    code_type_facture?: StringFilter<"entete_facture"> | string
    code_type_facturation?: StringFilter<"entete_facture"> | string
    code_mode_paiement?: StringFilter<"entete_facture"> | string
    code_devise?: StringFilter<"entete_facture"> | string
    total_ht?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    point_vente?: StringFilter<"entete_facture"> | string
    etablissement?: StringFilter<"entete_facture"> | string
    certifie?: IntFilter<"entete_facture"> | number
    retour_ncc?: StringNullableFilter<"entete_facture"> | string | null
    retour_id_facture?: StringNullableFilter<"entete_facture"> | string | null
    retour_token?: StringNullableFilter<"entete_facture"> | string | null
    numero_facture_origine?: StringNullableFilter<"entete_facture"> | string | null
    id_tiers?: BigIntFilter<"entete_facture"> | bigint | number
    id_information_complementaire?: BigIntNullableFilter<"entete_facture"> | bigint | number | null
    tiers?: XOR<TiersScalarRelationFilter, tiersWhereInput>
    information_complementaire?: XOR<Information_complementaireNullableScalarRelationFilter, information_complementaireWhereInput> | null
    detail_facture?: Detail_factureListRelationFilter
    taxe_pieds?: Taxe_piedsListRelationFilter
  }

  export type entete_factureOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    numero_facture?: SortOrder
    date_facture?: SortOrder
    code_type_facture?: SortOrder
    code_type_facturation?: SortOrder
    code_mode_paiement?: SortOrder
    code_devise?: SortOrder
    total_ht?: SortOrder
    total_tva?: SortOrder
    total_remise?: SortOrder
    total_autre_taxe?: SortOrder
    total_ttc?: SortOrder
    point_vente?: SortOrder
    etablissement?: SortOrder
    certifie?: SortOrder
    retour_ncc?: SortOrderInput | SortOrder
    retour_id_facture?: SortOrderInput | SortOrder
    retour_token?: SortOrderInput | SortOrder
    numero_facture_origine?: SortOrderInput | SortOrder
    id_tiers?: SortOrder
    id_information_complementaire?: SortOrderInput | SortOrder
    tiers?: tiersOrderByWithRelationInput
    information_complementaire?: information_complementaireOrderByWithRelationInput
    detail_facture?: detail_factureOrderByRelationAggregateInput
    taxe_pieds?: taxe_piedsOrderByRelationAggregateInput
    _relevance?: entete_factureOrderByRelevanceInput
  }

  export type entete_factureWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: entete_factureWhereInput | entete_factureWhereInput[]
    OR?: entete_factureWhereInput[]
    NOT?: entete_factureWhereInput | entete_factureWhereInput[]
    numero_facture?: StringFilter<"entete_facture"> | string
    date_facture?: DateTimeFilter<"entete_facture"> | Date | string
    code_type_facture?: StringFilter<"entete_facture"> | string
    code_type_facturation?: StringFilter<"entete_facture"> | string
    code_mode_paiement?: StringFilter<"entete_facture"> | string
    code_devise?: StringFilter<"entete_facture"> | string
    total_ht?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    point_vente?: StringFilter<"entete_facture"> | string
    etablissement?: StringFilter<"entete_facture"> | string
    certifie?: IntFilter<"entete_facture"> | number
    retour_ncc?: StringNullableFilter<"entete_facture"> | string | null
    retour_id_facture?: StringNullableFilter<"entete_facture"> | string | null
    retour_token?: StringNullableFilter<"entete_facture"> | string | null
    numero_facture_origine?: StringNullableFilter<"entete_facture"> | string | null
    id_tiers?: BigIntFilter<"entete_facture"> | bigint | number
    id_information_complementaire?: BigIntNullableFilter<"entete_facture"> | bigint | number | null
    tiers?: XOR<TiersScalarRelationFilter, tiersWhereInput>
    information_complementaire?: XOR<Information_complementaireNullableScalarRelationFilter, information_complementaireWhereInput> | null
    detail_facture?: Detail_factureListRelationFilter
    taxe_pieds?: Taxe_piedsListRelationFilter
  }, "id" | "uuid">

  export type entete_factureOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    numero_facture?: SortOrder
    date_facture?: SortOrder
    code_type_facture?: SortOrder
    code_type_facturation?: SortOrder
    code_mode_paiement?: SortOrder
    code_devise?: SortOrder
    total_ht?: SortOrder
    total_tva?: SortOrder
    total_remise?: SortOrder
    total_autre_taxe?: SortOrder
    total_ttc?: SortOrder
    point_vente?: SortOrder
    etablissement?: SortOrder
    certifie?: SortOrder
    retour_ncc?: SortOrderInput | SortOrder
    retour_id_facture?: SortOrderInput | SortOrder
    retour_token?: SortOrderInput | SortOrder
    numero_facture_origine?: SortOrderInput | SortOrder
    id_tiers?: SortOrder
    id_information_complementaire?: SortOrderInput | SortOrder
    _count?: entete_factureCountOrderByAggregateInput
    _avg?: entete_factureAvgOrderByAggregateInput
    _max?: entete_factureMaxOrderByAggregateInput
    _min?: entete_factureMinOrderByAggregateInput
    _sum?: entete_factureSumOrderByAggregateInput
  }

  export type entete_factureScalarWhereWithAggregatesInput = {
    AND?: entete_factureScalarWhereWithAggregatesInput | entete_factureScalarWhereWithAggregatesInput[]
    OR?: entete_factureScalarWhereWithAggregatesInput[]
    NOT?: entete_factureScalarWhereWithAggregatesInput | entete_factureScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"entete_facture"> | bigint | number
    uuid?: StringWithAggregatesFilter<"entete_facture"> | string
    numero_facture?: StringWithAggregatesFilter<"entete_facture"> | string
    date_facture?: DateTimeWithAggregatesFilter<"entete_facture"> | Date | string
    code_type_facture?: StringWithAggregatesFilter<"entete_facture"> | string
    code_type_facturation?: StringWithAggregatesFilter<"entete_facture"> | string
    code_mode_paiement?: StringWithAggregatesFilter<"entete_facture"> | string
    code_devise?: StringWithAggregatesFilter<"entete_facture"> | string
    total_ht?: DecimalWithAggregatesFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalWithAggregatesFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalWithAggregatesFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalWithAggregatesFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalWithAggregatesFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    point_vente?: StringWithAggregatesFilter<"entete_facture"> | string
    etablissement?: StringWithAggregatesFilter<"entete_facture"> | string
    certifie?: IntWithAggregatesFilter<"entete_facture"> | number
    retour_ncc?: StringNullableWithAggregatesFilter<"entete_facture"> | string | null
    retour_id_facture?: StringNullableWithAggregatesFilter<"entete_facture"> | string | null
    retour_token?: StringNullableWithAggregatesFilter<"entete_facture"> | string | null
    numero_facture_origine?: StringNullableWithAggregatesFilter<"entete_facture"> | string | null
    id_tiers?: BigIntWithAggregatesFilter<"entete_facture"> | bigint | number
    id_information_complementaire?: BigIntNullableWithAggregatesFilter<"entete_facture"> | bigint | number | null
  }

  export type detail_factureWhereInput = {
    AND?: detail_factureWhereInput | detail_factureWhereInput[]
    OR?: detail_factureWhereInput[]
    NOT?: detail_factureWhereInput | detail_factureWhereInput[]
    id?: BigIntFilter<"detail_facture"> | bigint | number
    uuid?: StringFilter<"detail_facture"> | string
    id_entete_facture?: BigIntFilter<"detail_facture"> | bigint | number
    code_taux_imposition?: StringFilter<"detail_facture"> | string
    reference_article?: StringNullableFilter<"detail_facture"> | string | null
    designation_article?: StringNullableFilter<"detail_facture"> | string | null
    quantite?: FloatFilter<"detail_facture"> | number
    unite_vente?: StringFilter<"detail_facture"> | string
    prix?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    remise?: FloatFilter<"detail_facture"> | number
    montant_ttc?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFilter<"detail_facture"> | string
    ligne_avoir?: IntFilter<"detail_facture"> | number
    id_detail_origine_facture?: BigIntFilter<"detail_facture"> | bigint | number
    montant_remise?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    entete_facture?: XOR<Entete_factureScalarRelationFilter, entete_factureWhereInput>
    taxe_details?: Taxe_detailsListRelationFilter
  }

  export type detail_factureOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_entete_facture?: SortOrder
    code_taux_imposition?: SortOrder
    reference_article?: SortOrderInput | SortOrder
    designation_article?: SortOrderInput | SortOrder
    quantite?: SortOrder
    unite_vente?: SortOrder
    prix?: SortOrder
    montant_ht?: SortOrder
    remise?: SortOrder
    montant_ttc?: SortOrder
    montant_taux_imposition?: SortOrder
    retour_detail?: SortOrder
    ligne_avoir?: SortOrder
    id_detail_origine_facture?: SortOrder
    montant_remise?: SortOrder
    entete_facture?: entete_factureOrderByWithRelationInput
    taxe_details?: taxe_detailsOrderByRelationAggregateInput
    _relevance?: detail_factureOrderByRelevanceInput
  }

  export type detail_factureWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: detail_factureWhereInput | detail_factureWhereInput[]
    OR?: detail_factureWhereInput[]
    NOT?: detail_factureWhereInput | detail_factureWhereInput[]
    id_entete_facture?: BigIntFilter<"detail_facture"> | bigint | number
    code_taux_imposition?: StringFilter<"detail_facture"> | string
    reference_article?: StringNullableFilter<"detail_facture"> | string | null
    designation_article?: StringNullableFilter<"detail_facture"> | string | null
    quantite?: FloatFilter<"detail_facture"> | number
    unite_vente?: StringFilter<"detail_facture"> | string
    prix?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    remise?: FloatFilter<"detail_facture"> | number
    montant_ttc?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFilter<"detail_facture"> | string
    ligne_avoir?: IntFilter<"detail_facture"> | number
    id_detail_origine_facture?: BigIntFilter<"detail_facture"> | bigint | number
    montant_remise?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    entete_facture?: XOR<Entete_factureScalarRelationFilter, entete_factureWhereInput>
    taxe_details?: Taxe_detailsListRelationFilter
  }, "id" | "uuid">

  export type detail_factureOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_entete_facture?: SortOrder
    code_taux_imposition?: SortOrder
    reference_article?: SortOrderInput | SortOrder
    designation_article?: SortOrderInput | SortOrder
    quantite?: SortOrder
    unite_vente?: SortOrder
    prix?: SortOrder
    montant_ht?: SortOrder
    remise?: SortOrder
    montant_ttc?: SortOrder
    montant_taux_imposition?: SortOrder
    retour_detail?: SortOrder
    ligne_avoir?: SortOrder
    id_detail_origine_facture?: SortOrder
    montant_remise?: SortOrder
    _count?: detail_factureCountOrderByAggregateInput
    _avg?: detail_factureAvgOrderByAggregateInput
    _max?: detail_factureMaxOrderByAggregateInput
    _min?: detail_factureMinOrderByAggregateInput
    _sum?: detail_factureSumOrderByAggregateInput
  }

  export type detail_factureScalarWhereWithAggregatesInput = {
    AND?: detail_factureScalarWhereWithAggregatesInput | detail_factureScalarWhereWithAggregatesInput[]
    OR?: detail_factureScalarWhereWithAggregatesInput[]
    NOT?: detail_factureScalarWhereWithAggregatesInput | detail_factureScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"detail_facture"> | bigint | number
    uuid?: StringWithAggregatesFilter<"detail_facture"> | string
    id_entete_facture?: BigIntWithAggregatesFilter<"detail_facture"> | bigint | number
    code_taux_imposition?: StringWithAggregatesFilter<"detail_facture"> | string
    reference_article?: StringNullableWithAggregatesFilter<"detail_facture"> | string | null
    designation_article?: StringNullableWithAggregatesFilter<"detail_facture"> | string | null
    quantite?: FloatWithAggregatesFilter<"detail_facture"> | number
    unite_vente?: StringWithAggregatesFilter<"detail_facture"> | string
    prix?: DecimalWithAggregatesFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalWithAggregatesFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    remise?: FloatWithAggregatesFilter<"detail_facture"> | number
    montant_ttc?: DecimalWithAggregatesFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalWithAggregatesFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    retour_detail?: StringWithAggregatesFilter<"detail_facture"> | string
    ligne_avoir?: IntWithAggregatesFilter<"detail_facture"> | number
    id_detail_origine_facture?: BigIntWithAggregatesFilter<"detail_facture"> | bigint | number
    montant_remise?: DecimalWithAggregatesFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsWhereInput = {
    AND?: taxe_detailsWhereInput | taxe_detailsWhereInput[]
    OR?: taxe_detailsWhereInput[]
    NOT?: taxe_detailsWhereInput | taxe_detailsWhereInput[]
    id?: BigIntFilter<"taxe_details"> | bigint | number
    id_detail_facture?: BigIntFilter<"taxe_details"> | bigint | number
    libelle_taxe_details?: StringNullableFilter<"taxe_details"> | string | null
    taux_taxe_details?: FloatFilter<"taxe_details"> | number
    montant_taxe_details?: DecimalFilter<"taxe_details"> | Decimal | DecimalJsLike | number | string
    detail_facture?: XOR<Detail_factureScalarRelationFilter, detail_factureWhereInput>
  }

  export type taxe_detailsOrderByWithRelationInput = {
    id?: SortOrder
    id_detail_facture?: SortOrder
    libelle_taxe_details?: SortOrderInput | SortOrder
    taux_taxe_details?: SortOrder
    montant_taxe_details?: SortOrder
    detail_facture?: detail_factureOrderByWithRelationInput
    _relevance?: taxe_detailsOrderByRelevanceInput
  }

  export type taxe_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: taxe_detailsWhereInput | taxe_detailsWhereInput[]
    OR?: taxe_detailsWhereInput[]
    NOT?: taxe_detailsWhereInput | taxe_detailsWhereInput[]
    id_detail_facture?: BigIntFilter<"taxe_details"> | bigint | number
    libelle_taxe_details?: StringNullableFilter<"taxe_details"> | string | null
    taux_taxe_details?: FloatFilter<"taxe_details"> | number
    montant_taxe_details?: DecimalFilter<"taxe_details"> | Decimal | DecimalJsLike | number | string
    detail_facture?: XOR<Detail_factureScalarRelationFilter, detail_factureWhereInput>
  }, "id">

  export type taxe_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    id_detail_facture?: SortOrder
    libelle_taxe_details?: SortOrderInput | SortOrder
    taux_taxe_details?: SortOrder
    montant_taxe_details?: SortOrder
    _count?: taxe_detailsCountOrderByAggregateInput
    _avg?: taxe_detailsAvgOrderByAggregateInput
    _max?: taxe_detailsMaxOrderByAggregateInput
    _min?: taxe_detailsMinOrderByAggregateInput
    _sum?: taxe_detailsSumOrderByAggregateInput
  }

  export type taxe_detailsScalarWhereWithAggregatesInput = {
    AND?: taxe_detailsScalarWhereWithAggregatesInput | taxe_detailsScalarWhereWithAggregatesInput[]
    OR?: taxe_detailsScalarWhereWithAggregatesInput[]
    NOT?: taxe_detailsScalarWhereWithAggregatesInput | taxe_detailsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"taxe_details"> | bigint | number
    id_detail_facture?: BigIntWithAggregatesFilter<"taxe_details"> | bigint | number
    libelle_taxe_details?: StringNullableWithAggregatesFilter<"taxe_details"> | string | null
    taux_taxe_details?: FloatWithAggregatesFilter<"taxe_details"> | number
    montant_taxe_details?: DecimalWithAggregatesFilter<"taxe_details"> | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsWhereInput = {
    AND?: taxe_piedsWhereInput | taxe_piedsWhereInput[]
    OR?: taxe_piedsWhereInput[]
    NOT?: taxe_piedsWhereInput | taxe_piedsWhereInput[]
    id?: BigIntFilter<"taxe_pieds"> | bigint | number
    id_entete_facture?: BigIntFilter<"taxe_pieds"> | bigint | number
    libelle_taxe_pieds?: StringNullableFilter<"taxe_pieds"> | string | null
    taux_taxe_pieds?: FloatFilter<"taxe_pieds"> | number
    montant_taxe_pieds?: DecimalFilter<"taxe_pieds"> | Decimal | DecimalJsLike | number | string
    entete_facture?: XOR<Entete_factureScalarRelationFilter, entete_factureWhereInput>
  }

  export type taxe_piedsOrderByWithRelationInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    libelle_taxe_pieds?: SortOrderInput | SortOrder
    taux_taxe_pieds?: SortOrder
    montant_taxe_pieds?: SortOrder
    entete_facture?: entete_factureOrderByWithRelationInput
    _relevance?: taxe_piedsOrderByRelevanceInput
  }

  export type taxe_piedsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: taxe_piedsWhereInput | taxe_piedsWhereInput[]
    OR?: taxe_piedsWhereInput[]
    NOT?: taxe_piedsWhereInput | taxe_piedsWhereInput[]
    id_entete_facture?: BigIntFilter<"taxe_pieds"> | bigint | number
    libelle_taxe_pieds?: StringNullableFilter<"taxe_pieds"> | string | null
    taux_taxe_pieds?: FloatFilter<"taxe_pieds"> | number
    montant_taxe_pieds?: DecimalFilter<"taxe_pieds"> | Decimal | DecimalJsLike | number | string
    entete_facture?: XOR<Entete_factureScalarRelationFilter, entete_factureWhereInput>
  }, "id">

  export type taxe_piedsOrderByWithAggregationInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    libelle_taxe_pieds?: SortOrderInput | SortOrder
    taux_taxe_pieds?: SortOrder
    montant_taxe_pieds?: SortOrder
    _count?: taxe_piedsCountOrderByAggregateInput
    _avg?: taxe_piedsAvgOrderByAggregateInput
    _max?: taxe_piedsMaxOrderByAggregateInput
    _min?: taxe_piedsMinOrderByAggregateInput
    _sum?: taxe_piedsSumOrderByAggregateInput
  }

  export type taxe_piedsScalarWhereWithAggregatesInput = {
    AND?: taxe_piedsScalarWhereWithAggregatesInput | taxe_piedsScalarWhereWithAggregatesInput[]
    OR?: taxe_piedsScalarWhereWithAggregatesInput[]
    NOT?: taxe_piedsScalarWhereWithAggregatesInput | taxe_piedsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"taxe_pieds"> | bigint | number
    id_entete_facture?: BigIntWithAggregatesFilter<"taxe_pieds"> | bigint | number
    libelle_taxe_pieds?: StringNullableWithAggregatesFilter<"taxe_pieds"> | string | null
    taux_taxe_pieds?: FloatWithAggregatesFilter<"taxe_pieds"> | number
    montant_taxe_pieds?: DecimalWithAggregatesFilter<"taxe_pieds"> | Decimal | DecimalJsLike | number | string
  }

  export type tiersWhereInput = {
    AND?: tiersWhereInput | tiersWhereInput[]
    OR?: tiersWhereInput[]
    NOT?: tiersWhereInput | tiersWhereInput[]
    id?: BigIntFilter<"tiers"> | bigint | number
    uuid?: StringFilter<"tiers"> | string
    code_tiers?: StringFilter<"tiers"> | string
    raison_sociale_tiers?: StringFilter<"tiers"> | string
    telephone_tiers?: StringNullableFilter<"tiers"> | string | null
    email_tiers?: StringNullableFilter<"tiers"> | string | null
    entete_facture?: Entete_factureListRelationFilter
  }

  export type tiersOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_tiers?: SortOrder
    raison_sociale_tiers?: SortOrder
    telephone_tiers?: SortOrderInput | SortOrder
    email_tiers?: SortOrderInput | SortOrder
    entete_facture?: entete_factureOrderByRelationAggregateInput
    _relevance?: tiersOrderByRelevanceInput
  }

  export type tiersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    code_tiers?: string
    AND?: tiersWhereInput | tiersWhereInput[]
    OR?: tiersWhereInput[]
    NOT?: tiersWhereInput | tiersWhereInput[]
    raison_sociale_tiers?: StringFilter<"tiers"> | string
    telephone_tiers?: StringNullableFilter<"tiers"> | string | null
    email_tiers?: StringNullableFilter<"tiers"> | string | null
    entete_facture?: Entete_factureListRelationFilter
  }, "id" | "uuid" | "code_tiers">

  export type tiersOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_tiers?: SortOrder
    raison_sociale_tiers?: SortOrder
    telephone_tiers?: SortOrderInput | SortOrder
    email_tiers?: SortOrderInput | SortOrder
    _count?: tiersCountOrderByAggregateInput
    _avg?: tiersAvgOrderByAggregateInput
    _max?: tiersMaxOrderByAggregateInput
    _min?: tiersMinOrderByAggregateInput
    _sum?: tiersSumOrderByAggregateInput
  }

  export type tiersScalarWhereWithAggregatesInput = {
    AND?: tiersScalarWhereWithAggregatesInput | tiersScalarWhereWithAggregatesInput[]
    OR?: tiersScalarWhereWithAggregatesInput[]
    NOT?: tiersScalarWhereWithAggregatesInput | tiersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tiers"> | bigint | number
    uuid?: StringWithAggregatesFilter<"tiers"> | string
    code_tiers?: StringWithAggregatesFilter<"tiers"> | string
    raison_sociale_tiers?: StringWithAggregatesFilter<"tiers"> | string
    telephone_tiers?: StringNullableWithAggregatesFilter<"tiers"> | string | null
    email_tiers?: StringNullableWithAggregatesFilter<"tiers"> | string | null
  }

  export type information_complementaireWhereInput = {
    AND?: information_complementaireWhereInput | information_complementaireWhereInput[]
    OR?: information_complementaireWhereInput[]
    NOT?: information_complementaireWhereInput | information_complementaireWhereInput[]
    id?: BigIntFilter<"information_complementaire"> | bigint | number
    uuid?: StringFilter<"information_complementaire"> | string
    pied_de_page?: StringNullableFilter<"information_complementaire"> | string | null
    nom_commercial?: StringNullableFilter<"information_complementaire"> | string | null
    autre_mention?: StringNullableFilter<"information_complementaire"> | string | null
    plus_d_information?: StringNullableFilter<"information_complementaire"> | string | null
    entete_facture?: Entete_factureListRelationFilter
  }

  export type information_complementaireOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    pied_de_page?: SortOrderInput | SortOrder
    nom_commercial?: SortOrderInput | SortOrder
    autre_mention?: SortOrderInput | SortOrder
    plus_d_information?: SortOrderInput | SortOrder
    entete_facture?: entete_factureOrderByRelationAggregateInput
    _relevance?: information_complementaireOrderByRelevanceInput
  }

  export type information_complementaireWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: information_complementaireWhereInput | information_complementaireWhereInput[]
    OR?: information_complementaireWhereInput[]
    NOT?: information_complementaireWhereInput | information_complementaireWhereInput[]
    pied_de_page?: StringNullableFilter<"information_complementaire"> | string | null
    nom_commercial?: StringNullableFilter<"information_complementaire"> | string | null
    autre_mention?: StringNullableFilter<"information_complementaire"> | string | null
    plus_d_information?: StringNullableFilter<"information_complementaire"> | string | null
    entete_facture?: Entete_factureListRelationFilter
  }, "id" | "uuid">

  export type information_complementaireOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    pied_de_page?: SortOrderInput | SortOrder
    nom_commercial?: SortOrderInput | SortOrder
    autre_mention?: SortOrderInput | SortOrder
    plus_d_information?: SortOrderInput | SortOrder
    _count?: information_complementaireCountOrderByAggregateInput
    _avg?: information_complementaireAvgOrderByAggregateInput
    _max?: information_complementaireMaxOrderByAggregateInput
    _min?: information_complementaireMinOrderByAggregateInput
    _sum?: information_complementaireSumOrderByAggregateInput
  }

  export type information_complementaireScalarWhereWithAggregatesInput = {
    AND?: information_complementaireScalarWhereWithAggregatesInput | information_complementaireScalarWhereWithAggregatesInput[]
    OR?: information_complementaireScalarWhereWithAggregatesInput[]
    NOT?: information_complementaireScalarWhereWithAggregatesInput | information_complementaireScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"information_complementaire"> | bigint | number
    uuid?: StringWithAggregatesFilter<"information_complementaire"> | string
    pied_de_page?: StringNullableWithAggregatesFilter<"information_complementaire"> | string | null
    nom_commercial?: StringNullableWithAggregatesFilter<"information_complementaire"> | string | null
    autre_mention?: StringNullableWithAggregatesFilter<"information_complementaire"> | string | null
    plus_d_information?: StringNullableWithAggregatesFilter<"information_complementaire"> | string | null
  }

  export type entete_factureCreateInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    tiers: tiersCreateNestedOneWithoutEntete_factureInput
    information_complementaire?: information_complementaireCreateNestedOneWithoutEntete_factureInput
    detail_facture?: detail_factureCreateNestedManyWithoutEntete_factureInput
    taxe_pieds?: taxe_piedsCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_tiers: bigint | number
    id_information_complementaire?: bigint | number | null
    detail_facture?: detail_factureUncheckedCreateNestedManyWithoutEntete_factureInput
    taxe_pieds?: taxe_piedsUncheckedCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    tiers?: tiersUpdateOneRequiredWithoutEntete_factureNestedInput
    information_complementaire?: information_complementaireUpdateOneWithoutEntete_factureNestedInput
    detail_facture?: detail_factureUpdateManyWithoutEntete_factureNestedInput
    taxe_pieds?: taxe_piedsUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_tiers?: BigIntFieldUpdateOperationsInput | bigint | number
    id_information_complementaire?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    detail_facture?: detail_factureUncheckedUpdateManyWithoutEntete_factureNestedInput
    taxe_pieds?: taxe_piedsUncheckedUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureCreateManyInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_tiers: bigint | number
    id_information_complementaire?: bigint | number | null
  }

  export type entete_factureUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type entete_factureUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_tiers?: BigIntFieldUpdateOperationsInput | bigint | number
    id_information_complementaire?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type detail_factureCreateInput = {
    id?: bigint | number
    uuid?: string
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
    entete_facture: entete_factureCreateNestedOneWithoutDetail_factureInput
    taxe_details?: taxe_detailsCreateNestedManyWithoutDetail_factureInput
  }

  export type detail_factureUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    id_entete_facture: bigint | number
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
    taxe_details?: taxe_detailsUncheckedCreateNestedManyWithoutDetail_factureInput
  }

  export type detail_factureUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entete_facture?: entete_factureUpdateOneRequiredWithoutDetail_factureNestedInput
    taxe_details?: taxe_detailsUpdateManyWithoutDetail_factureNestedInput
  }

  export type detail_factureUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_entete_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxe_details?: taxe_detailsUncheckedUpdateManyWithoutDetail_factureNestedInput
  }

  export type detail_factureCreateManyInput = {
    id?: bigint | number
    uuid?: string
    id_entete_facture: bigint | number
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
  }

  export type detail_factureUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type detail_factureUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_entete_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsCreateInput = {
    id?: bigint | number
    libelle_taxe_details?: string | null
    taux_taxe_details: number
    montant_taxe_details: Decimal | DecimalJsLike | number | string
    detail_facture: detail_factureCreateNestedOneWithoutTaxe_detailsInput
  }

  export type taxe_detailsUncheckedCreateInput = {
    id?: bigint | number
    id_detail_facture: bigint | number
    libelle_taxe_details?: string | null
    taux_taxe_details: number
    montant_taxe_details: Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_details?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_details?: FloatFieldUpdateOperationsInput | number
    montant_taxe_details?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detail_facture?: detail_factureUpdateOneRequiredWithoutTaxe_detailsNestedInput
  }

  export type taxe_detailsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_detail_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_details?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_details?: FloatFieldUpdateOperationsInput | number
    montant_taxe_details?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsCreateManyInput = {
    id?: bigint | number
    id_detail_facture: bigint | number
    libelle_taxe_details?: string | null
    taux_taxe_details: number
    montant_taxe_details: Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_details?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_details?: FloatFieldUpdateOperationsInput | number
    montant_taxe_details?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_detail_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_details?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_details?: FloatFieldUpdateOperationsInput | number
    montant_taxe_details?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsCreateInput = {
    id?: bigint | number
    libelle_taxe_pieds?: string | null
    taux_taxe_pieds: number
    montant_taxe_pieds: Decimal | DecimalJsLike | number | string
    entete_facture: entete_factureCreateNestedOneWithoutTaxe_piedsInput
  }

  export type taxe_piedsUncheckedCreateInput = {
    id?: bigint | number
    id_entete_facture: bigint | number
    libelle_taxe_pieds?: string | null
    taux_taxe_pieds: number
    montant_taxe_pieds: Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_pieds?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_pieds?: FloatFieldUpdateOperationsInput | number
    montant_taxe_pieds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entete_facture?: entete_factureUpdateOneRequiredWithoutTaxe_piedsNestedInput
  }

  export type taxe_piedsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_entete_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_pieds?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_pieds?: FloatFieldUpdateOperationsInput | number
    montant_taxe_pieds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsCreateManyInput = {
    id?: bigint | number
    id_entete_facture: bigint | number
    libelle_taxe_pieds?: string | null
    taux_taxe_pieds: number
    montant_taxe_pieds: Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_pieds?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_pieds?: FloatFieldUpdateOperationsInput | number
    montant_taxe_pieds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    id_entete_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_pieds?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_pieds?: FloatFieldUpdateOperationsInput | number
    montant_taxe_pieds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tiersCreateInput = {
    id?: bigint | number
    uuid?: string
    code_tiers: string
    raison_sociale_tiers: string
    telephone_tiers?: string | null
    email_tiers?: string | null
    entete_facture?: entete_factureCreateNestedManyWithoutTiersInput
  }

  export type tiersUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    code_tiers: string
    raison_sociale_tiers: string
    telephone_tiers?: string | null
    email_tiers?: string | null
    entete_facture?: entete_factureUncheckedCreateNestedManyWithoutTiersInput
  }

  export type tiersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_tiers?: StringFieldUpdateOperationsInput | string
    raison_sociale_tiers?: StringFieldUpdateOperationsInput | string
    telephone_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    email_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    entete_facture?: entete_factureUpdateManyWithoutTiersNestedInput
  }

  export type tiersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_tiers?: StringFieldUpdateOperationsInput | string
    raison_sociale_tiers?: StringFieldUpdateOperationsInput | string
    telephone_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    email_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    entete_facture?: entete_factureUncheckedUpdateManyWithoutTiersNestedInput
  }

  export type tiersCreateManyInput = {
    id?: bigint | number
    uuid?: string
    code_tiers: string
    raison_sociale_tiers: string
    telephone_tiers?: string | null
    email_tiers?: string | null
  }

  export type tiersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_tiers?: StringFieldUpdateOperationsInput | string
    raison_sociale_tiers?: StringFieldUpdateOperationsInput | string
    telephone_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    email_tiers?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tiersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_tiers?: StringFieldUpdateOperationsInput | string
    raison_sociale_tiers?: StringFieldUpdateOperationsInput | string
    telephone_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    email_tiers?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type information_complementaireCreateInput = {
    id?: bigint | number
    uuid?: string
    pied_de_page?: string | null
    nom_commercial?: string | null
    autre_mention?: string | null
    plus_d_information?: string | null
    entete_facture?: entete_factureCreateNestedManyWithoutInformation_complementaireInput
  }

  export type information_complementaireUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    pied_de_page?: string | null
    nom_commercial?: string | null
    autre_mention?: string | null
    plus_d_information?: string | null
    entete_facture?: entete_factureUncheckedCreateNestedManyWithoutInformation_complementaireInput
  }

  export type information_complementaireUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    pied_de_page?: NullableStringFieldUpdateOperationsInput | string | null
    nom_commercial?: NullableStringFieldUpdateOperationsInput | string | null
    autre_mention?: NullableStringFieldUpdateOperationsInput | string | null
    plus_d_information?: NullableStringFieldUpdateOperationsInput | string | null
    entete_facture?: entete_factureUpdateManyWithoutInformation_complementaireNestedInput
  }

  export type information_complementaireUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    pied_de_page?: NullableStringFieldUpdateOperationsInput | string | null
    nom_commercial?: NullableStringFieldUpdateOperationsInput | string | null
    autre_mention?: NullableStringFieldUpdateOperationsInput | string | null
    plus_d_information?: NullableStringFieldUpdateOperationsInput | string | null
    entete_facture?: entete_factureUncheckedUpdateManyWithoutInformation_complementaireNestedInput
  }

  export type information_complementaireCreateManyInput = {
    id?: bigint | number
    uuid?: string
    pied_de_page?: string | null
    nom_commercial?: string | null
    autre_mention?: string | null
    plus_d_information?: string | null
  }

  export type information_complementaireUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    pied_de_page?: NullableStringFieldUpdateOperationsInput | string | null
    nom_commercial?: NullableStringFieldUpdateOperationsInput | string | null
    autre_mention?: NullableStringFieldUpdateOperationsInput | string | null
    plus_d_information?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type information_complementaireUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    pied_de_page?: NullableStringFieldUpdateOperationsInput | string | null
    nom_commercial?: NullableStringFieldUpdateOperationsInput | string | null
    autre_mention?: NullableStringFieldUpdateOperationsInput | string | null
    plus_d_information?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type TiersScalarRelationFilter = {
    is?: tiersWhereInput
    isNot?: tiersWhereInput
  }

  export type Information_complementaireNullableScalarRelationFilter = {
    is?: information_complementaireWhereInput | null
    isNot?: information_complementaireWhereInput | null
  }

  export type Detail_factureListRelationFilter = {
    every?: detail_factureWhereInput
    some?: detail_factureWhereInput
    none?: detail_factureWhereInput
  }

  export type Taxe_piedsListRelationFilter = {
    every?: taxe_piedsWhereInput
    some?: taxe_piedsWhereInput
    none?: taxe_piedsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type detail_factureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type taxe_piedsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entete_factureOrderByRelevanceInput = {
    fields: entete_factureOrderByRelevanceFieldEnum | entete_factureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type entete_factureCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    numero_facture?: SortOrder
    date_facture?: SortOrder
    code_type_facture?: SortOrder
    code_type_facturation?: SortOrder
    code_mode_paiement?: SortOrder
    code_devise?: SortOrder
    total_ht?: SortOrder
    total_tva?: SortOrder
    total_remise?: SortOrder
    total_autre_taxe?: SortOrder
    total_ttc?: SortOrder
    point_vente?: SortOrder
    etablissement?: SortOrder
    certifie?: SortOrder
    retour_ncc?: SortOrder
    retour_id_facture?: SortOrder
    retour_token?: SortOrder
    numero_facture_origine?: SortOrder
    id_tiers?: SortOrder
    id_information_complementaire?: SortOrder
  }

  export type entete_factureAvgOrderByAggregateInput = {
    id?: SortOrder
    total_ht?: SortOrder
    total_tva?: SortOrder
    total_remise?: SortOrder
    total_autre_taxe?: SortOrder
    total_ttc?: SortOrder
    certifie?: SortOrder
    id_tiers?: SortOrder
    id_information_complementaire?: SortOrder
  }

  export type entete_factureMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    numero_facture?: SortOrder
    date_facture?: SortOrder
    code_type_facture?: SortOrder
    code_type_facturation?: SortOrder
    code_mode_paiement?: SortOrder
    code_devise?: SortOrder
    total_ht?: SortOrder
    total_tva?: SortOrder
    total_remise?: SortOrder
    total_autre_taxe?: SortOrder
    total_ttc?: SortOrder
    point_vente?: SortOrder
    etablissement?: SortOrder
    certifie?: SortOrder
    retour_ncc?: SortOrder
    retour_id_facture?: SortOrder
    retour_token?: SortOrder
    numero_facture_origine?: SortOrder
    id_tiers?: SortOrder
    id_information_complementaire?: SortOrder
  }

  export type entete_factureMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    numero_facture?: SortOrder
    date_facture?: SortOrder
    code_type_facture?: SortOrder
    code_type_facturation?: SortOrder
    code_mode_paiement?: SortOrder
    code_devise?: SortOrder
    total_ht?: SortOrder
    total_tva?: SortOrder
    total_remise?: SortOrder
    total_autre_taxe?: SortOrder
    total_ttc?: SortOrder
    point_vente?: SortOrder
    etablissement?: SortOrder
    certifie?: SortOrder
    retour_ncc?: SortOrder
    retour_id_facture?: SortOrder
    retour_token?: SortOrder
    numero_facture_origine?: SortOrder
    id_tiers?: SortOrder
    id_information_complementaire?: SortOrder
  }

  export type entete_factureSumOrderByAggregateInput = {
    id?: SortOrder
    total_ht?: SortOrder
    total_tva?: SortOrder
    total_remise?: SortOrder
    total_autre_taxe?: SortOrder
    total_ttc?: SortOrder
    certifie?: SortOrder
    id_tiers?: SortOrder
    id_information_complementaire?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Entete_factureScalarRelationFilter = {
    is?: entete_factureWhereInput
    isNot?: entete_factureWhereInput
  }

  export type Taxe_detailsListRelationFilter = {
    every?: taxe_detailsWhereInput
    some?: taxe_detailsWhereInput
    none?: taxe_detailsWhereInput
  }

  export type taxe_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type detail_factureOrderByRelevanceInput = {
    fields: detail_factureOrderByRelevanceFieldEnum | detail_factureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type detail_factureCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_entete_facture?: SortOrder
    code_taux_imposition?: SortOrder
    reference_article?: SortOrder
    designation_article?: SortOrder
    quantite?: SortOrder
    unite_vente?: SortOrder
    prix?: SortOrder
    montant_ht?: SortOrder
    remise?: SortOrder
    montant_ttc?: SortOrder
    montant_taux_imposition?: SortOrder
    retour_detail?: SortOrder
    ligne_avoir?: SortOrder
    id_detail_origine_facture?: SortOrder
    montant_remise?: SortOrder
  }

  export type detail_factureAvgOrderByAggregateInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    quantite?: SortOrder
    prix?: SortOrder
    montant_ht?: SortOrder
    remise?: SortOrder
    montant_ttc?: SortOrder
    montant_taux_imposition?: SortOrder
    ligne_avoir?: SortOrder
    id_detail_origine_facture?: SortOrder
    montant_remise?: SortOrder
  }

  export type detail_factureMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_entete_facture?: SortOrder
    code_taux_imposition?: SortOrder
    reference_article?: SortOrder
    designation_article?: SortOrder
    quantite?: SortOrder
    unite_vente?: SortOrder
    prix?: SortOrder
    montant_ht?: SortOrder
    remise?: SortOrder
    montant_ttc?: SortOrder
    montant_taux_imposition?: SortOrder
    retour_detail?: SortOrder
    ligne_avoir?: SortOrder
    id_detail_origine_facture?: SortOrder
    montant_remise?: SortOrder
  }

  export type detail_factureMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    id_entete_facture?: SortOrder
    code_taux_imposition?: SortOrder
    reference_article?: SortOrder
    designation_article?: SortOrder
    quantite?: SortOrder
    unite_vente?: SortOrder
    prix?: SortOrder
    montant_ht?: SortOrder
    remise?: SortOrder
    montant_ttc?: SortOrder
    montant_taux_imposition?: SortOrder
    retour_detail?: SortOrder
    ligne_avoir?: SortOrder
    id_detail_origine_facture?: SortOrder
    montant_remise?: SortOrder
  }

  export type detail_factureSumOrderByAggregateInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    quantite?: SortOrder
    prix?: SortOrder
    montant_ht?: SortOrder
    remise?: SortOrder
    montant_ttc?: SortOrder
    montant_taux_imposition?: SortOrder
    ligne_avoir?: SortOrder
    id_detail_origine_facture?: SortOrder
    montant_remise?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Detail_factureScalarRelationFilter = {
    is?: detail_factureWhereInput
    isNot?: detail_factureWhereInput
  }

  export type taxe_detailsOrderByRelevanceInput = {
    fields: taxe_detailsOrderByRelevanceFieldEnum | taxe_detailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type taxe_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    id_detail_facture?: SortOrder
    libelle_taxe_details?: SortOrder
    taux_taxe_details?: SortOrder
    montant_taxe_details?: SortOrder
  }

  export type taxe_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_detail_facture?: SortOrder
    taux_taxe_details?: SortOrder
    montant_taxe_details?: SortOrder
  }

  export type taxe_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_detail_facture?: SortOrder
    libelle_taxe_details?: SortOrder
    taux_taxe_details?: SortOrder
    montant_taxe_details?: SortOrder
  }

  export type taxe_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    id_detail_facture?: SortOrder
    libelle_taxe_details?: SortOrder
    taux_taxe_details?: SortOrder
    montant_taxe_details?: SortOrder
  }

  export type taxe_detailsSumOrderByAggregateInput = {
    id?: SortOrder
    id_detail_facture?: SortOrder
    taux_taxe_details?: SortOrder
    montant_taxe_details?: SortOrder
  }

  export type taxe_piedsOrderByRelevanceInput = {
    fields: taxe_piedsOrderByRelevanceFieldEnum | taxe_piedsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type taxe_piedsCountOrderByAggregateInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    libelle_taxe_pieds?: SortOrder
    taux_taxe_pieds?: SortOrder
    montant_taxe_pieds?: SortOrder
  }

  export type taxe_piedsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    taux_taxe_pieds?: SortOrder
    montant_taxe_pieds?: SortOrder
  }

  export type taxe_piedsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    libelle_taxe_pieds?: SortOrder
    taux_taxe_pieds?: SortOrder
    montant_taxe_pieds?: SortOrder
  }

  export type taxe_piedsMinOrderByAggregateInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    libelle_taxe_pieds?: SortOrder
    taux_taxe_pieds?: SortOrder
    montant_taxe_pieds?: SortOrder
  }

  export type taxe_piedsSumOrderByAggregateInput = {
    id?: SortOrder
    id_entete_facture?: SortOrder
    taux_taxe_pieds?: SortOrder
    montant_taxe_pieds?: SortOrder
  }

  export type Entete_factureListRelationFilter = {
    every?: entete_factureWhereInput
    some?: entete_factureWhereInput
    none?: entete_factureWhereInput
  }

  export type entete_factureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tiersOrderByRelevanceInput = {
    fields: tiersOrderByRelevanceFieldEnum | tiersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tiersCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_tiers?: SortOrder
    raison_sociale_tiers?: SortOrder
    telephone_tiers?: SortOrder
    email_tiers?: SortOrder
  }

  export type tiersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tiersMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_tiers?: SortOrder
    raison_sociale_tiers?: SortOrder
    telephone_tiers?: SortOrder
    email_tiers?: SortOrder
  }

  export type tiersMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_tiers?: SortOrder
    raison_sociale_tiers?: SortOrder
    telephone_tiers?: SortOrder
    email_tiers?: SortOrder
  }

  export type tiersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type information_complementaireOrderByRelevanceInput = {
    fields: information_complementaireOrderByRelevanceFieldEnum | information_complementaireOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type information_complementaireCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    pied_de_page?: SortOrder
    nom_commercial?: SortOrder
    autre_mention?: SortOrder
    plus_d_information?: SortOrder
  }

  export type information_complementaireAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type information_complementaireMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    pied_de_page?: SortOrder
    nom_commercial?: SortOrder
    autre_mention?: SortOrder
    plus_d_information?: SortOrder
  }

  export type information_complementaireMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    pied_de_page?: SortOrder
    nom_commercial?: SortOrder
    autre_mention?: SortOrder
    plus_d_information?: SortOrder
  }

  export type information_complementaireSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tiersCreateNestedOneWithoutEntete_factureInput = {
    create?: XOR<tiersCreateWithoutEntete_factureInput, tiersUncheckedCreateWithoutEntete_factureInput>
    connectOrCreate?: tiersCreateOrConnectWithoutEntete_factureInput
    connect?: tiersWhereUniqueInput
  }

  export type information_complementaireCreateNestedOneWithoutEntete_factureInput = {
    create?: XOR<information_complementaireCreateWithoutEntete_factureInput, information_complementaireUncheckedCreateWithoutEntete_factureInput>
    connectOrCreate?: information_complementaireCreateOrConnectWithoutEntete_factureInput
    connect?: information_complementaireWhereUniqueInput
  }

  export type detail_factureCreateNestedManyWithoutEntete_factureInput = {
    create?: XOR<detail_factureCreateWithoutEntete_factureInput, detail_factureUncheckedCreateWithoutEntete_factureInput> | detail_factureCreateWithoutEntete_factureInput[] | detail_factureUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: detail_factureCreateOrConnectWithoutEntete_factureInput | detail_factureCreateOrConnectWithoutEntete_factureInput[]
    createMany?: detail_factureCreateManyEntete_factureInputEnvelope
    connect?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
  }

  export type taxe_piedsCreateNestedManyWithoutEntete_factureInput = {
    create?: XOR<taxe_piedsCreateWithoutEntete_factureInput, taxe_piedsUncheckedCreateWithoutEntete_factureInput> | taxe_piedsCreateWithoutEntete_factureInput[] | taxe_piedsUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: taxe_piedsCreateOrConnectWithoutEntete_factureInput | taxe_piedsCreateOrConnectWithoutEntete_factureInput[]
    createMany?: taxe_piedsCreateManyEntete_factureInputEnvelope
    connect?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
  }

  export type detail_factureUncheckedCreateNestedManyWithoutEntete_factureInput = {
    create?: XOR<detail_factureCreateWithoutEntete_factureInput, detail_factureUncheckedCreateWithoutEntete_factureInput> | detail_factureCreateWithoutEntete_factureInput[] | detail_factureUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: detail_factureCreateOrConnectWithoutEntete_factureInput | detail_factureCreateOrConnectWithoutEntete_factureInput[]
    createMany?: detail_factureCreateManyEntete_factureInputEnvelope
    connect?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
  }

  export type taxe_piedsUncheckedCreateNestedManyWithoutEntete_factureInput = {
    create?: XOR<taxe_piedsCreateWithoutEntete_factureInput, taxe_piedsUncheckedCreateWithoutEntete_factureInput> | taxe_piedsCreateWithoutEntete_factureInput[] | taxe_piedsUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: taxe_piedsCreateOrConnectWithoutEntete_factureInput | taxe_piedsCreateOrConnectWithoutEntete_factureInput[]
    createMany?: taxe_piedsCreateManyEntete_factureInputEnvelope
    connect?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tiersUpdateOneRequiredWithoutEntete_factureNestedInput = {
    create?: XOR<tiersCreateWithoutEntete_factureInput, tiersUncheckedCreateWithoutEntete_factureInput>
    connectOrCreate?: tiersCreateOrConnectWithoutEntete_factureInput
    upsert?: tiersUpsertWithoutEntete_factureInput
    connect?: tiersWhereUniqueInput
    update?: XOR<XOR<tiersUpdateToOneWithWhereWithoutEntete_factureInput, tiersUpdateWithoutEntete_factureInput>, tiersUncheckedUpdateWithoutEntete_factureInput>
  }

  export type information_complementaireUpdateOneWithoutEntete_factureNestedInput = {
    create?: XOR<information_complementaireCreateWithoutEntete_factureInput, information_complementaireUncheckedCreateWithoutEntete_factureInput>
    connectOrCreate?: information_complementaireCreateOrConnectWithoutEntete_factureInput
    upsert?: information_complementaireUpsertWithoutEntete_factureInput
    disconnect?: information_complementaireWhereInput | boolean
    delete?: information_complementaireWhereInput | boolean
    connect?: information_complementaireWhereUniqueInput
    update?: XOR<XOR<information_complementaireUpdateToOneWithWhereWithoutEntete_factureInput, information_complementaireUpdateWithoutEntete_factureInput>, information_complementaireUncheckedUpdateWithoutEntete_factureInput>
  }

  export type detail_factureUpdateManyWithoutEntete_factureNestedInput = {
    create?: XOR<detail_factureCreateWithoutEntete_factureInput, detail_factureUncheckedCreateWithoutEntete_factureInput> | detail_factureCreateWithoutEntete_factureInput[] | detail_factureUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: detail_factureCreateOrConnectWithoutEntete_factureInput | detail_factureCreateOrConnectWithoutEntete_factureInput[]
    upsert?: detail_factureUpsertWithWhereUniqueWithoutEntete_factureInput | detail_factureUpsertWithWhereUniqueWithoutEntete_factureInput[]
    createMany?: detail_factureCreateManyEntete_factureInputEnvelope
    set?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    disconnect?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    delete?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    connect?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    update?: detail_factureUpdateWithWhereUniqueWithoutEntete_factureInput | detail_factureUpdateWithWhereUniqueWithoutEntete_factureInput[]
    updateMany?: detail_factureUpdateManyWithWhereWithoutEntete_factureInput | detail_factureUpdateManyWithWhereWithoutEntete_factureInput[]
    deleteMany?: detail_factureScalarWhereInput | detail_factureScalarWhereInput[]
  }

  export type taxe_piedsUpdateManyWithoutEntete_factureNestedInput = {
    create?: XOR<taxe_piedsCreateWithoutEntete_factureInput, taxe_piedsUncheckedCreateWithoutEntete_factureInput> | taxe_piedsCreateWithoutEntete_factureInput[] | taxe_piedsUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: taxe_piedsCreateOrConnectWithoutEntete_factureInput | taxe_piedsCreateOrConnectWithoutEntete_factureInput[]
    upsert?: taxe_piedsUpsertWithWhereUniqueWithoutEntete_factureInput | taxe_piedsUpsertWithWhereUniqueWithoutEntete_factureInput[]
    createMany?: taxe_piedsCreateManyEntete_factureInputEnvelope
    set?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    disconnect?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    delete?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    connect?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    update?: taxe_piedsUpdateWithWhereUniqueWithoutEntete_factureInput | taxe_piedsUpdateWithWhereUniqueWithoutEntete_factureInput[]
    updateMany?: taxe_piedsUpdateManyWithWhereWithoutEntete_factureInput | taxe_piedsUpdateManyWithWhereWithoutEntete_factureInput[]
    deleteMany?: taxe_piedsScalarWhereInput | taxe_piedsScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type detail_factureUncheckedUpdateManyWithoutEntete_factureNestedInput = {
    create?: XOR<detail_factureCreateWithoutEntete_factureInput, detail_factureUncheckedCreateWithoutEntete_factureInput> | detail_factureCreateWithoutEntete_factureInput[] | detail_factureUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: detail_factureCreateOrConnectWithoutEntete_factureInput | detail_factureCreateOrConnectWithoutEntete_factureInput[]
    upsert?: detail_factureUpsertWithWhereUniqueWithoutEntete_factureInput | detail_factureUpsertWithWhereUniqueWithoutEntete_factureInput[]
    createMany?: detail_factureCreateManyEntete_factureInputEnvelope
    set?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    disconnect?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    delete?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    connect?: detail_factureWhereUniqueInput | detail_factureWhereUniqueInput[]
    update?: detail_factureUpdateWithWhereUniqueWithoutEntete_factureInput | detail_factureUpdateWithWhereUniqueWithoutEntete_factureInput[]
    updateMany?: detail_factureUpdateManyWithWhereWithoutEntete_factureInput | detail_factureUpdateManyWithWhereWithoutEntete_factureInput[]
    deleteMany?: detail_factureScalarWhereInput | detail_factureScalarWhereInput[]
  }

  export type taxe_piedsUncheckedUpdateManyWithoutEntete_factureNestedInput = {
    create?: XOR<taxe_piedsCreateWithoutEntete_factureInput, taxe_piedsUncheckedCreateWithoutEntete_factureInput> | taxe_piedsCreateWithoutEntete_factureInput[] | taxe_piedsUncheckedCreateWithoutEntete_factureInput[]
    connectOrCreate?: taxe_piedsCreateOrConnectWithoutEntete_factureInput | taxe_piedsCreateOrConnectWithoutEntete_factureInput[]
    upsert?: taxe_piedsUpsertWithWhereUniqueWithoutEntete_factureInput | taxe_piedsUpsertWithWhereUniqueWithoutEntete_factureInput[]
    createMany?: taxe_piedsCreateManyEntete_factureInputEnvelope
    set?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    disconnect?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    delete?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    connect?: taxe_piedsWhereUniqueInput | taxe_piedsWhereUniqueInput[]
    update?: taxe_piedsUpdateWithWhereUniqueWithoutEntete_factureInput | taxe_piedsUpdateWithWhereUniqueWithoutEntete_factureInput[]
    updateMany?: taxe_piedsUpdateManyWithWhereWithoutEntete_factureInput | taxe_piedsUpdateManyWithWhereWithoutEntete_factureInput[]
    deleteMany?: taxe_piedsScalarWhereInput | taxe_piedsScalarWhereInput[]
  }

  export type entete_factureCreateNestedOneWithoutDetail_factureInput = {
    create?: XOR<entete_factureCreateWithoutDetail_factureInput, entete_factureUncheckedCreateWithoutDetail_factureInput>
    connectOrCreate?: entete_factureCreateOrConnectWithoutDetail_factureInput
    connect?: entete_factureWhereUniqueInput
  }

  export type taxe_detailsCreateNestedManyWithoutDetail_factureInput = {
    create?: XOR<taxe_detailsCreateWithoutDetail_factureInput, taxe_detailsUncheckedCreateWithoutDetail_factureInput> | taxe_detailsCreateWithoutDetail_factureInput[] | taxe_detailsUncheckedCreateWithoutDetail_factureInput[]
    connectOrCreate?: taxe_detailsCreateOrConnectWithoutDetail_factureInput | taxe_detailsCreateOrConnectWithoutDetail_factureInput[]
    createMany?: taxe_detailsCreateManyDetail_factureInputEnvelope
    connect?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
  }

  export type taxe_detailsUncheckedCreateNestedManyWithoutDetail_factureInput = {
    create?: XOR<taxe_detailsCreateWithoutDetail_factureInput, taxe_detailsUncheckedCreateWithoutDetail_factureInput> | taxe_detailsCreateWithoutDetail_factureInput[] | taxe_detailsUncheckedCreateWithoutDetail_factureInput[]
    connectOrCreate?: taxe_detailsCreateOrConnectWithoutDetail_factureInput | taxe_detailsCreateOrConnectWithoutDetail_factureInput[]
    createMany?: taxe_detailsCreateManyDetail_factureInputEnvelope
    connect?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type entete_factureUpdateOneRequiredWithoutDetail_factureNestedInput = {
    create?: XOR<entete_factureCreateWithoutDetail_factureInput, entete_factureUncheckedCreateWithoutDetail_factureInput>
    connectOrCreate?: entete_factureCreateOrConnectWithoutDetail_factureInput
    upsert?: entete_factureUpsertWithoutDetail_factureInput
    connect?: entete_factureWhereUniqueInput
    update?: XOR<XOR<entete_factureUpdateToOneWithWhereWithoutDetail_factureInput, entete_factureUpdateWithoutDetail_factureInput>, entete_factureUncheckedUpdateWithoutDetail_factureInput>
  }

  export type taxe_detailsUpdateManyWithoutDetail_factureNestedInput = {
    create?: XOR<taxe_detailsCreateWithoutDetail_factureInput, taxe_detailsUncheckedCreateWithoutDetail_factureInput> | taxe_detailsCreateWithoutDetail_factureInput[] | taxe_detailsUncheckedCreateWithoutDetail_factureInput[]
    connectOrCreate?: taxe_detailsCreateOrConnectWithoutDetail_factureInput | taxe_detailsCreateOrConnectWithoutDetail_factureInput[]
    upsert?: taxe_detailsUpsertWithWhereUniqueWithoutDetail_factureInput | taxe_detailsUpsertWithWhereUniqueWithoutDetail_factureInput[]
    createMany?: taxe_detailsCreateManyDetail_factureInputEnvelope
    set?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    disconnect?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    delete?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    connect?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    update?: taxe_detailsUpdateWithWhereUniqueWithoutDetail_factureInput | taxe_detailsUpdateWithWhereUniqueWithoutDetail_factureInput[]
    updateMany?: taxe_detailsUpdateManyWithWhereWithoutDetail_factureInput | taxe_detailsUpdateManyWithWhereWithoutDetail_factureInput[]
    deleteMany?: taxe_detailsScalarWhereInput | taxe_detailsScalarWhereInput[]
  }

  export type taxe_detailsUncheckedUpdateManyWithoutDetail_factureNestedInput = {
    create?: XOR<taxe_detailsCreateWithoutDetail_factureInput, taxe_detailsUncheckedCreateWithoutDetail_factureInput> | taxe_detailsCreateWithoutDetail_factureInput[] | taxe_detailsUncheckedCreateWithoutDetail_factureInput[]
    connectOrCreate?: taxe_detailsCreateOrConnectWithoutDetail_factureInput | taxe_detailsCreateOrConnectWithoutDetail_factureInput[]
    upsert?: taxe_detailsUpsertWithWhereUniqueWithoutDetail_factureInput | taxe_detailsUpsertWithWhereUniqueWithoutDetail_factureInput[]
    createMany?: taxe_detailsCreateManyDetail_factureInputEnvelope
    set?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    disconnect?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    delete?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    connect?: taxe_detailsWhereUniqueInput | taxe_detailsWhereUniqueInput[]
    update?: taxe_detailsUpdateWithWhereUniqueWithoutDetail_factureInput | taxe_detailsUpdateWithWhereUniqueWithoutDetail_factureInput[]
    updateMany?: taxe_detailsUpdateManyWithWhereWithoutDetail_factureInput | taxe_detailsUpdateManyWithWhereWithoutDetail_factureInput[]
    deleteMany?: taxe_detailsScalarWhereInput | taxe_detailsScalarWhereInput[]
  }

  export type detail_factureCreateNestedOneWithoutTaxe_detailsInput = {
    create?: XOR<detail_factureCreateWithoutTaxe_detailsInput, detail_factureUncheckedCreateWithoutTaxe_detailsInput>
    connectOrCreate?: detail_factureCreateOrConnectWithoutTaxe_detailsInput
    connect?: detail_factureWhereUniqueInput
  }

  export type detail_factureUpdateOneRequiredWithoutTaxe_detailsNestedInput = {
    create?: XOR<detail_factureCreateWithoutTaxe_detailsInput, detail_factureUncheckedCreateWithoutTaxe_detailsInput>
    connectOrCreate?: detail_factureCreateOrConnectWithoutTaxe_detailsInput
    upsert?: detail_factureUpsertWithoutTaxe_detailsInput
    connect?: detail_factureWhereUniqueInput
    update?: XOR<XOR<detail_factureUpdateToOneWithWhereWithoutTaxe_detailsInput, detail_factureUpdateWithoutTaxe_detailsInput>, detail_factureUncheckedUpdateWithoutTaxe_detailsInput>
  }

  export type entete_factureCreateNestedOneWithoutTaxe_piedsInput = {
    create?: XOR<entete_factureCreateWithoutTaxe_piedsInput, entete_factureUncheckedCreateWithoutTaxe_piedsInput>
    connectOrCreate?: entete_factureCreateOrConnectWithoutTaxe_piedsInput
    connect?: entete_factureWhereUniqueInput
  }

  export type entete_factureUpdateOneRequiredWithoutTaxe_piedsNestedInput = {
    create?: XOR<entete_factureCreateWithoutTaxe_piedsInput, entete_factureUncheckedCreateWithoutTaxe_piedsInput>
    connectOrCreate?: entete_factureCreateOrConnectWithoutTaxe_piedsInput
    upsert?: entete_factureUpsertWithoutTaxe_piedsInput
    connect?: entete_factureWhereUniqueInput
    update?: XOR<XOR<entete_factureUpdateToOneWithWhereWithoutTaxe_piedsInput, entete_factureUpdateWithoutTaxe_piedsInput>, entete_factureUncheckedUpdateWithoutTaxe_piedsInput>
  }

  export type entete_factureCreateNestedManyWithoutTiersInput = {
    create?: XOR<entete_factureCreateWithoutTiersInput, entete_factureUncheckedCreateWithoutTiersInput> | entete_factureCreateWithoutTiersInput[] | entete_factureUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutTiersInput | entete_factureCreateOrConnectWithoutTiersInput[]
    createMany?: entete_factureCreateManyTiersInputEnvelope
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
  }

  export type entete_factureUncheckedCreateNestedManyWithoutTiersInput = {
    create?: XOR<entete_factureCreateWithoutTiersInput, entete_factureUncheckedCreateWithoutTiersInput> | entete_factureCreateWithoutTiersInput[] | entete_factureUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutTiersInput | entete_factureCreateOrConnectWithoutTiersInput[]
    createMany?: entete_factureCreateManyTiersInputEnvelope
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
  }

  export type entete_factureUpdateManyWithoutTiersNestedInput = {
    create?: XOR<entete_factureCreateWithoutTiersInput, entete_factureUncheckedCreateWithoutTiersInput> | entete_factureCreateWithoutTiersInput[] | entete_factureUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutTiersInput | entete_factureCreateOrConnectWithoutTiersInput[]
    upsert?: entete_factureUpsertWithWhereUniqueWithoutTiersInput | entete_factureUpsertWithWhereUniqueWithoutTiersInput[]
    createMany?: entete_factureCreateManyTiersInputEnvelope
    set?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    disconnect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    delete?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    update?: entete_factureUpdateWithWhereUniqueWithoutTiersInput | entete_factureUpdateWithWhereUniqueWithoutTiersInput[]
    updateMany?: entete_factureUpdateManyWithWhereWithoutTiersInput | entete_factureUpdateManyWithWhereWithoutTiersInput[]
    deleteMany?: entete_factureScalarWhereInput | entete_factureScalarWhereInput[]
  }

  export type entete_factureUncheckedUpdateManyWithoutTiersNestedInput = {
    create?: XOR<entete_factureCreateWithoutTiersInput, entete_factureUncheckedCreateWithoutTiersInput> | entete_factureCreateWithoutTiersInput[] | entete_factureUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutTiersInput | entete_factureCreateOrConnectWithoutTiersInput[]
    upsert?: entete_factureUpsertWithWhereUniqueWithoutTiersInput | entete_factureUpsertWithWhereUniqueWithoutTiersInput[]
    createMany?: entete_factureCreateManyTiersInputEnvelope
    set?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    disconnect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    delete?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    update?: entete_factureUpdateWithWhereUniqueWithoutTiersInput | entete_factureUpdateWithWhereUniqueWithoutTiersInput[]
    updateMany?: entete_factureUpdateManyWithWhereWithoutTiersInput | entete_factureUpdateManyWithWhereWithoutTiersInput[]
    deleteMany?: entete_factureScalarWhereInput | entete_factureScalarWhereInput[]
  }

  export type entete_factureCreateNestedManyWithoutInformation_complementaireInput = {
    create?: XOR<entete_factureCreateWithoutInformation_complementaireInput, entete_factureUncheckedCreateWithoutInformation_complementaireInput> | entete_factureCreateWithoutInformation_complementaireInput[] | entete_factureUncheckedCreateWithoutInformation_complementaireInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutInformation_complementaireInput | entete_factureCreateOrConnectWithoutInformation_complementaireInput[]
    createMany?: entete_factureCreateManyInformation_complementaireInputEnvelope
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
  }

  export type entete_factureUncheckedCreateNestedManyWithoutInformation_complementaireInput = {
    create?: XOR<entete_factureCreateWithoutInformation_complementaireInput, entete_factureUncheckedCreateWithoutInformation_complementaireInput> | entete_factureCreateWithoutInformation_complementaireInput[] | entete_factureUncheckedCreateWithoutInformation_complementaireInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutInformation_complementaireInput | entete_factureCreateOrConnectWithoutInformation_complementaireInput[]
    createMany?: entete_factureCreateManyInformation_complementaireInputEnvelope
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
  }

  export type entete_factureUpdateManyWithoutInformation_complementaireNestedInput = {
    create?: XOR<entete_factureCreateWithoutInformation_complementaireInput, entete_factureUncheckedCreateWithoutInformation_complementaireInput> | entete_factureCreateWithoutInformation_complementaireInput[] | entete_factureUncheckedCreateWithoutInformation_complementaireInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutInformation_complementaireInput | entete_factureCreateOrConnectWithoutInformation_complementaireInput[]
    upsert?: entete_factureUpsertWithWhereUniqueWithoutInformation_complementaireInput | entete_factureUpsertWithWhereUniqueWithoutInformation_complementaireInput[]
    createMany?: entete_factureCreateManyInformation_complementaireInputEnvelope
    set?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    disconnect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    delete?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    update?: entete_factureUpdateWithWhereUniqueWithoutInformation_complementaireInput | entete_factureUpdateWithWhereUniqueWithoutInformation_complementaireInput[]
    updateMany?: entete_factureUpdateManyWithWhereWithoutInformation_complementaireInput | entete_factureUpdateManyWithWhereWithoutInformation_complementaireInput[]
    deleteMany?: entete_factureScalarWhereInput | entete_factureScalarWhereInput[]
  }

  export type entete_factureUncheckedUpdateManyWithoutInformation_complementaireNestedInput = {
    create?: XOR<entete_factureCreateWithoutInformation_complementaireInput, entete_factureUncheckedCreateWithoutInformation_complementaireInput> | entete_factureCreateWithoutInformation_complementaireInput[] | entete_factureUncheckedCreateWithoutInformation_complementaireInput[]
    connectOrCreate?: entete_factureCreateOrConnectWithoutInformation_complementaireInput | entete_factureCreateOrConnectWithoutInformation_complementaireInput[]
    upsert?: entete_factureUpsertWithWhereUniqueWithoutInformation_complementaireInput | entete_factureUpsertWithWhereUniqueWithoutInformation_complementaireInput[]
    createMany?: entete_factureCreateManyInformation_complementaireInputEnvelope
    set?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    disconnect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    delete?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    connect?: entete_factureWhereUniqueInput | entete_factureWhereUniqueInput[]
    update?: entete_factureUpdateWithWhereUniqueWithoutInformation_complementaireInput | entete_factureUpdateWithWhereUniqueWithoutInformation_complementaireInput[]
    updateMany?: entete_factureUpdateManyWithWhereWithoutInformation_complementaireInput | entete_factureUpdateManyWithWhereWithoutInformation_complementaireInput[]
    deleteMany?: entete_factureScalarWhereInput | entete_factureScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tiersCreateWithoutEntete_factureInput = {
    id?: bigint | number
    uuid?: string
    code_tiers: string
    raison_sociale_tiers: string
    telephone_tiers?: string | null
    email_tiers?: string | null
  }

  export type tiersUncheckedCreateWithoutEntete_factureInput = {
    id?: bigint | number
    uuid?: string
    code_tiers: string
    raison_sociale_tiers: string
    telephone_tiers?: string | null
    email_tiers?: string | null
  }

  export type tiersCreateOrConnectWithoutEntete_factureInput = {
    where: tiersWhereUniqueInput
    create: XOR<tiersCreateWithoutEntete_factureInput, tiersUncheckedCreateWithoutEntete_factureInput>
  }

  export type information_complementaireCreateWithoutEntete_factureInput = {
    id?: bigint | number
    uuid?: string
    pied_de_page?: string | null
    nom_commercial?: string | null
    autre_mention?: string | null
    plus_d_information?: string | null
  }

  export type information_complementaireUncheckedCreateWithoutEntete_factureInput = {
    id?: bigint | number
    uuid?: string
    pied_de_page?: string | null
    nom_commercial?: string | null
    autre_mention?: string | null
    plus_d_information?: string | null
  }

  export type information_complementaireCreateOrConnectWithoutEntete_factureInput = {
    where: information_complementaireWhereUniqueInput
    create: XOR<information_complementaireCreateWithoutEntete_factureInput, information_complementaireUncheckedCreateWithoutEntete_factureInput>
  }

  export type detail_factureCreateWithoutEntete_factureInput = {
    id?: bigint | number
    uuid?: string
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
    taxe_details?: taxe_detailsCreateNestedManyWithoutDetail_factureInput
  }

  export type detail_factureUncheckedCreateWithoutEntete_factureInput = {
    id?: bigint | number
    uuid?: string
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
    taxe_details?: taxe_detailsUncheckedCreateNestedManyWithoutDetail_factureInput
  }

  export type detail_factureCreateOrConnectWithoutEntete_factureInput = {
    where: detail_factureWhereUniqueInput
    create: XOR<detail_factureCreateWithoutEntete_factureInput, detail_factureUncheckedCreateWithoutEntete_factureInput>
  }

  export type detail_factureCreateManyEntete_factureInputEnvelope = {
    data: detail_factureCreateManyEntete_factureInput | detail_factureCreateManyEntete_factureInput[]
    skipDuplicates?: boolean
  }

  export type taxe_piedsCreateWithoutEntete_factureInput = {
    id?: bigint | number
    libelle_taxe_pieds?: string | null
    taux_taxe_pieds: number
    montant_taxe_pieds: Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUncheckedCreateWithoutEntete_factureInput = {
    id?: bigint | number
    libelle_taxe_pieds?: string | null
    taux_taxe_pieds: number
    montant_taxe_pieds: Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsCreateOrConnectWithoutEntete_factureInput = {
    where: taxe_piedsWhereUniqueInput
    create: XOR<taxe_piedsCreateWithoutEntete_factureInput, taxe_piedsUncheckedCreateWithoutEntete_factureInput>
  }

  export type taxe_piedsCreateManyEntete_factureInputEnvelope = {
    data: taxe_piedsCreateManyEntete_factureInput | taxe_piedsCreateManyEntete_factureInput[]
    skipDuplicates?: boolean
  }

  export type tiersUpsertWithoutEntete_factureInput = {
    update: XOR<tiersUpdateWithoutEntete_factureInput, tiersUncheckedUpdateWithoutEntete_factureInput>
    create: XOR<tiersCreateWithoutEntete_factureInput, tiersUncheckedCreateWithoutEntete_factureInput>
    where?: tiersWhereInput
  }

  export type tiersUpdateToOneWithWhereWithoutEntete_factureInput = {
    where?: tiersWhereInput
    data: XOR<tiersUpdateWithoutEntete_factureInput, tiersUncheckedUpdateWithoutEntete_factureInput>
  }

  export type tiersUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_tiers?: StringFieldUpdateOperationsInput | string
    raison_sociale_tiers?: StringFieldUpdateOperationsInput | string
    telephone_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    email_tiers?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tiersUncheckedUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_tiers?: StringFieldUpdateOperationsInput | string
    raison_sociale_tiers?: StringFieldUpdateOperationsInput | string
    telephone_tiers?: NullableStringFieldUpdateOperationsInput | string | null
    email_tiers?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type information_complementaireUpsertWithoutEntete_factureInput = {
    update: XOR<information_complementaireUpdateWithoutEntete_factureInput, information_complementaireUncheckedUpdateWithoutEntete_factureInput>
    create: XOR<information_complementaireCreateWithoutEntete_factureInput, information_complementaireUncheckedCreateWithoutEntete_factureInput>
    where?: information_complementaireWhereInput
  }

  export type information_complementaireUpdateToOneWithWhereWithoutEntete_factureInput = {
    where?: information_complementaireWhereInput
    data: XOR<information_complementaireUpdateWithoutEntete_factureInput, information_complementaireUncheckedUpdateWithoutEntete_factureInput>
  }

  export type information_complementaireUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    pied_de_page?: NullableStringFieldUpdateOperationsInput | string | null
    nom_commercial?: NullableStringFieldUpdateOperationsInput | string | null
    autre_mention?: NullableStringFieldUpdateOperationsInput | string | null
    plus_d_information?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type information_complementaireUncheckedUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    pied_de_page?: NullableStringFieldUpdateOperationsInput | string | null
    nom_commercial?: NullableStringFieldUpdateOperationsInput | string | null
    autre_mention?: NullableStringFieldUpdateOperationsInput | string | null
    plus_d_information?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_factureUpsertWithWhereUniqueWithoutEntete_factureInput = {
    where: detail_factureWhereUniqueInput
    update: XOR<detail_factureUpdateWithoutEntete_factureInput, detail_factureUncheckedUpdateWithoutEntete_factureInput>
    create: XOR<detail_factureCreateWithoutEntete_factureInput, detail_factureUncheckedCreateWithoutEntete_factureInput>
  }

  export type detail_factureUpdateWithWhereUniqueWithoutEntete_factureInput = {
    where: detail_factureWhereUniqueInput
    data: XOR<detail_factureUpdateWithoutEntete_factureInput, detail_factureUncheckedUpdateWithoutEntete_factureInput>
  }

  export type detail_factureUpdateManyWithWhereWithoutEntete_factureInput = {
    where: detail_factureScalarWhereInput
    data: XOR<detail_factureUpdateManyMutationInput, detail_factureUncheckedUpdateManyWithoutEntete_factureInput>
  }

  export type detail_factureScalarWhereInput = {
    AND?: detail_factureScalarWhereInput | detail_factureScalarWhereInput[]
    OR?: detail_factureScalarWhereInput[]
    NOT?: detail_factureScalarWhereInput | detail_factureScalarWhereInput[]
    id?: BigIntFilter<"detail_facture"> | bigint | number
    uuid?: StringFilter<"detail_facture"> | string
    id_entete_facture?: BigIntFilter<"detail_facture"> | bigint | number
    code_taux_imposition?: StringFilter<"detail_facture"> | string
    reference_article?: StringNullableFilter<"detail_facture"> | string | null
    designation_article?: StringNullableFilter<"detail_facture"> | string | null
    quantite?: FloatFilter<"detail_facture"> | number
    unite_vente?: StringFilter<"detail_facture"> | string
    prix?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    remise?: FloatFilter<"detail_facture"> | number
    montant_ttc?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFilter<"detail_facture"> | string
    ligne_avoir?: IntFilter<"detail_facture"> | number
    id_detail_origine_facture?: BigIntFilter<"detail_facture"> | bigint | number
    montant_remise?: DecimalFilter<"detail_facture"> | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUpsertWithWhereUniqueWithoutEntete_factureInput = {
    where: taxe_piedsWhereUniqueInput
    update: XOR<taxe_piedsUpdateWithoutEntete_factureInput, taxe_piedsUncheckedUpdateWithoutEntete_factureInput>
    create: XOR<taxe_piedsCreateWithoutEntete_factureInput, taxe_piedsUncheckedCreateWithoutEntete_factureInput>
  }

  export type taxe_piedsUpdateWithWhereUniqueWithoutEntete_factureInput = {
    where: taxe_piedsWhereUniqueInput
    data: XOR<taxe_piedsUpdateWithoutEntete_factureInput, taxe_piedsUncheckedUpdateWithoutEntete_factureInput>
  }

  export type taxe_piedsUpdateManyWithWhereWithoutEntete_factureInput = {
    where: taxe_piedsScalarWhereInput
    data: XOR<taxe_piedsUpdateManyMutationInput, taxe_piedsUncheckedUpdateManyWithoutEntete_factureInput>
  }

  export type taxe_piedsScalarWhereInput = {
    AND?: taxe_piedsScalarWhereInput | taxe_piedsScalarWhereInput[]
    OR?: taxe_piedsScalarWhereInput[]
    NOT?: taxe_piedsScalarWhereInput | taxe_piedsScalarWhereInput[]
    id?: BigIntFilter<"taxe_pieds"> | bigint | number
    id_entete_facture?: BigIntFilter<"taxe_pieds"> | bigint | number
    libelle_taxe_pieds?: StringNullableFilter<"taxe_pieds"> | string | null
    taux_taxe_pieds?: FloatFilter<"taxe_pieds"> | number
    montant_taxe_pieds?: DecimalFilter<"taxe_pieds"> | Decimal | DecimalJsLike | number | string
  }

  export type entete_factureCreateWithoutDetail_factureInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    tiers: tiersCreateNestedOneWithoutEntete_factureInput
    information_complementaire?: information_complementaireCreateNestedOneWithoutEntete_factureInput
    taxe_pieds?: taxe_piedsCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureUncheckedCreateWithoutDetail_factureInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_tiers: bigint | number
    id_information_complementaire?: bigint | number | null
    taxe_pieds?: taxe_piedsUncheckedCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureCreateOrConnectWithoutDetail_factureInput = {
    where: entete_factureWhereUniqueInput
    create: XOR<entete_factureCreateWithoutDetail_factureInput, entete_factureUncheckedCreateWithoutDetail_factureInput>
  }

  export type taxe_detailsCreateWithoutDetail_factureInput = {
    id?: bigint | number
    libelle_taxe_details?: string | null
    taux_taxe_details: number
    montant_taxe_details: Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsUncheckedCreateWithoutDetail_factureInput = {
    id?: bigint | number
    libelle_taxe_details?: string | null
    taux_taxe_details: number
    montant_taxe_details: Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsCreateOrConnectWithoutDetail_factureInput = {
    where: taxe_detailsWhereUniqueInput
    create: XOR<taxe_detailsCreateWithoutDetail_factureInput, taxe_detailsUncheckedCreateWithoutDetail_factureInput>
  }

  export type taxe_detailsCreateManyDetail_factureInputEnvelope = {
    data: taxe_detailsCreateManyDetail_factureInput | taxe_detailsCreateManyDetail_factureInput[]
    skipDuplicates?: boolean
  }

  export type entete_factureUpsertWithoutDetail_factureInput = {
    update: XOR<entete_factureUpdateWithoutDetail_factureInput, entete_factureUncheckedUpdateWithoutDetail_factureInput>
    create: XOR<entete_factureCreateWithoutDetail_factureInput, entete_factureUncheckedCreateWithoutDetail_factureInput>
    where?: entete_factureWhereInput
  }

  export type entete_factureUpdateToOneWithWhereWithoutDetail_factureInput = {
    where?: entete_factureWhereInput
    data: XOR<entete_factureUpdateWithoutDetail_factureInput, entete_factureUncheckedUpdateWithoutDetail_factureInput>
  }

  export type entete_factureUpdateWithoutDetail_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    tiers?: tiersUpdateOneRequiredWithoutEntete_factureNestedInput
    information_complementaire?: information_complementaireUpdateOneWithoutEntete_factureNestedInput
    taxe_pieds?: taxe_piedsUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureUncheckedUpdateWithoutDetail_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_tiers?: BigIntFieldUpdateOperationsInput | bigint | number
    id_information_complementaire?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    taxe_pieds?: taxe_piedsUncheckedUpdateManyWithoutEntete_factureNestedInput
  }

  export type taxe_detailsUpsertWithWhereUniqueWithoutDetail_factureInput = {
    where: taxe_detailsWhereUniqueInput
    update: XOR<taxe_detailsUpdateWithoutDetail_factureInput, taxe_detailsUncheckedUpdateWithoutDetail_factureInput>
    create: XOR<taxe_detailsCreateWithoutDetail_factureInput, taxe_detailsUncheckedCreateWithoutDetail_factureInput>
  }

  export type taxe_detailsUpdateWithWhereUniqueWithoutDetail_factureInput = {
    where: taxe_detailsWhereUniqueInput
    data: XOR<taxe_detailsUpdateWithoutDetail_factureInput, taxe_detailsUncheckedUpdateWithoutDetail_factureInput>
  }

  export type taxe_detailsUpdateManyWithWhereWithoutDetail_factureInput = {
    where: taxe_detailsScalarWhereInput
    data: XOR<taxe_detailsUpdateManyMutationInput, taxe_detailsUncheckedUpdateManyWithoutDetail_factureInput>
  }

  export type taxe_detailsScalarWhereInput = {
    AND?: taxe_detailsScalarWhereInput | taxe_detailsScalarWhereInput[]
    OR?: taxe_detailsScalarWhereInput[]
    NOT?: taxe_detailsScalarWhereInput | taxe_detailsScalarWhereInput[]
    id?: BigIntFilter<"taxe_details"> | bigint | number
    id_detail_facture?: BigIntFilter<"taxe_details"> | bigint | number
    libelle_taxe_details?: StringNullableFilter<"taxe_details"> | string | null
    taux_taxe_details?: FloatFilter<"taxe_details"> | number
    montant_taxe_details?: DecimalFilter<"taxe_details"> | Decimal | DecimalJsLike | number | string
  }

  export type detail_factureCreateWithoutTaxe_detailsInput = {
    id?: bigint | number
    uuid?: string
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
    entete_facture: entete_factureCreateNestedOneWithoutDetail_factureInput
  }

  export type detail_factureUncheckedCreateWithoutTaxe_detailsInput = {
    id?: bigint | number
    uuid?: string
    id_entete_facture: bigint | number
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
  }

  export type detail_factureCreateOrConnectWithoutTaxe_detailsInput = {
    where: detail_factureWhereUniqueInput
    create: XOR<detail_factureCreateWithoutTaxe_detailsInput, detail_factureUncheckedCreateWithoutTaxe_detailsInput>
  }

  export type detail_factureUpsertWithoutTaxe_detailsInput = {
    update: XOR<detail_factureUpdateWithoutTaxe_detailsInput, detail_factureUncheckedUpdateWithoutTaxe_detailsInput>
    create: XOR<detail_factureCreateWithoutTaxe_detailsInput, detail_factureUncheckedCreateWithoutTaxe_detailsInput>
    where?: detail_factureWhereInput
  }

  export type detail_factureUpdateToOneWithWhereWithoutTaxe_detailsInput = {
    where?: detail_factureWhereInput
    data: XOR<detail_factureUpdateWithoutTaxe_detailsInput, detail_factureUncheckedUpdateWithoutTaxe_detailsInput>
  }

  export type detail_factureUpdateWithoutTaxe_detailsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    entete_facture?: entete_factureUpdateOneRequiredWithoutDetail_factureNestedInput
  }

  export type detail_factureUncheckedUpdateWithoutTaxe_detailsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    id_entete_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type entete_factureCreateWithoutTaxe_piedsInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    tiers: tiersCreateNestedOneWithoutEntete_factureInput
    information_complementaire?: information_complementaireCreateNestedOneWithoutEntete_factureInput
    detail_facture?: detail_factureCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureUncheckedCreateWithoutTaxe_piedsInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_tiers: bigint | number
    id_information_complementaire?: bigint | number | null
    detail_facture?: detail_factureUncheckedCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureCreateOrConnectWithoutTaxe_piedsInput = {
    where: entete_factureWhereUniqueInput
    create: XOR<entete_factureCreateWithoutTaxe_piedsInput, entete_factureUncheckedCreateWithoutTaxe_piedsInput>
  }

  export type entete_factureUpsertWithoutTaxe_piedsInput = {
    update: XOR<entete_factureUpdateWithoutTaxe_piedsInput, entete_factureUncheckedUpdateWithoutTaxe_piedsInput>
    create: XOR<entete_factureCreateWithoutTaxe_piedsInput, entete_factureUncheckedCreateWithoutTaxe_piedsInput>
    where?: entete_factureWhereInput
  }

  export type entete_factureUpdateToOneWithWhereWithoutTaxe_piedsInput = {
    where?: entete_factureWhereInput
    data: XOR<entete_factureUpdateWithoutTaxe_piedsInput, entete_factureUncheckedUpdateWithoutTaxe_piedsInput>
  }

  export type entete_factureUpdateWithoutTaxe_piedsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    tiers?: tiersUpdateOneRequiredWithoutEntete_factureNestedInput
    information_complementaire?: information_complementaireUpdateOneWithoutEntete_factureNestedInput
    detail_facture?: detail_factureUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureUncheckedUpdateWithoutTaxe_piedsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_tiers?: BigIntFieldUpdateOperationsInput | bigint | number
    id_information_complementaire?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    detail_facture?: detail_factureUncheckedUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureCreateWithoutTiersInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    information_complementaire?: information_complementaireCreateNestedOneWithoutEntete_factureInput
    detail_facture?: detail_factureCreateNestedManyWithoutEntete_factureInput
    taxe_pieds?: taxe_piedsCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureUncheckedCreateWithoutTiersInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_information_complementaire?: bigint | number | null
    detail_facture?: detail_factureUncheckedCreateNestedManyWithoutEntete_factureInput
    taxe_pieds?: taxe_piedsUncheckedCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureCreateOrConnectWithoutTiersInput = {
    where: entete_factureWhereUniqueInput
    create: XOR<entete_factureCreateWithoutTiersInput, entete_factureUncheckedCreateWithoutTiersInput>
  }

  export type entete_factureCreateManyTiersInputEnvelope = {
    data: entete_factureCreateManyTiersInput | entete_factureCreateManyTiersInput[]
    skipDuplicates?: boolean
  }

  export type entete_factureUpsertWithWhereUniqueWithoutTiersInput = {
    where: entete_factureWhereUniqueInput
    update: XOR<entete_factureUpdateWithoutTiersInput, entete_factureUncheckedUpdateWithoutTiersInput>
    create: XOR<entete_factureCreateWithoutTiersInput, entete_factureUncheckedCreateWithoutTiersInput>
  }

  export type entete_factureUpdateWithWhereUniqueWithoutTiersInput = {
    where: entete_factureWhereUniqueInput
    data: XOR<entete_factureUpdateWithoutTiersInput, entete_factureUncheckedUpdateWithoutTiersInput>
  }

  export type entete_factureUpdateManyWithWhereWithoutTiersInput = {
    where: entete_factureScalarWhereInput
    data: XOR<entete_factureUpdateManyMutationInput, entete_factureUncheckedUpdateManyWithoutTiersInput>
  }

  export type entete_factureScalarWhereInput = {
    AND?: entete_factureScalarWhereInput | entete_factureScalarWhereInput[]
    OR?: entete_factureScalarWhereInput[]
    NOT?: entete_factureScalarWhereInput | entete_factureScalarWhereInput[]
    id?: BigIntFilter<"entete_facture"> | bigint | number
    uuid?: StringFilter<"entete_facture"> | string
    numero_facture?: StringFilter<"entete_facture"> | string
    date_facture?: DateTimeFilter<"entete_facture"> | Date | string
    code_type_facture?: StringFilter<"entete_facture"> | string
    code_type_facturation?: StringFilter<"entete_facture"> | string
    code_mode_paiement?: StringFilter<"entete_facture"> | string
    code_devise?: StringFilter<"entete_facture"> | string
    total_ht?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFilter<"entete_facture"> | Decimal | DecimalJsLike | number | string
    point_vente?: StringFilter<"entete_facture"> | string
    etablissement?: StringFilter<"entete_facture"> | string
    certifie?: IntFilter<"entete_facture"> | number
    retour_ncc?: StringNullableFilter<"entete_facture"> | string | null
    retour_id_facture?: StringNullableFilter<"entete_facture"> | string | null
    retour_token?: StringNullableFilter<"entete_facture"> | string | null
    numero_facture_origine?: StringNullableFilter<"entete_facture"> | string | null
    id_tiers?: BigIntFilter<"entete_facture"> | bigint | number
    id_information_complementaire?: BigIntNullableFilter<"entete_facture"> | bigint | number | null
  }

  export type entete_factureCreateWithoutInformation_complementaireInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    tiers: tiersCreateNestedOneWithoutEntete_factureInput
    detail_facture?: detail_factureCreateNestedManyWithoutEntete_factureInput
    taxe_pieds?: taxe_piedsCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureUncheckedCreateWithoutInformation_complementaireInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_tiers: bigint | number
    detail_facture?: detail_factureUncheckedCreateNestedManyWithoutEntete_factureInput
    taxe_pieds?: taxe_piedsUncheckedCreateNestedManyWithoutEntete_factureInput
  }

  export type entete_factureCreateOrConnectWithoutInformation_complementaireInput = {
    where: entete_factureWhereUniqueInput
    create: XOR<entete_factureCreateWithoutInformation_complementaireInput, entete_factureUncheckedCreateWithoutInformation_complementaireInput>
  }

  export type entete_factureCreateManyInformation_complementaireInputEnvelope = {
    data: entete_factureCreateManyInformation_complementaireInput | entete_factureCreateManyInformation_complementaireInput[]
    skipDuplicates?: boolean
  }

  export type entete_factureUpsertWithWhereUniqueWithoutInformation_complementaireInput = {
    where: entete_factureWhereUniqueInput
    update: XOR<entete_factureUpdateWithoutInformation_complementaireInput, entete_factureUncheckedUpdateWithoutInformation_complementaireInput>
    create: XOR<entete_factureCreateWithoutInformation_complementaireInput, entete_factureUncheckedCreateWithoutInformation_complementaireInput>
  }

  export type entete_factureUpdateWithWhereUniqueWithoutInformation_complementaireInput = {
    where: entete_factureWhereUniqueInput
    data: XOR<entete_factureUpdateWithoutInformation_complementaireInput, entete_factureUncheckedUpdateWithoutInformation_complementaireInput>
  }

  export type entete_factureUpdateManyWithWhereWithoutInformation_complementaireInput = {
    where: entete_factureScalarWhereInput
    data: XOR<entete_factureUpdateManyMutationInput, entete_factureUncheckedUpdateManyWithoutInformation_complementaireInput>
  }

  export type detail_factureCreateManyEntete_factureInput = {
    id?: bigint | number
    uuid?: string
    code_taux_imposition: string
    reference_article?: string | null
    designation_article?: string | null
    quantite: number
    unite_vente: string
    prix: Decimal | DecimalJsLike | number | string
    montant_ht: Decimal | DecimalJsLike | number | string
    remise: number
    montant_ttc: Decimal | DecimalJsLike | number | string
    montant_taux_imposition: Decimal | DecimalJsLike | number | string
    retour_detail: string
    ligne_avoir: number
    id_detail_origine_facture: bigint | number
    montant_remise: Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsCreateManyEntete_factureInput = {
    id?: bigint | number
    libelle_taxe_pieds?: string | null
    taux_taxe_pieds: number
    montant_taxe_pieds: Decimal | DecimalJsLike | number | string
  }

  export type detail_factureUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxe_details?: taxe_detailsUpdateManyWithoutDetail_factureNestedInput
  }

  export type detail_factureUncheckedUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxe_details?: taxe_detailsUncheckedUpdateManyWithoutDetail_factureNestedInput
  }

  export type detail_factureUncheckedUpdateManyWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_taux_imposition?: StringFieldUpdateOperationsInput | string
    reference_article?: NullableStringFieldUpdateOperationsInput | string | null
    designation_article?: NullableStringFieldUpdateOperationsInput | string | null
    quantite?: FloatFieldUpdateOperationsInput | number
    unite_vente?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remise?: FloatFieldUpdateOperationsInput | number
    montant_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montant_taux_imposition?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retour_detail?: StringFieldUpdateOperationsInput | string
    ligne_avoir?: IntFieldUpdateOperationsInput | number
    id_detail_origine_facture?: BigIntFieldUpdateOperationsInput | bigint | number
    montant_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_pieds?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_pieds?: FloatFieldUpdateOperationsInput | number
    montant_taxe_pieds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUncheckedUpdateWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_pieds?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_pieds?: FloatFieldUpdateOperationsInput | number
    montant_taxe_pieds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_piedsUncheckedUpdateManyWithoutEntete_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_pieds?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_pieds?: FloatFieldUpdateOperationsInput | number
    montant_taxe_pieds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsCreateManyDetail_factureInput = {
    id?: bigint | number
    libelle_taxe_details?: string | null
    taux_taxe_details: number
    montant_taxe_details: Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsUpdateWithoutDetail_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_details?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_details?: FloatFieldUpdateOperationsInput | number
    montant_taxe_details?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsUncheckedUpdateWithoutDetail_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_details?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_details?: FloatFieldUpdateOperationsInput | number
    montant_taxe_details?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type taxe_detailsUncheckedUpdateManyWithoutDetail_factureInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    libelle_taxe_details?: NullableStringFieldUpdateOperationsInput | string | null
    taux_taxe_details?: FloatFieldUpdateOperationsInput | number
    montant_taxe_details?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type entete_factureCreateManyTiersInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_information_complementaire?: bigint | number | null
  }

  export type entete_factureUpdateWithoutTiersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    information_complementaire?: information_complementaireUpdateOneWithoutEntete_factureNestedInput
    detail_facture?: detail_factureUpdateManyWithoutEntete_factureNestedInput
    taxe_pieds?: taxe_piedsUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureUncheckedUpdateWithoutTiersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_information_complementaire?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    detail_facture?: detail_factureUncheckedUpdateManyWithoutEntete_factureNestedInput
    taxe_pieds?: taxe_piedsUncheckedUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureUncheckedUpdateManyWithoutTiersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_information_complementaire?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type entete_factureCreateManyInformation_complementaireInput = {
    id?: bigint | number
    uuid?: string
    numero_facture: string
    date_facture: Date | string
    code_type_facture: string
    code_type_facturation: string
    code_mode_paiement: string
    code_devise: string
    total_ht: Decimal | DecimalJsLike | number | string
    total_tva: Decimal | DecimalJsLike | number | string
    total_remise: Decimal | DecimalJsLike | number | string
    total_autre_taxe: Decimal | DecimalJsLike | number | string
    total_ttc: Decimal | DecimalJsLike | number | string
    point_vente: string
    etablissement: string
    certifie?: number
    retour_ncc?: string | null
    retour_id_facture?: string | null
    retour_token?: string | null
    numero_facture_origine?: string | null
    id_tiers: bigint | number
  }

  export type entete_factureUpdateWithoutInformation_complementaireInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    tiers?: tiersUpdateOneRequiredWithoutEntete_factureNestedInput
    detail_facture?: detail_factureUpdateManyWithoutEntete_factureNestedInput
    taxe_pieds?: taxe_piedsUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureUncheckedUpdateWithoutInformation_complementaireInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_tiers?: BigIntFieldUpdateOperationsInput | bigint | number
    detail_facture?: detail_factureUncheckedUpdateManyWithoutEntete_factureNestedInput
    taxe_pieds?: taxe_piedsUncheckedUpdateManyWithoutEntete_factureNestedInput
  }

  export type entete_factureUncheckedUpdateManyWithoutInformation_complementaireInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    numero_facture?: StringFieldUpdateOperationsInput | string
    date_facture?: DateTimeFieldUpdateOperationsInput | Date | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    code_type_facturation?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    total_ht?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_remise?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_autre_taxe?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_ttc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    point_vente?: StringFieldUpdateOperationsInput | string
    etablissement?: StringFieldUpdateOperationsInput | string
    certifie?: IntFieldUpdateOperationsInput | number
    retour_ncc?: NullableStringFieldUpdateOperationsInput | string | null
    retour_id_facture?: NullableStringFieldUpdateOperationsInput | string | null
    retour_token?: NullableStringFieldUpdateOperationsInput | string | null
    numero_facture_origine?: NullableStringFieldUpdateOperationsInput | string | null
    id_tiers?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}