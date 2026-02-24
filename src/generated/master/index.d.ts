
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
 * Model societe
 * 
 */
export type societe = $Result.DefaultSelection<Prisma.$societePayload>
/**
 * Model etablissement
 * 
 */
export type etablissement = $Result.DefaultSelection<Prisma.$etablissementPayload>
/**
 * Model point_vente
 * 
 */
export type point_vente = $Result.DefaultSelection<Prisma.$point_ventePayload>
/**
 * Model licence
 * 
 */
export type licence = $Result.DefaultSelection<Prisma.$licencePayload>
/**
 * Model utilisateur_client
 * 
 */
export type utilisateur_client = $Result.DefaultSelection<Prisma.$utilisateur_clientPayload>
/**
 * Model mode_paiement
 * 
 */
export type mode_paiement = $Result.DefaultSelection<Prisma.$mode_paiementPayload>
/**
 * Model taux_imposition
 * 
 */
export type taux_imposition = $Result.DefaultSelection<Prisma.$taux_impositionPayload>
/**
 * Model type_facture
 * 
 */
export type type_facture = $Result.DefaultSelection<Prisma.$type_facturePayload>
/**
 * Model devise
 * 
 */
export type devise = $Result.DefaultSelection<Prisma.$devisePayload>
/**
 * Model type_facturation
 * 
 */
export type type_facturation = $Result.DefaultSelection<Prisma.$type_facturationPayload>
/**
 * Model sticker
 * 
 */
export type sticker = $Result.DefaultSelection<Prisma.$stickerPayload>
/**
 * Model configuration
 * 
 */
export type configuration = $Result.DefaultSelection<Prisma.$configurationPayload>
/**
 * Model statut
 * 
 */
export type statut = $Result.DefaultSelection<Prisma.$statutPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model utilisateur_admin
 * 
 */
export type utilisateur_admin = $Result.DefaultSelection<Prisma.$utilisateur_adminPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Societes
 * const societes = await prisma.societe.findMany()
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
   * // Fetch zero or more Societes
   * const societes = await prisma.societe.findMany()
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
   * `prisma.societe`: Exposes CRUD operations for the **societe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Societes
    * const societes = await prisma.societe.findMany()
    * ```
    */
  get societe(): Prisma.societeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etablissement`: Exposes CRUD operations for the **etablissement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etablissements
    * const etablissements = await prisma.etablissement.findMany()
    * ```
    */
  get etablissement(): Prisma.etablissementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.point_vente`: Exposes CRUD operations for the **point_vente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Point_ventes
    * const point_ventes = await prisma.point_vente.findMany()
    * ```
    */
  get point_vente(): Prisma.point_venteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licence`: Exposes CRUD operations for the **licence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licences
    * const licences = await prisma.licence.findMany()
    * ```
    */
  get licence(): Prisma.licenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur_client`: Exposes CRUD operations for the **utilisateur_client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateur_clients
    * const utilisateur_clients = await prisma.utilisateur_client.findMany()
    * ```
    */
  get utilisateur_client(): Prisma.utilisateur_clientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mode_paiement`: Exposes CRUD operations for the **mode_paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mode_paiements
    * const mode_paiements = await prisma.mode_paiement.findMany()
    * ```
    */
  get mode_paiement(): Prisma.mode_paiementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taux_imposition`: Exposes CRUD operations for the **taux_imposition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taux_impositions
    * const taux_impositions = await prisma.taux_imposition.findMany()
    * ```
    */
  get taux_imposition(): Prisma.taux_impositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type_facture`: Exposes CRUD operations for the **type_facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_factures
    * const type_factures = await prisma.type_facture.findMany()
    * ```
    */
  get type_facture(): Prisma.type_factureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devise`: Exposes CRUD operations for the **devise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devises
    * const devises = await prisma.devise.findMany()
    * ```
    */
  get devise(): Prisma.deviseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type_facturation`: Exposes CRUD operations for the **type_facturation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_facturations
    * const type_facturations = await prisma.type_facturation.findMany()
    * ```
    */
  get type_facturation(): Prisma.type_facturationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sticker`: Exposes CRUD operations for the **sticker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stickers
    * const stickers = await prisma.sticker.findMany()
    * ```
    */
  get sticker(): Prisma.stickerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuration`: Exposes CRUD operations for the **configuration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configurations
    * const configurations = await prisma.configuration.findMany()
    * ```
    */
  get configuration(): Prisma.configurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statut`: Exposes CRUD operations for the **statut** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuts
    * const statuts = await prisma.statut.findMany()
    * ```
    */
  get statut(): Prisma.statutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur_admin`: Exposes CRUD operations for the **utilisateur_admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateur_admins
    * const utilisateur_admins = await prisma.utilisateur_admin.findMany()
    * ```
    */
  get utilisateur_admin(): Prisma.utilisateur_adminDelegate<ExtArgs, ClientOptions>;
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
    societe: 'societe',
    etablissement: 'etablissement',
    point_vente: 'point_vente',
    licence: 'licence',
    utilisateur_client: 'utilisateur_client',
    mode_paiement: 'mode_paiement',
    taux_imposition: 'taux_imposition',
    type_facture: 'type_facture',
    devise: 'devise',
    type_facturation: 'type_facturation',
    sticker: 'sticker',
    configuration: 'configuration',
    statut: 'statut',
    role: 'role',
    utilisateur_admin: 'utilisateur_admin'
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
      modelProps: "societe" | "etablissement" | "point_vente" | "licence" | "utilisateur_client" | "mode_paiement" | "taux_imposition" | "type_facture" | "devise" | "type_facturation" | "sticker" | "configuration" | "statut" | "role" | "utilisateur_admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      societe: {
        payload: Prisma.$societePayload<ExtArgs>
        fields: Prisma.societeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.societeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.societeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload>
          }
          findFirst: {
            args: Prisma.societeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.societeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload>
          }
          findMany: {
            args: Prisma.societeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload>[]
          }
          create: {
            args: Prisma.societeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload>
          }
          createMany: {
            args: Prisma.societeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.societeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload>
          }
          update: {
            args: Prisma.societeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload>
          }
          deleteMany: {
            args: Prisma.societeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.societeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.societeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$societePayload>
          }
          aggregate: {
            args: Prisma.SocieteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSociete>
          }
          groupBy: {
            args: Prisma.societeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocieteGroupByOutputType>[]
          }
          count: {
            args: Prisma.societeCountArgs<ExtArgs>
            result: $Utils.Optional<SocieteCountAggregateOutputType> | number
          }
        }
      }
      etablissement: {
        payload: Prisma.$etablissementPayload<ExtArgs>
        fields: Prisma.etablissementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.etablissementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.etablissementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload>
          }
          findFirst: {
            args: Prisma.etablissementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.etablissementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload>
          }
          findMany: {
            args: Prisma.etablissementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload>[]
          }
          create: {
            args: Prisma.etablissementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload>
          }
          createMany: {
            args: Prisma.etablissementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.etablissementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload>
          }
          update: {
            args: Prisma.etablissementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload>
          }
          deleteMany: {
            args: Prisma.etablissementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.etablissementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.etablissementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$etablissementPayload>
          }
          aggregate: {
            args: Prisma.EtablissementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtablissement>
          }
          groupBy: {
            args: Prisma.etablissementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtablissementGroupByOutputType>[]
          }
          count: {
            args: Prisma.etablissementCountArgs<ExtArgs>
            result: $Utils.Optional<EtablissementCountAggregateOutputType> | number
          }
        }
      }
      point_vente: {
        payload: Prisma.$point_ventePayload<ExtArgs>
        fields: Prisma.point_venteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.point_venteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.point_venteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload>
          }
          findFirst: {
            args: Prisma.point_venteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.point_venteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload>
          }
          findMany: {
            args: Prisma.point_venteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload>[]
          }
          create: {
            args: Prisma.point_venteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload>
          }
          createMany: {
            args: Prisma.point_venteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.point_venteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload>
          }
          update: {
            args: Prisma.point_venteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload>
          }
          deleteMany: {
            args: Prisma.point_venteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.point_venteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.point_venteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$point_ventePayload>
          }
          aggregate: {
            args: Prisma.Point_venteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint_vente>
          }
          groupBy: {
            args: Prisma.point_venteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Point_venteGroupByOutputType>[]
          }
          count: {
            args: Prisma.point_venteCountArgs<ExtArgs>
            result: $Utils.Optional<Point_venteCountAggregateOutputType> | number
          }
        }
      }
      licence: {
        payload: Prisma.$licencePayload<ExtArgs>
        fields: Prisma.licenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.licenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.licenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload>
          }
          findFirst: {
            args: Prisma.licenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.licenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload>
          }
          findMany: {
            args: Prisma.licenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload>[]
          }
          create: {
            args: Prisma.licenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload>
          }
          createMany: {
            args: Prisma.licenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.licenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload>
          }
          update: {
            args: Prisma.licenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload>
          }
          deleteMany: {
            args: Prisma.licenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.licenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.licenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$licencePayload>
          }
          aggregate: {
            args: Prisma.LicenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicence>
          }
          groupBy: {
            args: Prisma.licenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.licenceCountArgs<ExtArgs>
            result: $Utils.Optional<LicenceCountAggregateOutputType> | number
          }
        }
      }
      utilisateur_client: {
        payload: Prisma.$utilisateur_clientPayload<ExtArgs>
        fields: Prisma.utilisateur_clientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilisateur_clientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilisateur_clientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload>
          }
          findFirst: {
            args: Prisma.utilisateur_clientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilisateur_clientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload>
          }
          findMany: {
            args: Prisma.utilisateur_clientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload>[]
          }
          create: {
            args: Prisma.utilisateur_clientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload>
          }
          createMany: {
            args: Prisma.utilisateur_clientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.utilisateur_clientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload>
          }
          update: {
            args: Prisma.utilisateur_clientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload>
          }
          deleteMany: {
            args: Prisma.utilisateur_clientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilisateur_clientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.utilisateur_clientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_clientPayload>
          }
          aggregate: {
            args: Prisma.Utilisateur_clientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur_client>
          }
          groupBy: {
            args: Prisma.utilisateur_clientGroupByArgs<ExtArgs>
            result: $Utils.Optional<Utilisateur_clientGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilisateur_clientCountArgs<ExtArgs>
            result: $Utils.Optional<Utilisateur_clientCountAggregateOutputType> | number
          }
        }
      }
      mode_paiement: {
        payload: Prisma.$mode_paiementPayload<ExtArgs>
        fields: Prisma.mode_paiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mode_paiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mode_paiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload>
          }
          findFirst: {
            args: Prisma.mode_paiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mode_paiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload>
          }
          findMany: {
            args: Prisma.mode_paiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload>[]
          }
          create: {
            args: Prisma.mode_paiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload>
          }
          createMany: {
            args: Prisma.mode_paiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mode_paiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload>
          }
          update: {
            args: Prisma.mode_paiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload>
          }
          deleteMany: {
            args: Prisma.mode_paiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mode_paiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mode_paiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mode_paiementPayload>
          }
          aggregate: {
            args: Prisma.Mode_paiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMode_paiement>
          }
          groupBy: {
            args: Prisma.mode_paiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mode_paiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.mode_paiementCountArgs<ExtArgs>
            result: $Utils.Optional<Mode_paiementCountAggregateOutputType> | number
          }
        }
      }
      taux_imposition: {
        payload: Prisma.$taux_impositionPayload<ExtArgs>
        fields: Prisma.taux_impositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.taux_impositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.taux_impositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload>
          }
          findFirst: {
            args: Prisma.taux_impositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.taux_impositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload>
          }
          findMany: {
            args: Prisma.taux_impositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload>[]
          }
          create: {
            args: Prisma.taux_impositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload>
          }
          createMany: {
            args: Prisma.taux_impositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.taux_impositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload>
          }
          update: {
            args: Prisma.taux_impositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload>
          }
          deleteMany: {
            args: Prisma.taux_impositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.taux_impositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.taux_impositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$taux_impositionPayload>
          }
          aggregate: {
            args: Prisma.Taux_impositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaux_imposition>
          }
          groupBy: {
            args: Prisma.taux_impositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Taux_impositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.taux_impositionCountArgs<ExtArgs>
            result: $Utils.Optional<Taux_impositionCountAggregateOutputType> | number
          }
        }
      }
      type_facture: {
        payload: Prisma.$type_facturePayload<ExtArgs>
        fields: Prisma.type_factureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.type_factureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.type_factureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload>
          }
          findFirst: {
            args: Prisma.type_factureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.type_factureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload>
          }
          findMany: {
            args: Prisma.type_factureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload>[]
          }
          create: {
            args: Prisma.type_factureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload>
          }
          createMany: {
            args: Prisma.type_factureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.type_factureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload>
          }
          update: {
            args: Prisma.type_factureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload>
          }
          deleteMany: {
            args: Prisma.type_factureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.type_factureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.type_factureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturePayload>
          }
          aggregate: {
            args: Prisma.Type_factureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType_facture>
          }
          groupBy: {
            args: Prisma.type_factureGroupByArgs<ExtArgs>
            result: $Utils.Optional<Type_factureGroupByOutputType>[]
          }
          count: {
            args: Prisma.type_factureCountArgs<ExtArgs>
            result: $Utils.Optional<Type_factureCountAggregateOutputType> | number
          }
        }
      }
      devise: {
        payload: Prisma.$devisePayload<ExtArgs>
        fields: Prisma.deviseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deviseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deviseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload>
          }
          findFirst: {
            args: Prisma.deviseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deviseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload>
          }
          findMany: {
            args: Prisma.deviseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload>[]
          }
          create: {
            args: Prisma.deviseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload>
          }
          createMany: {
            args: Prisma.deviseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.deviseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload>
          }
          update: {
            args: Prisma.deviseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload>
          }
          deleteMany: {
            args: Prisma.deviseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deviseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.deviseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devisePayload>
          }
          aggregate: {
            args: Prisma.DeviseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevise>
          }
          groupBy: {
            args: Prisma.deviseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviseGroupByOutputType>[]
          }
          count: {
            args: Prisma.deviseCountArgs<ExtArgs>
            result: $Utils.Optional<DeviseCountAggregateOutputType> | number
          }
        }
      }
      type_facturation: {
        payload: Prisma.$type_facturationPayload<ExtArgs>
        fields: Prisma.type_facturationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.type_facturationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.type_facturationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload>
          }
          findFirst: {
            args: Prisma.type_facturationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.type_facturationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload>
          }
          findMany: {
            args: Prisma.type_facturationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload>[]
          }
          create: {
            args: Prisma.type_facturationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload>
          }
          createMany: {
            args: Prisma.type_facturationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.type_facturationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload>
          }
          update: {
            args: Prisma.type_facturationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload>
          }
          deleteMany: {
            args: Prisma.type_facturationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.type_facturationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.type_facturationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_facturationPayload>
          }
          aggregate: {
            args: Prisma.Type_facturationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType_facturation>
          }
          groupBy: {
            args: Prisma.type_facturationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Type_facturationGroupByOutputType>[]
          }
          count: {
            args: Prisma.type_facturationCountArgs<ExtArgs>
            result: $Utils.Optional<Type_facturationCountAggregateOutputType> | number
          }
        }
      }
      sticker: {
        payload: Prisma.$stickerPayload<ExtArgs>
        fields: Prisma.stickerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stickerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stickerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload>
          }
          findFirst: {
            args: Prisma.stickerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stickerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload>
          }
          findMany: {
            args: Prisma.stickerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload>[]
          }
          create: {
            args: Prisma.stickerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload>
          }
          createMany: {
            args: Prisma.stickerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stickerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload>
          }
          update: {
            args: Prisma.stickerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload>
          }
          deleteMany: {
            args: Prisma.stickerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stickerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stickerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stickerPayload>
          }
          aggregate: {
            args: Prisma.StickerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSticker>
          }
          groupBy: {
            args: Prisma.stickerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StickerGroupByOutputType>[]
          }
          count: {
            args: Prisma.stickerCountArgs<ExtArgs>
            result: $Utils.Optional<StickerCountAggregateOutputType> | number
          }
        }
      }
      configuration: {
        payload: Prisma.$configurationPayload<ExtArgs>
        fields: Prisma.configurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload>
          }
          findFirst: {
            args: Prisma.configurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload>
          }
          findMany: {
            args: Prisma.configurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload>[]
          }
          create: {
            args: Prisma.configurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload>
          }
          createMany: {
            args: Prisma.configurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.configurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload>
          }
          update: {
            args: Prisma.configurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload>
          }
          deleteMany: {
            args: Prisma.configurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.configurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurationPayload>
          }
          aggregate: {
            args: Prisma.ConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguration>
          }
          groupBy: {
            args: Prisma.configurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.configurationCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigurationCountAggregateOutputType> | number
          }
        }
      }
      statut: {
        payload: Prisma.$statutPayload<ExtArgs>
        fields: Prisma.statutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload>
          }
          findFirst: {
            args: Prisma.statutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload>
          }
          findMany: {
            args: Prisma.statutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload>[]
          }
          create: {
            args: Prisma.statutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload>
          }
          createMany: {
            args: Prisma.statutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.statutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload>
          }
          update: {
            args: Prisma.statutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload>
          }
          deleteMany: {
            args: Prisma.statutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.statutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statutPayload>
          }
          aggregate: {
            args: Prisma.StatutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatut>
          }
          groupBy: {
            args: Prisma.statutGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatutGroupByOutputType>[]
          }
          count: {
            args: Prisma.statutCountArgs<ExtArgs>
            result: $Utils.Optional<StatutCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      utilisateur_admin: {
        payload: Prisma.$utilisateur_adminPayload<ExtArgs>
        fields: Prisma.utilisateur_adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilisateur_adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilisateur_adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload>
          }
          findFirst: {
            args: Prisma.utilisateur_adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilisateur_adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload>
          }
          findMany: {
            args: Prisma.utilisateur_adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload>[]
          }
          create: {
            args: Prisma.utilisateur_adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload>
          }
          createMany: {
            args: Prisma.utilisateur_adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.utilisateur_adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload>
          }
          update: {
            args: Prisma.utilisateur_adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload>
          }
          deleteMany: {
            args: Prisma.utilisateur_adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilisateur_adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.utilisateur_adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateur_adminPayload>
          }
          aggregate: {
            args: Prisma.Utilisateur_adminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur_admin>
          }
          groupBy: {
            args: Prisma.utilisateur_adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<Utilisateur_adminGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilisateur_adminCountArgs<ExtArgs>
            result: $Utils.Optional<Utilisateur_adminCountAggregateOutputType> | number
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
    societe?: societeOmit
    etablissement?: etablissementOmit
    point_vente?: point_venteOmit
    licence?: licenceOmit
    utilisateur_client?: utilisateur_clientOmit
    mode_paiement?: mode_paiementOmit
    taux_imposition?: taux_impositionOmit
    type_facture?: type_factureOmit
    devise?: deviseOmit
    type_facturation?: type_facturationOmit
    sticker?: stickerOmit
    configuration?: configurationOmit
    statut?: statutOmit
    role?: roleOmit
    utilisateur_admin?: utilisateur_adminOmit
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
   * Count Type SocieteCountOutputType
   */

  export type SocieteCountOutputType = {
    etablissement: number
    utilisateur_client: number
    licences: number
    stickers: number
  }

  export type SocieteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etablissement?: boolean | SocieteCountOutputTypeCountEtablissementArgs
    utilisateur_client?: boolean | SocieteCountOutputTypeCountUtilisateur_clientArgs
    licences?: boolean | SocieteCountOutputTypeCountLicencesArgs
    stickers?: boolean | SocieteCountOutputTypeCountStickersArgs
  }

  // Custom InputTypes
  /**
   * SocieteCountOutputType without action
   */
  export type SocieteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocieteCountOutputType
     */
    select?: SocieteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocieteCountOutputType without action
   */
  export type SocieteCountOutputTypeCountEtablissementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: etablissementWhereInput
  }

  /**
   * SocieteCountOutputType without action
   */
  export type SocieteCountOutputTypeCountUtilisateur_clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateur_clientWhereInput
  }

  /**
   * SocieteCountOutputType without action
   */
  export type SocieteCountOutputTypeCountLicencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: licenceWhereInput
  }

  /**
   * SocieteCountOutputType without action
   */
  export type SocieteCountOutputTypeCountStickersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stickerWhereInput
  }


  /**
   * Count Type EtablissementCountOutputType
   */

  export type EtablissementCountOutputType = {
    point_vente: number
  }

  export type EtablissementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point_vente?: boolean | EtablissementCountOutputTypeCountPoint_venteArgs
  }

  // Custom InputTypes
  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementCountOutputType
     */
    select?: EtablissementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeCountPoint_venteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: point_venteWhereInput
  }


  /**
   * Count Type StatutCountOutputType
   */

  export type StatutCountOutputType = {
    societes: number
    licences: number
    utilisateur_client: number
  }

  export type StatutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    societes?: boolean | StatutCountOutputTypeCountSocietesArgs
    licences?: boolean | StatutCountOutputTypeCountLicencesArgs
    utilisateur_client?: boolean | StatutCountOutputTypeCountUtilisateur_clientArgs
  }

  // Custom InputTypes
  /**
   * StatutCountOutputType without action
   */
  export type StatutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatutCountOutputType
     */
    select?: StatutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatutCountOutputType without action
   */
  export type StatutCountOutputTypeCountSocietesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: societeWhereInput
  }

  /**
   * StatutCountOutputType without action
   */
  export type StatutCountOutputTypeCountLicencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: licenceWhereInput
  }

  /**
   * StatutCountOutputType without action
   */
  export type StatutCountOutputTypeCountUtilisateur_clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateur_clientWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    utilisateur_client: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur_client?: boolean | RoleCountOutputTypeCountUtilisateur_clientArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUtilisateur_clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateur_clientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model societe
   */

  export type AggregateSociete = {
    _count: SocieteCountAggregateOutputType | null
    _avg: SocieteAvgAggregateOutputType | null
    _sum: SocieteSumAggregateOutputType | null
    _min: SocieteMinAggregateOutputType | null
    _max: SocieteMaxAggregateOutputType | null
  }

  export type SocieteAvgAggregateOutputType = {
    id: number | null
    bd_port: number | null
    statut_id: number | null
  }

  export type SocieteSumAggregateOutputType = {
    id: number | null
    bd_port: number | null
    statut_id: number | null
  }

  export type SocieteMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    code_societe: string | null
    raison_sociale_societe: string | null
    ncc: string | null
    rccm: string | null
    regime_imposition: string | null
    centre_impot: string | null
    ref_bancaire: string | null
    adresse: string | null
    telephone: string | null
    email: string | null
    cree_le: Date | null
    modifie_le: Date | null
    bd_host: string | null
    bd_name: string | null
    bd_user: string | null
    bd_pass: string | null
    bd_port: number | null
    logo_url: string | null
    statut_id: number | null
  }

  export type SocieteMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    code_societe: string | null
    raison_sociale_societe: string | null
    ncc: string | null
    rccm: string | null
    regime_imposition: string | null
    centre_impot: string | null
    ref_bancaire: string | null
    adresse: string | null
    telephone: string | null
    email: string | null
    cree_le: Date | null
    modifie_le: Date | null
    bd_host: string | null
    bd_name: string | null
    bd_user: string | null
    bd_pass: string | null
    bd_port: number | null
    logo_url: string | null
    statut_id: number | null
  }

  export type SocieteCountAggregateOutputType = {
    id: number
    uuid: number
    code_societe: number
    raison_sociale_societe: number
    ncc: number
    rccm: number
    regime_imposition: number
    centre_impot: number
    ref_bancaire: number
    adresse: number
    telephone: number
    email: number
    cree_le: number
    modifie_le: number
    bd_host: number
    bd_name: number
    bd_user: number
    bd_pass: number
    bd_port: number
    logo_url: number
    statut_id: number
    _all: number
  }


  export type SocieteAvgAggregateInputType = {
    id?: true
    bd_port?: true
    statut_id?: true
  }

  export type SocieteSumAggregateInputType = {
    id?: true
    bd_port?: true
    statut_id?: true
  }

  export type SocieteMinAggregateInputType = {
    id?: true
    uuid?: true
    code_societe?: true
    raison_sociale_societe?: true
    ncc?: true
    rccm?: true
    regime_imposition?: true
    centre_impot?: true
    ref_bancaire?: true
    adresse?: true
    telephone?: true
    email?: true
    cree_le?: true
    modifie_le?: true
    bd_host?: true
    bd_name?: true
    bd_user?: true
    bd_pass?: true
    bd_port?: true
    logo_url?: true
    statut_id?: true
  }

  export type SocieteMaxAggregateInputType = {
    id?: true
    uuid?: true
    code_societe?: true
    raison_sociale_societe?: true
    ncc?: true
    rccm?: true
    regime_imposition?: true
    centre_impot?: true
    ref_bancaire?: true
    adresse?: true
    telephone?: true
    email?: true
    cree_le?: true
    modifie_le?: true
    bd_host?: true
    bd_name?: true
    bd_user?: true
    bd_pass?: true
    bd_port?: true
    logo_url?: true
    statut_id?: true
  }

  export type SocieteCountAggregateInputType = {
    id?: true
    uuid?: true
    code_societe?: true
    raison_sociale_societe?: true
    ncc?: true
    rccm?: true
    regime_imposition?: true
    centre_impot?: true
    ref_bancaire?: true
    adresse?: true
    telephone?: true
    email?: true
    cree_le?: true
    modifie_le?: true
    bd_host?: true
    bd_name?: true
    bd_user?: true
    bd_pass?: true
    bd_port?: true
    logo_url?: true
    statut_id?: true
    _all?: true
  }

  export type SocieteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which societe to aggregate.
     */
    where?: societeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of societes to fetch.
     */
    orderBy?: societeOrderByWithRelationInput | societeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: societeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` societes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned societes
    **/
    _count?: true | SocieteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocieteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocieteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocieteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocieteMaxAggregateInputType
  }

  export type GetSocieteAggregateType<T extends SocieteAggregateArgs> = {
        [P in keyof T & keyof AggregateSociete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSociete[P]>
      : GetScalarType<T[P], AggregateSociete[P]>
  }




  export type societeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: societeWhereInput
    orderBy?: societeOrderByWithAggregationInput | societeOrderByWithAggregationInput[]
    by: SocieteScalarFieldEnum[] | SocieteScalarFieldEnum
    having?: societeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocieteCountAggregateInputType | true
    _avg?: SocieteAvgAggregateInputType
    _sum?: SocieteSumAggregateInputType
    _min?: SocieteMinAggregateInputType
    _max?: SocieteMaxAggregateInputType
  }

  export type SocieteGroupByOutputType = {
    id: number
    uuid: string
    code_societe: string | null
    raison_sociale_societe: string | null
    ncc: string | null
    rccm: string | null
    regime_imposition: string | null
    centre_impot: string | null
    ref_bancaire: string | null
    adresse: string | null
    telephone: string | null
    email: string | null
    cree_le: Date | null
    modifie_le: Date | null
    bd_host: string | null
    bd_name: string | null
    bd_user: string | null
    bd_pass: string | null
    bd_port: number | null
    logo_url: string | null
    statut_id: number | null
    _count: SocieteCountAggregateOutputType | null
    _avg: SocieteAvgAggregateOutputType | null
    _sum: SocieteSumAggregateOutputType | null
    _min: SocieteMinAggregateOutputType | null
    _max: SocieteMaxAggregateOutputType | null
  }

  type GetSocieteGroupByPayload<T extends societeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocieteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocieteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocieteGroupByOutputType[P]>
            : GetScalarType<T[P], SocieteGroupByOutputType[P]>
        }
      >
    >


  export type societeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code_societe?: boolean
    raison_sociale_societe?: boolean
    ncc?: boolean
    rccm?: boolean
    regime_imposition?: boolean
    centre_impot?: boolean
    ref_bancaire?: boolean
    adresse?: boolean
    telephone?: boolean
    email?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    bd_host?: boolean
    bd_name?: boolean
    bd_user?: boolean
    bd_pass?: boolean
    bd_port?: boolean
    logo_url?: boolean
    statut_id?: boolean
    statut?: boolean | societe$statutArgs<ExtArgs>
    configuration?: boolean | societe$configurationArgs<ExtArgs>
    etablissement?: boolean | societe$etablissementArgs<ExtArgs>
    utilisateur_client?: boolean | societe$utilisateur_clientArgs<ExtArgs>
    licences?: boolean | societe$licencesArgs<ExtArgs>
    stickers?: boolean | societe$stickersArgs<ExtArgs>
    _count?: boolean | SocieteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["societe"]>



  export type societeSelectScalar = {
    id?: boolean
    uuid?: boolean
    code_societe?: boolean
    raison_sociale_societe?: boolean
    ncc?: boolean
    rccm?: boolean
    regime_imposition?: boolean
    centre_impot?: boolean
    ref_bancaire?: boolean
    adresse?: boolean
    telephone?: boolean
    email?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    bd_host?: boolean
    bd_name?: boolean
    bd_user?: boolean
    bd_pass?: boolean
    bd_port?: boolean
    logo_url?: boolean
    statut_id?: boolean
  }

  export type societeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code_societe" | "raison_sociale_societe" | "ncc" | "rccm" | "regime_imposition" | "centre_impot" | "ref_bancaire" | "adresse" | "telephone" | "email" | "cree_le" | "modifie_le" | "bd_host" | "bd_name" | "bd_user" | "bd_pass" | "bd_port" | "logo_url" | "statut_id", ExtArgs["result"]["societe"]>
  export type societeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statut?: boolean | societe$statutArgs<ExtArgs>
    configuration?: boolean | societe$configurationArgs<ExtArgs>
    etablissement?: boolean | societe$etablissementArgs<ExtArgs>
    utilisateur_client?: boolean | societe$utilisateur_clientArgs<ExtArgs>
    licences?: boolean | societe$licencesArgs<ExtArgs>
    stickers?: boolean | societe$stickersArgs<ExtArgs>
    _count?: boolean | SocieteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $societePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "societe"
    objects: {
      statut: Prisma.$statutPayload<ExtArgs> | null
      configuration: Prisma.$configurationPayload<ExtArgs> | null
      etablissement: Prisma.$etablissementPayload<ExtArgs>[]
      utilisateur_client: Prisma.$utilisateur_clientPayload<ExtArgs>[]
      licences: Prisma.$licencePayload<ExtArgs>[]
      stickers: Prisma.$stickerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      code_societe: string | null
      raison_sociale_societe: string | null
      ncc: string | null
      rccm: string | null
      regime_imposition: string | null
      centre_impot: string | null
      ref_bancaire: string | null
      adresse: string | null
      telephone: string | null
      email: string | null
      cree_le: Date | null
      modifie_le: Date | null
      bd_host: string | null
      bd_name: string | null
      bd_user: string | null
      bd_pass: string | null
      bd_port: number | null
      logo_url: string | null
      statut_id: number | null
    }, ExtArgs["result"]["societe"]>
    composites: {}
  }

  type societeGetPayload<S extends boolean | null | undefined | societeDefaultArgs> = $Result.GetResult<Prisma.$societePayload, S>

  type societeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<societeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocieteCountAggregateInputType | true
    }

  export interface societeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['societe'], meta: { name: 'societe' } }
    /**
     * Find zero or one Societe that matches the filter.
     * @param {societeFindUniqueArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends societeFindUniqueArgs>(args: SelectSubset<T, societeFindUniqueArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Societe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {societeFindUniqueOrThrowArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends societeFindUniqueOrThrowArgs>(args: SelectSubset<T, societeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Societe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {societeFindFirstArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends societeFindFirstArgs>(args?: SelectSubset<T, societeFindFirstArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Societe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {societeFindFirstOrThrowArgs} args - Arguments to find a Societe
     * @example
     * // Get one Societe
     * const societe = await prisma.societe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends societeFindFirstOrThrowArgs>(args?: SelectSubset<T, societeFindFirstOrThrowArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Societes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {societeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Societes
     * const societes = await prisma.societe.findMany()
     * 
     * // Get first 10 Societes
     * const societes = await prisma.societe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const societeWithIdOnly = await prisma.societe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends societeFindManyArgs>(args?: SelectSubset<T, societeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Societe.
     * @param {societeCreateArgs} args - Arguments to create a Societe.
     * @example
     * // Create one Societe
     * const Societe = await prisma.societe.create({
     *   data: {
     *     // ... data to create a Societe
     *   }
     * })
     * 
     */
    create<T extends societeCreateArgs>(args: SelectSubset<T, societeCreateArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Societes.
     * @param {societeCreateManyArgs} args - Arguments to create many Societes.
     * @example
     * // Create many Societes
     * const societe = await prisma.societe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends societeCreateManyArgs>(args?: SelectSubset<T, societeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Societe.
     * @param {societeDeleteArgs} args - Arguments to delete one Societe.
     * @example
     * // Delete one Societe
     * const Societe = await prisma.societe.delete({
     *   where: {
     *     // ... filter to delete one Societe
     *   }
     * })
     * 
     */
    delete<T extends societeDeleteArgs>(args: SelectSubset<T, societeDeleteArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Societe.
     * @param {societeUpdateArgs} args - Arguments to update one Societe.
     * @example
     * // Update one Societe
     * const societe = await prisma.societe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends societeUpdateArgs>(args: SelectSubset<T, societeUpdateArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Societes.
     * @param {societeDeleteManyArgs} args - Arguments to filter Societes to delete.
     * @example
     * // Delete a few Societes
     * const { count } = await prisma.societe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends societeDeleteManyArgs>(args?: SelectSubset<T, societeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Societes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {societeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Societes
     * const societe = await prisma.societe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends societeUpdateManyArgs>(args: SelectSubset<T, societeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Societe.
     * @param {societeUpsertArgs} args - Arguments to update or create a Societe.
     * @example
     * // Update or create a Societe
     * const societe = await prisma.societe.upsert({
     *   create: {
     *     // ... data to create a Societe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Societe we want to update
     *   }
     * })
     */
    upsert<T extends societeUpsertArgs>(args: SelectSubset<T, societeUpsertArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Societes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {societeCountArgs} args - Arguments to filter Societes to count.
     * @example
     * // Count the number of Societes
     * const count = await prisma.societe.count({
     *   where: {
     *     // ... the filter for the Societes we want to count
     *   }
     * })
    **/
    count<T extends societeCountArgs>(
      args?: Subset<T, societeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocieteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Societe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocieteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocieteAggregateArgs>(args: Subset<T, SocieteAggregateArgs>): Prisma.PrismaPromise<GetSocieteAggregateType<T>>

    /**
     * Group by Societe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {societeGroupByArgs} args - Group by arguments.
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
      T extends societeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: societeGroupByArgs['orderBy'] }
        : { orderBy?: societeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, societeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocieteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the societe model
   */
  readonly fields: societeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for societe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__societeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statut<T extends societe$statutArgs<ExtArgs> = {}>(args?: Subset<T, societe$statutArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    configuration<T extends societe$configurationArgs<ExtArgs> = {}>(args?: Subset<T, societe$configurationArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    etablissement<T extends societe$etablissementArgs<ExtArgs> = {}>(args?: Subset<T, societe$etablissementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilisateur_client<T extends societe$utilisateur_clientArgs<ExtArgs> = {}>(args?: Subset<T, societe$utilisateur_clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licences<T extends societe$licencesArgs<ExtArgs> = {}>(args?: Subset<T, societe$licencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stickers<T extends societe$stickersArgs<ExtArgs> = {}>(args?: Subset<T, societe$stickersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the societe model
   */
  interface societeFieldRefs {
    readonly id: FieldRef<"societe", 'Int'>
    readonly uuid: FieldRef<"societe", 'String'>
    readonly code_societe: FieldRef<"societe", 'String'>
    readonly raison_sociale_societe: FieldRef<"societe", 'String'>
    readonly ncc: FieldRef<"societe", 'String'>
    readonly rccm: FieldRef<"societe", 'String'>
    readonly regime_imposition: FieldRef<"societe", 'String'>
    readonly centre_impot: FieldRef<"societe", 'String'>
    readonly ref_bancaire: FieldRef<"societe", 'String'>
    readonly adresse: FieldRef<"societe", 'String'>
    readonly telephone: FieldRef<"societe", 'String'>
    readonly email: FieldRef<"societe", 'String'>
    readonly cree_le: FieldRef<"societe", 'DateTime'>
    readonly modifie_le: FieldRef<"societe", 'DateTime'>
    readonly bd_host: FieldRef<"societe", 'String'>
    readonly bd_name: FieldRef<"societe", 'String'>
    readonly bd_user: FieldRef<"societe", 'String'>
    readonly bd_pass: FieldRef<"societe", 'String'>
    readonly bd_port: FieldRef<"societe", 'Int'>
    readonly logo_url: FieldRef<"societe", 'String'>
    readonly statut_id: FieldRef<"societe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * societe findUnique
   */
  export type societeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * Filter, which societe to fetch.
     */
    where: societeWhereUniqueInput
  }

  /**
   * societe findUniqueOrThrow
   */
  export type societeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * Filter, which societe to fetch.
     */
    where: societeWhereUniqueInput
  }

  /**
   * societe findFirst
   */
  export type societeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * Filter, which societe to fetch.
     */
    where?: societeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of societes to fetch.
     */
    orderBy?: societeOrderByWithRelationInput | societeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for societes.
     */
    cursor?: societeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` societes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of societes.
     */
    distinct?: SocieteScalarFieldEnum | SocieteScalarFieldEnum[]
  }

  /**
   * societe findFirstOrThrow
   */
  export type societeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * Filter, which societe to fetch.
     */
    where?: societeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of societes to fetch.
     */
    orderBy?: societeOrderByWithRelationInput | societeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for societes.
     */
    cursor?: societeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` societes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of societes.
     */
    distinct?: SocieteScalarFieldEnum | SocieteScalarFieldEnum[]
  }

  /**
   * societe findMany
   */
  export type societeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * Filter, which societes to fetch.
     */
    where?: societeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of societes to fetch.
     */
    orderBy?: societeOrderByWithRelationInput | societeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing societes.
     */
    cursor?: societeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` societes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` societes.
     */
    skip?: number
    distinct?: SocieteScalarFieldEnum | SocieteScalarFieldEnum[]
  }

  /**
   * societe create
   */
  export type societeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * The data needed to create a societe.
     */
    data?: XOR<societeCreateInput, societeUncheckedCreateInput>
  }

  /**
   * societe createMany
   */
  export type societeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many societes.
     */
    data: societeCreateManyInput | societeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * societe update
   */
  export type societeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * The data needed to update a societe.
     */
    data: XOR<societeUpdateInput, societeUncheckedUpdateInput>
    /**
     * Choose, which societe to update.
     */
    where: societeWhereUniqueInput
  }

  /**
   * societe updateMany
   */
  export type societeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update societes.
     */
    data: XOR<societeUpdateManyMutationInput, societeUncheckedUpdateManyInput>
    /**
     * Filter which societes to update
     */
    where?: societeWhereInput
    /**
     * Limit how many societes to update.
     */
    limit?: number
  }

  /**
   * societe upsert
   */
  export type societeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * The filter to search for the societe to update in case it exists.
     */
    where: societeWhereUniqueInput
    /**
     * In case the societe found by the `where` argument doesn't exist, create a new societe with this data.
     */
    create: XOR<societeCreateInput, societeUncheckedCreateInput>
    /**
     * In case the societe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<societeUpdateInput, societeUncheckedUpdateInput>
  }

  /**
   * societe delete
   */
  export type societeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    /**
     * Filter which societe to delete.
     */
    where: societeWhereUniqueInput
  }

  /**
   * societe deleteMany
   */
  export type societeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which societes to delete
     */
    where?: societeWhereInput
    /**
     * Limit how many societes to delete.
     */
    limit?: number
  }

  /**
   * societe.statut
   */
  export type societe$statutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    where?: statutWhereInput
  }

  /**
   * societe.configuration
   */
  export type societe$configurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    where?: configurationWhereInput
  }

  /**
   * societe.etablissement
   */
  export type societe$etablissementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    where?: etablissementWhereInput
    orderBy?: etablissementOrderByWithRelationInput | etablissementOrderByWithRelationInput[]
    cursor?: etablissementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * societe.utilisateur_client
   */
  export type societe$utilisateur_clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    where?: utilisateur_clientWhereInput
    orderBy?: utilisateur_clientOrderByWithRelationInput | utilisateur_clientOrderByWithRelationInput[]
    cursor?: utilisateur_clientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Utilisateur_clientScalarFieldEnum | Utilisateur_clientScalarFieldEnum[]
  }

  /**
   * societe.licences
   */
  export type societe$licencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    where?: licenceWhereInput
    orderBy?: licenceOrderByWithRelationInput | licenceOrderByWithRelationInput[]
    cursor?: licenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * societe.stickers
   */
  export type societe$stickersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    where?: stickerWhereInput
    orderBy?: stickerOrderByWithRelationInput | stickerOrderByWithRelationInput[]
    cursor?: stickerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StickerScalarFieldEnum | StickerScalarFieldEnum[]
  }

  /**
   * societe without action
   */
  export type societeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
  }


  /**
   * Model etablissement
   */

  export type AggregateEtablissement = {
    _count: EtablissementCountAggregateOutputType | null
    _avg: EtablissementAvgAggregateOutputType | null
    _sum: EtablissementSumAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  export type EtablissementAvgAggregateOutputType = {
    id: number | null
    societe_id: number | null
  }

  export type EtablissementSumAggregateOutputType = {
    id: number | null
    societe_id: number | null
  }

  export type EtablissementMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    code_etablissement: string | null
    libelle_etablissement: string | null
    localite_etablissement: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type EtablissementMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    code_etablissement: string | null
    libelle_etablissement: string | null
    localite_etablissement: string | null
    cree_le: Date | null
    modifie_le: Date | null
  }

  export type EtablissementCountAggregateOutputType = {
    id: number
    uuid: number
    societe_id: number
    code_etablissement: number
    libelle_etablissement: number
    localite_etablissement: number
    cree_le: number
    modifie_le: number
    _all: number
  }


  export type EtablissementAvgAggregateInputType = {
    id?: true
    societe_id?: true
  }

  export type EtablissementSumAggregateInputType = {
    id?: true
    societe_id?: true
  }

  export type EtablissementMinAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    code_etablissement?: true
    libelle_etablissement?: true
    localite_etablissement?: true
    cree_le?: true
    modifie_le?: true
  }

  export type EtablissementMaxAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    code_etablissement?: true
    libelle_etablissement?: true
    localite_etablissement?: true
    cree_le?: true
    modifie_le?: true
  }

  export type EtablissementCountAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    code_etablissement?: true
    libelle_etablissement?: true
    localite_etablissement?: true
    cree_le?: true
    modifie_le?: true
    _all?: true
  }

  export type EtablissementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which etablissement to aggregate.
     */
    where?: etablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etablissements to fetch.
     */
    orderBy?: etablissementOrderByWithRelationInput | etablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: etablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned etablissements
    **/
    _count?: true | EtablissementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtablissementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtablissementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtablissementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtablissementMaxAggregateInputType
  }

  export type GetEtablissementAggregateType<T extends EtablissementAggregateArgs> = {
        [P in keyof T & keyof AggregateEtablissement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtablissement[P]>
      : GetScalarType<T[P], AggregateEtablissement[P]>
  }




  export type etablissementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: etablissementWhereInput
    orderBy?: etablissementOrderByWithAggregationInput | etablissementOrderByWithAggregationInput[]
    by: EtablissementScalarFieldEnum[] | EtablissementScalarFieldEnum
    having?: etablissementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtablissementCountAggregateInputType | true
    _avg?: EtablissementAvgAggregateInputType
    _sum?: EtablissementSumAggregateInputType
    _min?: EtablissementMinAggregateInputType
    _max?: EtablissementMaxAggregateInputType
  }

  export type EtablissementGroupByOutputType = {
    id: number
    uuid: string
    societe_id: number
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le: Date
    modifie_le: Date
    _count: EtablissementCountAggregateOutputType | null
    _avg: EtablissementAvgAggregateOutputType | null
    _sum: EtablissementSumAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  type GetEtablissementGroupByPayload<T extends etablissementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtablissementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtablissementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
            : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
        }
      >
    >


  export type etablissementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    code_etablissement?: boolean
    libelle_etablissement?: boolean
    localite_etablissement?: boolean
    cree_le?: boolean
    modifie_le?: boolean
    societe?: boolean | societeDefaultArgs<ExtArgs>
    point_vente?: boolean | etablissement$point_venteArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etablissement"]>



  export type etablissementSelectScalar = {
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    code_etablissement?: boolean
    libelle_etablissement?: boolean
    localite_etablissement?: boolean
    cree_le?: boolean
    modifie_le?: boolean
  }

  export type etablissementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "societe_id" | "code_etablissement" | "libelle_etablissement" | "localite_etablissement" | "cree_le" | "modifie_le", ExtArgs["result"]["etablissement"]>
  export type etablissementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    societe?: boolean | societeDefaultArgs<ExtArgs>
    point_vente?: boolean | etablissement$point_venteArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $etablissementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "etablissement"
    objects: {
      societe: Prisma.$societePayload<ExtArgs>
      point_vente: Prisma.$point_ventePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      societe_id: number
      code_etablissement: string
      libelle_etablissement: string
      localite_etablissement: string
      cree_le: Date
      modifie_le: Date
    }, ExtArgs["result"]["etablissement"]>
    composites: {}
  }

  type etablissementGetPayload<S extends boolean | null | undefined | etablissementDefaultArgs> = $Result.GetResult<Prisma.$etablissementPayload, S>

  type etablissementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<etablissementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtablissementCountAggregateInputType | true
    }

  export interface etablissementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['etablissement'], meta: { name: 'etablissement' } }
    /**
     * Find zero or one Etablissement that matches the filter.
     * @param {etablissementFindUniqueArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends etablissementFindUniqueArgs>(args: SelectSubset<T, etablissementFindUniqueArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etablissement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {etablissementFindUniqueOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends etablissementFindUniqueOrThrowArgs>(args: SelectSubset<T, etablissementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etablissementFindFirstArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends etablissementFindFirstArgs>(args?: SelectSubset<T, etablissementFindFirstArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etablissementFindFirstOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends etablissementFindFirstOrThrowArgs>(args?: SelectSubset<T, etablissementFindFirstOrThrowArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etablissements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etablissementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etablissements
     * const etablissements = await prisma.etablissement.findMany()
     * 
     * // Get first 10 Etablissements
     * const etablissements = await prisma.etablissement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends etablissementFindManyArgs>(args?: SelectSubset<T, etablissementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etablissement.
     * @param {etablissementCreateArgs} args - Arguments to create a Etablissement.
     * @example
     * // Create one Etablissement
     * const Etablissement = await prisma.etablissement.create({
     *   data: {
     *     // ... data to create a Etablissement
     *   }
     * })
     * 
     */
    create<T extends etablissementCreateArgs>(args: SelectSubset<T, etablissementCreateArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etablissements.
     * @param {etablissementCreateManyArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends etablissementCreateManyArgs>(args?: SelectSubset<T, etablissementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Etablissement.
     * @param {etablissementDeleteArgs} args - Arguments to delete one Etablissement.
     * @example
     * // Delete one Etablissement
     * const Etablissement = await prisma.etablissement.delete({
     *   where: {
     *     // ... filter to delete one Etablissement
     *   }
     * })
     * 
     */
    delete<T extends etablissementDeleteArgs>(args: SelectSubset<T, etablissementDeleteArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etablissement.
     * @param {etablissementUpdateArgs} args - Arguments to update one Etablissement.
     * @example
     * // Update one Etablissement
     * const etablissement = await prisma.etablissement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends etablissementUpdateArgs>(args: SelectSubset<T, etablissementUpdateArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etablissements.
     * @param {etablissementDeleteManyArgs} args - Arguments to filter Etablissements to delete.
     * @example
     * // Delete a few Etablissements
     * const { count } = await prisma.etablissement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends etablissementDeleteManyArgs>(args?: SelectSubset<T, etablissementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etablissementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends etablissementUpdateManyArgs>(args: SelectSubset<T, etablissementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Etablissement.
     * @param {etablissementUpsertArgs} args - Arguments to update or create a Etablissement.
     * @example
     * // Update or create a Etablissement
     * const etablissement = await prisma.etablissement.upsert({
     *   create: {
     *     // ... data to create a Etablissement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etablissement we want to update
     *   }
     * })
     */
    upsert<T extends etablissementUpsertArgs>(args: SelectSubset<T, etablissementUpsertArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etablissementCountArgs} args - Arguments to filter Etablissements to count.
     * @example
     * // Count the number of Etablissements
     * const count = await prisma.etablissement.count({
     *   where: {
     *     // ... the filter for the Etablissements we want to count
     *   }
     * })
    **/
    count<T extends etablissementCountArgs>(
      args?: Subset<T, etablissementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtablissementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtablissementAggregateArgs>(args: Subset<T, EtablissementAggregateArgs>): Prisma.PrismaPromise<GetEtablissementAggregateType<T>>

    /**
     * Group by Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {etablissementGroupByArgs} args - Group by arguments.
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
      T extends etablissementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: etablissementGroupByArgs['orderBy'] }
        : { orderBy?: etablissementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, etablissementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtablissementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the etablissement model
   */
  readonly fields: etablissementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for etablissement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__etablissementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    societe<T extends societeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, societeDefaultArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    point_vente<T extends etablissement$point_venteArgs<ExtArgs> = {}>(args?: Subset<T, etablissement$point_venteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the etablissement model
   */
  interface etablissementFieldRefs {
    readonly id: FieldRef<"etablissement", 'Int'>
    readonly uuid: FieldRef<"etablissement", 'String'>
    readonly societe_id: FieldRef<"etablissement", 'Int'>
    readonly code_etablissement: FieldRef<"etablissement", 'String'>
    readonly libelle_etablissement: FieldRef<"etablissement", 'String'>
    readonly localite_etablissement: FieldRef<"etablissement", 'String'>
    readonly cree_le: FieldRef<"etablissement", 'DateTime'>
    readonly modifie_le: FieldRef<"etablissement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * etablissement findUnique
   */
  export type etablissementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * Filter, which etablissement to fetch.
     */
    where: etablissementWhereUniqueInput
  }

  /**
   * etablissement findUniqueOrThrow
   */
  export type etablissementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * Filter, which etablissement to fetch.
     */
    where: etablissementWhereUniqueInput
  }

  /**
   * etablissement findFirst
   */
  export type etablissementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * Filter, which etablissement to fetch.
     */
    where?: etablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etablissements to fetch.
     */
    orderBy?: etablissementOrderByWithRelationInput | etablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for etablissements.
     */
    cursor?: etablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * etablissement findFirstOrThrow
   */
  export type etablissementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * Filter, which etablissement to fetch.
     */
    where?: etablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etablissements to fetch.
     */
    orderBy?: etablissementOrderByWithRelationInput | etablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for etablissements.
     */
    cursor?: etablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * etablissement findMany
   */
  export type etablissementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * Filter, which etablissements to fetch.
     */
    where?: etablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of etablissements to fetch.
     */
    orderBy?: etablissementOrderByWithRelationInput | etablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing etablissements.
     */
    cursor?: etablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` etablissements.
     */
    skip?: number
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * etablissement create
   */
  export type etablissementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * The data needed to create a etablissement.
     */
    data: XOR<etablissementCreateInput, etablissementUncheckedCreateInput>
  }

  /**
   * etablissement createMany
   */
  export type etablissementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many etablissements.
     */
    data: etablissementCreateManyInput | etablissementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * etablissement update
   */
  export type etablissementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * The data needed to update a etablissement.
     */
    data: XOR<etablissementUpdateInput, etablissementUncheckedUpdateInput>
    /**
     * Choose, which etablissement to update.
     */
    where: etablissementWhereUniqueInput
  }

  /**
   * etablissement updateMany
   */
  export type etablissementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update etablissements.
     */
    data: XOR<etablissementUpdateManyMutationInput, etablissementUncheckedUpdateManyInput>
    /**
     * Filter which etablissements to update
     */
    where?: etablissementWhereInput
    /**
     * Limit how many etablissements to update.
     */
    limit?: number
  }

  /**
   * etablissement upsert
   */
  export type etablissementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * The filter to search for the etablissement to update in case it exists.
     */
    where: etablissementWhereUniqueInput
    /**
     * In case the etablissement found by the `where` argument doesn't exist, create a new etablissement with this data.
     */
    create: XOR<etablissementCreateInput, etablissementUncheckedCreateInput>
    /**
     * In case the etablissement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<etablissementUpdateInput, etablissementUncheckedUpdateInput>
  }

  /**
   * etablissement delete
   */
  export type etablissementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
    /**
     * Filter which etablissement to delete.
     */
    where: etablissementWhereUniqueInput
  }

  /**
   * etablissement deleteMany
   */
  export type etablissementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which etablissements to delete
     */
    where?: etablissementWhereInput
    /**
     * Limit how many etablissements to delete.
     */
    limit?: number
  }

  /**
   * etablissement.point_vente
   */
  export type etablissement$point_venteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    where?: point_venteWhereInput
    orderBy?: point_venteOrderByWithRelationInput | point_venteOrderByWithRelationInput[]
    cursor?: point_venteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Point_venteScalarFieldEnum | Point_venteScalarFieldEnum[]
  }

  /**
   * etablissement without action
   */
  export type etablissementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the etablissement
     */
    select?: etablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the etablissement
     */
    omit?: etablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: etablissementInclude<ExtArgs> | null
  }


  /**
   * Model point_vente
   */

  export type AggregatePoint_vente = {
    _count: Point_venteCountAggregateOutputType | null
    _avg: Point_venteAvgAggregateOutputType | null
    _sum: Point_venteSumAggregateOutputType | null
    _min: Point_venteMinAggregateOutputType | null
    _max: Point_venteMaxAggregateOutputType | null
  }

  export type Point_venteAvgAggregateOutputType = {
    id: number | null
    etablissement_id: number | null
  }

  export type Point_venteSumAggregateOutputType = {
    id: number | null
    etablissement_id: number | null
  }

  export type Point_venteMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    etablissement_id: number | null
    libelle_pdv: string | null
    cree_le: Date | null
  }

  export type Point_venteMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    etablissement_id: number | null
    libelle_pdv: string | null
    cree_le: Date | null
  }

  export type Point_venteCountAggregateOutputType = {
    id: number
    uuid: number
    etablissement_id: number
    libelle_pdv: number
    cree_le: number
    _all: number
  }


  export type Point_venteAvgAggregateInputType = {
    id?: true
    etablissement_id?: true
  }

  export type Point_venteSumAggregateInputType = {
    id?: true
    etablissement_id?: true
  }

  export type Point_venteMinAggregateInputType = {
    id?: true
    uuid?: true
    etablissement_id?: true
    libelle_pdv?: true
    cree_le?: true
  }

  export type Point_venteMaxAggregateInputType = {
    id?: true
    uuid?: true
    etablissement_id?: true
    libelle_pdv?: true
    cree_le?: true
  }

  export type Point_venteCountAggregateInputType = {
    id?: true
    uuid?: true
    etablissement_id?: true
    libelle_pdv?: true
    cree_le?: true
    _all?: true
  }

  export type Point_venteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which point_vente to aggregate.
     */
    where?: point_venteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_ventes to fetch.
     */
    orderBy?: point_venteOrderByWithRelationInput | point_venteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: point_venteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_ventes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned point_ventes
    **/
    _count?: true | Point_venteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Point_venteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Point_venteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Point_venteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Point_venteMaxAggregateInputType
  }

  export type GetPoint_venteAggregateType<T extends Point_venteAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint_vente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint_vente[P]>
      : GetScalarType<T[P], AggregatePoint_vente[P]>
  }




  export type point_venteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: point_venteWhereInput
    orderBy?: point_venteOrderByWithAggregationInput | point_venteOrderByWithAggregationInput[]
    by: Point_venteScalarFieldEnum[] | Point_venteScalarFieldEnum
    having?: point_venteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Point_venteCountAggregateInputType | true
    _avg?: Point_venteAvgAggregateInputType
    _sum?: Point_venteSumAggregateInputType
    _min?: Point_venteMinAggregateInputType
    _max?: Point_venteMaxAggregateInputType
  }

  export type Point_venteGroupByOutputType = {
    id: number
    uuid: string
    etablissement_id: number
    libelle_pdv: string
    cree_le: Date
    _count: Point_venteCountAggregateOutputType | null
    _avg: Point_venteAvgAggregateOutputType | null
    _sum: Point_venteSumAggregateOutputType | null
    _min: Point_venteMinAggregateOutputType | null
    _max: Point_venteMaxAggregateOutputType | null
  }

  type GetPoint_venteGroupByPayload<T extends point_venteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Point_venteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Point_venteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Point_venteGroupByOutputType[P]>
            : GetScalarType<T[P], Point_venteGroupByOutputType[P]>
        }
      >
    >


  export type point_venteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    etablissement_id?: boolean
    libelle_pdv?: boolean
    cree_le?: boolean
    etablissement?: boolean | etablissementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point_vente"]>



  export type point_venteSelectScalar = {
    id?: boolean
    uuid?: boolean
    etablissement_id?: boolean
    libelle_pdv?: boolean
    cree_le?: boolean
  }

  export type point_venteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "etablissement_id" | "libelle_pdv" | "cree_le", ExtArgs["result"]["point_vente"]>
  export type point_venteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etablissement?: boolean | etablissementDefaultArgs<ExtArgs>
  }

  export type $point_ventePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "point_vente"
    objects: {
      etablissement: Prisma.$etablissementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      etablissement_id: number
      libelle_pdv: string
      cree_le: Date
    }, ExtArgs["result"]["point_vente"]>
    composites: {}
  }

  type point_venteGetPayload<S extends boolean | null | undefined | point_venteDefaultArgs> = $Result.GetResult<Prisma.$point_ventePayload, S>

  type point_venteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<point_venteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Point_venteCountAggregateInputType | true
    }

  export interface point_venteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['point_vente'], meta: { name: 'point_vente' } }
    /**
     * Find zero or one Point_vente that matches the filter.
     * @param {point_venteFindUniqueArgs} args - Arguments to find a Point_vente
     * @example
     * // Get one Point_vente
     * const point_vente = await prisma.point_vente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends point_venteFindUniqueArgs>(args: SelectSubset<T, point_venteFindUniqueArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point_vente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {point_venteFindUniqueOrThrowArgs} args - Arguments to find a Point_vente
     * @example
     * // Get one Point_vente
     * const point_vente = await prisma.point_vente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends point_venteFindUniqueOrThrowArgs>(args: SelectSubset<T, point_venteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point_vente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_venteFindFirstArgs} args - Arguments to find a Point_vente
     * @example
     * // Get one Point_vente
     * const point_vente = await prisma.point_vente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends point_venteFindFirstArgs>(args?: SelectSubset<T, point_venteFindFirstArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point_vente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_venteFindFirstOrThrowArgs} args - Arguments to find a Point_vente
     * @example
     * // Get one Point_vente
     * const point_vente = await prisma.point_vente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends point_venteFindFirstOrThrowArgs>(args?: SelectSubset<T, point_venteFindFirstOrThrowArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Point_ventes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_venteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Point_ventes
     * const point_ventes = await prisma.point_vente.findMany()
     * 
     * // Get first 10 Point_ventes
     * const point_ventes = await prisma.point_vente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const point_venteWithIdOnly = await prisma.point_vente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends point_venteFindManyArgs>(args?: SelectSubset<T, point_venteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point_vente.
     * @param {point_venteCreateArgs} args - Arguments to create a Point_vente.
     * @example
     * // Create one Point_vente
     * const Point_vente = await prisma.point_vente.create({
     *   data: {
     *     // ... data to create a Point_vente
     *   }
     * })
     * 
     */
    create<T extends point_venteCreateArgs>(args: SelectSubset<T, point_venteCreateArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Point_ventes.
     * @param {point_venteCreateManyArgs} args - Arguments to create many Point_ventes.
     * @example
     * // Create many Point_ventes
     * const point_vente = await prisma.point_vente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends point_venteCreateManyArgs>(args?: SelectSubset<T, point_venteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Point_vente.
     * @param {point_venteDeleteArgs} args - Arguments to delete one Point_vente.
     * @example
     * // Delete one Point_vente
     * const Point_vente = await prisma.point_vente.delete({
     *   where: {
     *     // ... filter to delete one Point_vente
     *   }
     * })
     * 
     */
    delete<T extends point_venteDeleteArgs>(args: SelectSubset<T, point_venteDeleteArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point_vente.
     * @param {point_venteUpdateArgs} args - Arguments to update one Point_vente.
     * @example
     * // Update one Point_vente
     * const point_vente = await prisma.point_vente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends point_venteUpdateArgs>(args: SelectSubset<T, point_venteUpdateArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Point_ventes.
     * @param {point_venteDeleteManyArgs} args - Arguments to filter Point_ventes to delete.
     * @example
     * // Delete a few Point_ventes
     * const { count } = await prisma.point_vente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends point_venteDeleteManyArgs>(args?: SelectSubset<T, point_venteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Point_ventes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_venteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Point_ventes
     * const point_vente = await prisma.point_vente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends point_venteUpdateManyArgs>(args: SelectSubset<T, point_venteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Point_vente.
     * @param {point_venteUpsertArgs} args - Arguments to update or create a Point_vente.
     * @example
     * // Update or create a Point_vente
     * const point_vente = await prisma.point_vente.upsert({
     *   create: {
     *     // ... data to create a Point_vente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point_vente we want to update
     *   }
     * })
     */
    upsert<T extends point_venteUpsertArgs>(args: SelectSubset<T, point_venteUpsertArgs<ExtArgs>>): Prisma__point_venteClient<$Result.GetResult<Prisma.$point_ventePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Point_ventes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_venteCountArgs} args - Arguments to filter Point_ventes to count.
     * @example
     * // Count the number of Point_ventes
     * const count = await prisma.point_vente.count({
     *   where: {
     *     // ... the filter for the Point_ventes we want to count
     *   }
     * })
    **/
    count<T extends point_venteCountArgs>(
      args?: Subset<T, point_venteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Point_venteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point_vente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Point_venteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Point_venteAggregateArgs>(args: Subset<T, Point_venteAggregateArgs>): Prisma.PrismaPromise<GetPoint_venteAggregateType<T>>

    /**
     * Group by Point_vente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_venteGroupByArgs} args - Group by arguments.
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
      T extends point_venteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: point_venteGroupByArgs['orderBy'] }
        : { orderBy?: point_venteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, point_venteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoint_venteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the point_vente model
   */
  readonly fields: point_venteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for point_vente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__point_venteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etablissement<T extends etablissementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, etablissementDefaultArgs<ExtArgs>>): Prisma__etablissementClient<$Result.GetResult<Prisma.$etablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the point_vente model
   */
  interface point_venteFieldRefs {
    readonly id: FieldRef<"point_vente", 'Int'>
    readonly uuid: FieldRef<"point_vente", 'String'>
    readonly etablissement_id: FieldRef<"point_vente", 'Int'>
    readonly libelle_pdv: FieldRef<"point_vente", 'String'>
    readonly cree_le: FieldRef<"point_vente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * point_vente findUnique
   */
  export type point_venteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * Filter, which point_vente to fetch.
     */
    where: point_venteWhereUniqueInput
  }

  /**
   * point_vente findUniqueOrThrow
   */
  export type point_venteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * Filter, which point_vente to fetch.
     */
    where: point_venteWhereUniqueInput
  }

  /**
   * point_vente findFirst
   */
  export type point_venteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * Filter, which point_vente to fetch.
     */
    where?: point_venteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_ventes to fetch.
     */
    orderBy?: point_venteOrderByWithRelationInput | point_venteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for point_ventes.
     */
    cursor?: point_venteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_ventes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of point_ventes.
     */
    distinct?: Point_venteScalarFieldEnum | Point_venteScalarFieldEnum[]
  }

  /**
   * point_vente findFirstOrThrow
   */
  export type point_venteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * Filter, which point_vente to fetch.
     */
    where?: point_venteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_ventes to fetch.
     */
    orderBy?: point_venteOrderByWithRelationInput | point_venteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for point_ventes.
     */
    cursor?: point_venteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_ventes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of point_ventes.
     */
    distinct?: Point_venteScalarFieldEnum | Point_venteScalarFieldEnum[]
  }

  /**
   * point_vente findMany
   */
  export type point_venteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * Filter, which point_ventes to fetch.
     */
    where?: point_venteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_ventes to fetch.
     */
    orderBy?: point_venteOrderByWithRelationInput | point_venteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing point_ventes.
     */
    cursor?: point_venteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_ventes.
     */
    skip?: number
    distinct?: Point_venteScalarFieldEnum | Point_venteScalarFieldEnum[]
  }

  /**
   * point_vente create
   */
  export type point_venteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * The data needed to create a point_vente.
     */
    data: XOR<point_venteCreateInput, point_venteUncheckedCreateInput>
  }

  /**
   * point_vente createMany
   */
  export type point_venteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many point_ventes.
     */
    data: point_venteCreateManyInput | point_venteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * point_vente update
   */
  export type point_venteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * The data needed to update a point_vente.
     */
    data: XOR<point_venteUpdateInput, point_venteUncheckedUpdateInput>
    /**
     * Choose, which point_vente to update.
     */
    where: point_venteWhereUniqueInput
  }

  /**
   * point_vente updateMany
   */
  export type point_venteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update point_ventes.
     */
    data: XOR<point_venteUpdateManyMutationInput, point_venteUncheckedUpdateManyInput>
    /**
     * Filter which point_ventes to update
     */
    where?: point_venteWhereInput
    /**
     * Limit how many point_ventes to update.
     */
    limit?: number
  }

  /**
   * point_vente upsert
   */
  export type point_venteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * The filter to search for the point_vente to update in case it exists.
     */
    where: point_venteWhereUniqueInput
    /**
     * In case the point_vente found by the `where` argument doesn't exist, create a new point_vente with this data.
     */
    create: XOR<point_venteCreateInput, point_venteUncheckedCreateInput>
    /**
     * In case the point_vente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<point_venteUpdateInput, point_venteUncheckedUpdateInput>
  }

  /**
   * point_vente delete
   */
  export type point_venteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
    /**
     * Filter which point_vente to delete.
     */
    where: point_venteWhereUniqueInput
  }

  /**
   * point_vente deleteMany
   */
  export type point_venteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which point_ventes to delete
     */
    where?: point_venteWhereInput
    /**
     * Limit how many point_ventes to delete.
     */
    limit?: number
  }

  /**
   * point_vente without action
   */
  export type point_venteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_vente
     */
    select?: point_venteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the point_vente
     */
    omit?: point_venteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: point_venteInclude<ExtArgs> | null
  }


  /**
   * Model licence
   */

  export type AggregateLicence = {
    _count: LicenceCountAggregateOutputType | null
    _avg: LicenceAvgAggregateOutputType | null
    _sum: LicenceSumAggregateOutputType | null
    _min: LicenceMinAggregateOutputType | null
    _max: LicenceMaxAggregateOutputType | null
  }

  export type LicenceAvgAggregateOutputType = {
    id: number | null
    societe_id: number | null
    statut_id: number | null
  }

  export type LicenceSumAggregateOutputType = {
    id: number | null
    societe_id: number | null
    statut_id: number | null
  }

  export type LicenceMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    cle: string | null
    date_expiration: Date | null
    statut_id: number | null
  }

  export type LicenceMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    cle: string | null
    date_expiration: Date | null
    statut_id: number | null
  }

  export type LicenceCountAggregateOutputType = {
    id: number
    uuid: number
    societe_id: number
    cle: number
    date_expiration: number
    statut_id: number
    _all: number
  }


  export type LicenceAvgAggregateInputType = {
    id?: true
    societe_id?: true
    statut_id?: true
  }

  export type LicenceSumAggregateInputType = {
    id?: true
    societe_id?: true
    statut_id?: true
  }

  export type LicenceMinAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    cle?: true
    date_expiration?: true
    statut_id?: true
  }

  export type LicenceMaxAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    cle?: true
    date_expiration?: true
    statut_id?: true
  }

  export type LicenceCountAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    cle?: true
    date_expiration?: true
    statut_id?: true
    _all?: true
  }

  export type LicenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which licence to aggregate.
     */
    where?: licenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licences to fetch.
     */
    orderBy?: licenceOrderByWithRelationInput | licenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: licenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned licences
    **/
    _count?: true | LicenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenceMaxAggregateInputType
  }

  export type GetLicenceAggregateType<T extends LicenceAggregateArgs> = {
        [P in keyof T & keyof AggregateLicence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicence[P]>
      : GetScalarType<T[P], AggregateLicence[P]>
  }




  export type licenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: licenceWhereInput
    orderBy?: licenceOrderByWithAggregationInput | licenceOrderByWithAggregationInput[]
    by: LicenceScalarFieldEnum[] | LicenceScalarFieldEnum
    having?: licenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenceCountAggregateInputType | true
    _avg?: LicenceAvgAggregateInputType
    _sum?: LicenceSumAggregateInputType
    _min?: LicenceMinAggregateInputType
    _max?: LicenceMaxAggregateInputType
  }

  export type LicenceGroupByOutputType = {
    id: number
    uuid: string
    societe_id: number
    cle: string
    date_expiration: Date | null
    statut_id: number | null
    _count: LicenceCountAggregateOutputType | null
    _avg: LicenceAvgAggregateOutputType | null
    _sum: LicenceSumAggregateOutputType | null
    _min: LicenceMinAggregateOutputType | null
    _max: LicenceMaxAggregateOutputType | null
  }

  type GetLicenceGroupByPayload<T extends licenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenceGroupByOutputType[P]>
            : GetScalarType<T[P], LicenceGroupByOutputType[P]>
        }
      >
    >


  export type licenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    cle?: boolean
    date_expiration?: boolean
    statut_id?: boolean
    societe?: boolean | societeDefaultArgs<ExtArgs>
    statut?: boolean | licence$statutArgs<ExtArgs>
  }, ExtArgs["result"]["licence"]>



  export type licenceSelectScalar = {
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    cle?: boolean
    date_expiration?: boolean
    statut_id?: boolean
  }

  export type licenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "societe_id" | "cle" | "date_expiration" | "statut_id", ExtArgs["result"]["licence"]>
  export type licenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    societe?: boolean | societeDefaultArgs<ExtArgs>
    statut?: boolean | licence$statutArgs<ExtArgs>
  }

  export type $licencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "licence"
    objects: {
      societe: Prisma.$societePayload<ExtArgs>
      statut: Prisma.$statutPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      societe_id: number
      cle: string
      date_expiration: Date | null
      statut_id: number | null
    }, ExtArgs["result"]["licence"]>
    composites: {}
  }

  type licenceGetPayload<S extends boolean | null | undefined | licenceDefaultArgs> = $Result.GetResult<Prisma.$licencePayload, S>

  type licenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<licenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenceCountAggregateInputType | true
    }

  export interface licenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['licence'], meta: { name: 'licence' } }
    /**
     * Find zero or one Licence that matches the filter.
     * @param {licenceFindUniqueArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends licenceFindUniqueArgs>(args: SelectSubset<T, licenceFindUniqueArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Licence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {licenceFindUniqueOrThrowArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends licenceFindUniqueOrThrowArgs>(args: SelectSubset<T, licenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenceFindFirstArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends licenceFindFirstArgs>(args?: SelectSubset<T, licenceFindFirstArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Licence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenceFindFirstOrThrowArgs} args - Arguments to find a Licence
     * @example
     * // Get one Licence
     * const licence = await prisma.licence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends licenceFindFirstOrThrowArgs>(args?: SelectSubset<T, licenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licences
     * const licences = await prisma.licence.findMany()
     * 
     * // Get first 10 Licences
     * const licences = await prisma.licence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenceWithIdOnly = await prisma.licence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends licenceFindManyArgs>(args?: SelectSubset<T, licenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Licence.
     * @param {licenceCreateArgs} args - Arguments to create a Licence.
     * @example
     * // Create one Licence
     * const Licence = await prisma.licence.create({
     *   data: {
     *     // ... data to create a Licence
     *   }
     * })
     * 
     */
    create<T extends licenceCreateArgs>(args: SelectSubset<T, licenceCreateArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licences.
     * @param {licenceCreateManyArgs} args - Arguments to create many Licences.
     * @example
     * // Create many Licences
     * const licence = await prisma.licence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends licenceCreateManyArgs>(args?: SelectSubset<T, licenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Licence.
     * @param {licenceDeleteArgs} args - Arguments to delete one Licence.
     * @example
     * // Delete one Licence
     * const Licence = await prisma.licence.delete({
     *   where: {
     *     // ... filter to delete one Licence
     *   }
     * })
     * 
     */
    delete<T extends licenceDeleteArgs>(args: SelectSubset<T, licenceDeleteArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Licence.
     * @param {licenceUpdateArgs} args - Arguments to update one Licence.
     * @example
     * // Update one Licence
     * const licence = await prisma.licence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends licenceUpdateArgs>(args: SelectSubset<T, licenceUpdateArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licences.
     * @param {licenceDeleteManyArgs} args - Arguments to filter Licences to delete.
     * @example
     * // Delete a few Licences
     * const { count } = await prisma.licence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends licenceDeleteManyArgs>(args?: SelectSubset<T, licenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licences
     * const licence = await prisma.licence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends licenceUpdateManyArgs>(args: SelectSubset<T, licenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Licence.
     * @param {licenceUpsertArgs} args - Arguments to update or create a Licence.
     * @example
     * // Update or create a Licence
     * const licence = await prisma.licence.upsert({
     *   create: {
     *     // ... data to create a Licence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Licence we want to update
     *   }
     * })
     */
    upsert<T extends licenceUpsertArgs>(args: SelectSubset<T, licenceUpsertArgs<ExtArgs>>): Prisma__licenceClient<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenceCountArgs} args - Arguments to filter Licences to count.
     * @example
     * // Count the number of Licences
     * const count = await prisma.licence.count({
     *   where: {
     *     // ... the filter for the Licences we want to count
     *   }
     * })
    **/
    count<T extends licenceCountArgs>(
      args?: Subset<T, licenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Licence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenceAggregateArgs>(args: Subset<T, LicenceAggregateArgs>): Prisma.PrismaPromise<GetLicenceAggregateType<T>>

    /**
     * Group by Licence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licenceGroupByArgs} args - Group by arguments.
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
      T extends licenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: licenceGroupByArgs['orderBy'] }
        : { orderBy?: licenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, licenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the licence model
   */
  readonly fields: licenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for licence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__licenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    societe<T extends societeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, societeDefaultArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    statut<T extends licence$statutArgs<ExtArgs> = {}>(args?: Subset<T, licence$statutArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the licence model
   */
  interface licenceFieldRefs {
    readonly id: FieldRef<"licence", 'Int'>
    readonly uuid: FieldRef<"licence", 'String'>
    readonly societe_id: FieldRef<"licence", 'Int'>
    readonly cle: FieldRef<"licence", 'String'>
    readonly date_expiration: FieldRef<"licence", 'DateTime'>
    readonly statut_id: FieldRef<"licence", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * licence findUnique
   */
  export type licenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * Filter, which licence to fetch.
     */
    where: licenceWhereUniqueInput
  }

  /**
   * licence findUniqueOrThrow
   */
  export type licenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * Filter, which licence to fetch.
     */
    where: licenceWhereUniqueInput
  }

  /**
   * licence findFirst
   */
  export type licenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * Filter, which licence to fetch.
     */
    where?: licenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licences to fetch.
     */
    orderBy?: licenceOrderByWithRelationInput | licenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for licences.
     */
    cursor?: licenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of licences.
     */
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * licence findFirstOrThrow
   */
  export type licenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * Filter, which licence to fetch.
     */
    where?: licenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licences to fetch.
     */
    orderBy?: licenceOrderByWithRelationInput | licenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for licences.
     */
    cursor?: licenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of licences.
     */
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * licence findMany
   */
  export type licenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * Filter, which licences to fetch.
     */
    where?: licenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licences to fetch.
     */
    orderBy?: licenceOrderByWithRelationInput | licenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing licences.
     */
    cursor?: licenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licences.
     */
    skip?: number
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * licence create
   */
  export type licenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * The data needed to create a licence.
     */
    data: XOR<licenceCreateInput, licenceUncheckedCreateInput>
  }

  /**
   * licence createMany
   */
  export type licenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many licences.
     */
    data: licenceCreateManyInput | licenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * licence update
   */
  export type licenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * The data needed to update a licence.
     */
    data: XOR<licenceUpdateInput, licenceUncheckedUpdateInput>
    /**
     * Choose, which licence to update.
     */
    where: licenceWhereUniqueInput
  }

  /**
   * licence updateMany
   */
  export type licenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update licences.
     */
    data: XOR<licenceUpdateManyMutationInput, licenceUncheckedUpdateManyInput>
    /**
     * Filter which licences to update
     */
    where?: licenceWhereInput
    /**
     * Limit how many licences to update.
     */
    limit?: number
  }

  /**
   * licence upsert
   */
  export type licenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * The filter to search for the licence to update in case it exists.
     */
    where: licenceWhereUniqueInput
    /**
     * In case the licence found by the `where` argument doesn't exist, create a new licence with this data.
     */
    create: XOR<licenceCreateInput, licenceUncheckedCreateInput>
    /**
     * In case the licence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<licenceUpdateInput, licenceUncheckedUpdateInput>
  }

  /**
   * licence delete
   */
  export type licenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    /**
     * Filter which licence to delete.
     */
    where: licenceWhereUniqueInput
  }

  /**
   * licence deleteMany
   */
  export type licenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which licences to delete
     */
    where?: licenceWhereInput
    /**
     * Limit how many licences to delete.
     */
    limit?: number
  }

  /**
   * licence.statut
   */
  export type licence$statutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    where?: statutWhereInput
  }

  /**
   * licence without action
   */
  export type licenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
  }


  /**
   * Model utilisateur_client
   */

  export type AggregateUtilisateur_client = {
    _count: Utilisateur_clientCountAggregateOutputType | null
    _avg: Utilisateur_clientAvgAggregateOutputType | null
    _sum: Utilisateur_clientSumAggregateOutputType | null
    _min: Utilisateur_clientMinAggregateOutputType | null
    _max: Utilisateur_clientMaxAggregateOutputType | null
  }

  export type Utilisateur_clientAvgAggregateOutputType = {
    id: number | null
    statut_id: number | null
    societe_id: number | null
    role_id: number | null
    tokenVersion: number | null
  }

  export type Utilisateur_clientSumAggregateOutputType = {
    id: bigint | null
    statut_id: number | null
    societe_id: number | null
    role_id: bigint | null
    tokenVersion: number | null
  }

  export type Utilisateur_clientMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    email: string | null
    login: string | null
    mot_de_passe: string | null
    nom_complet: string | null
    statut_id: number | null
    societe_id: number | null
    role_id: bigint | null
    cree_le: Date | null
    dernier_login: Date | null
    otp_secret: string | null
    otp_expiration: Date | null
    tokenVersion: number | null
    verification_token: string | null
    verification_expiration: Date | null
  }

  export type Utilisateur_clientMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    email: string | null
    login: string | null
    mot_de_passe: string | null
    nom_complet: string | null
    statut_id: number | null
    societe_id: number | null
    role_id: bigint | null
    cree_le: Date | null
    dernier_login: Date | null
    otp_secret: string | null
    otp_expiration: Date | null
    tokenVersion: number | null
    verification_token: string | null
    verification_expiration: Date | null
  }

  export type Utilisateur_clientCountAggregateOutputType = {
    id: number
    uuid: number
    email: number
    login: number
    mot_de_passe: number
    nom_complet: number
    statut_id: number
    societe_id: number
    role_id: number
    cree_le: number
    dernier_login: number
    otp_secret: number
    otp_expiration: number
    tokenVersion: number
    verification_token: number
    verification_expiration: number
    _all: number
  }


  export type Utilisateur_clientAvgAggregateInputType = {
    id?: true
    statut_id?: true
    societe_id?: true
    role_id?: true
    tokenVersion?: true
  }

  export type Utilisateur_clientSumAggregateInputType = {
    id?: true
    statut_id?: true
    societe_id?: true
    role_id?: true
    tokenVersion?: true
  }

  export type Utilisateur_clientMinAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    login?: true
    mot_de_passe?: true
    nom_complet?: true
    statut_id?: true
    societe_id?: true
    role_id?: true
    cree_le?: true
    dernier_login?: true
    otp_secret?: true
    otp_expiration?: true
    tokenVersion?: true
    verification_token?: true
    verification_expiration?: true
  }

  export type Utilisateur_clientMaxAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    login?: true
    mot_de_passe?: true
    nom_complet?: true
    statut_id?: true
    societe_id?: true
    role_id?: true
    cree_le?: true
    dernier_login?: true
    otp_secret?: true
    otp_expiration?: true
    tokenVersion?: true
    verification_token?: true
    verification_expiration?: true
  }

  export type Utilisateur_clientCountAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    login?: true
    mot_de_passe?: true
    nom_complet?: true
    statut_id?: true
    societe_id?: true
    role_id?: true
    cree_le?: true
    dernier_login?: true
    otp_secret?: true
    otp_expiration?: true
    tokenVersion?: true
    verification_token?: true
    verification_expiration?: true
    _all?: true
  }

  export type Utilisateur_clientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateur_client to aggregate.
     */
    where?: utilisateur_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_clients to fetch.
     */
    orderBy?: utilisateur_clientOrderByWithRelationInput | utilisateur_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilisateur_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilisateur_clients
    **/
    _count?: true | Utilisateur_clientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Utilisateur_clientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Utilisateur_clientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Utilisateur_clientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Utilisateur_clientMaxAggregateInputType
  }

  export type GetUtilisateur_clientAggregateType<T extends Utilisateur_clientAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur_client]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur_client[P]>
      : GetScalarType<T[P], AggregateUtilisateur_client[P]>
  }




  export type utilisateur_clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateur_clientWhereInput
    orderBy?: utilisateur_clientOrderByWithAggregationInput | utilisateur_clientOrderByWithAggregationInput[]
    by: Utilisateur_clientScalarFieldEnum[] | Utilisateur_clientScalarFieldEnum
    having?: utilisateur_clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Utilisateur_clientCountAggregateInputType | true
    _avg?: Utilisateur_clientAvgAggregateInputType
    _sum?: Utilisateur_clientSumAggregateInputType
    _min?: Utilisateur_clientMinAggregateInputType
    _max?: Utilisateur_clientMaxAggregateInputType
  }

  export type Utilisateur_clientGroupByOutputType = {
    id: bigint
    uuid: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    statut_id: number
    societe_id: number | null
    role_id: bigint | null
    cree_le: Date
    dernier_login: Date | null
    otp_secret: string | null
    otp_expiration: Date | null
    tokenVersion: number
    verification_token: string | null
    verification_expiration: Date | null
    _count: Utilisateur_clientCountAggregateOutputType | null
    _avg: Utilisateur_clientAvgAggregateOutputType | null
    _sum: Utilisateur_clientSumAggregateOutputType | null
    _min: Utilisateur_clientMinAggregateOutputType | null
    _max: Utilisateur_clientMaxAggregateOutputType | null
  }

  type GetUtilisateur_clientGroupByPayload<T extends utilisateur_clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Utilisateur_clientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Utilisateur_clientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Utilisateur_clientGroupByOutputType[P]>
            : GetScalarType<T[P], Utilisateur_clientGroupByOutputType[P]>
        }
      >
    >


  export type utilisateur_clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    email?: boolean
    login?: boolean
    mot_de_passe?: boolean
    nom_complet?: boolean
    statut_id?: boolean
    societe_id?: boolean
    role_id?: boolean
    cree_le?: boolean
    dernier_login?: boolean
    otp_secret?: boolean
    otp_expiration?: boolean
    tokenVersion?: boolean
    verification_token?: boolean
    verification_expiration?: boolean
    role?: boolean | utilisateur_client$roleArgs<ExtArgs>
    societe?: boolean | utilisateur_client$societeArgs<ExtArgs>
    statut?: boolean | statutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur_client"]>



  export type utilisateur_clientSelectScalar = {
    id?: boolean
    uuid?: boolean
    email?: boolean
    login?: boolean
    mot_de_passe?: boolean
    nom_complet?: boolean
    statut_id?: boolean
    societe_id?: boolean
    role_id?: boolean
    cree_le?: boolean
    dernier_login?: boolean
    otp_secret?: boolean
    otp_expiration?: boolean
    tokenVersion?: boolean
    verification_token?: boolean
    verification_expiration?: boolean
  }

  export type utilisateur_clientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "email" | "login" | "mot_de_passe" | "nom_complet" | "statut_id" | "societe_id" | "role_id" | "cree_le" | "dernier_login" | "otp_secret" | "otp_expiration" | "tokenVersion" | "verification_token" | "verification_expiration", ExtArgs["result"]["utilisateur_client"]>
  export type utilisateur_clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | utilisateur_client$roleArgs<ExtArgs>
    societe?: boolean | utilisateur_client$societeArgs<ExtArgs>
    statut?: boolean | statutDefaultArgs<ExtArgs>
  }

  export type $utilisateur_clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilisateur_client"
    objects: {
      role: Prisma.$rolePayload<ExtArgs> | null
      societe: Prisma.$societePayload<ExtArgs> | null
      statut: Prisma.$statutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      email: string
      login: string
      mot_de_passe: string
      nom_complet: string
      statut_id: number
      societe_id: number | null
      role_id: bigint | null
      cree_le: Date
      dernier_login: Date | null
      otp_secret: string | null
      otp_expiration: Date | null
      tokenVersion: number
      verification_token: string | null
      verification_expiration: Date | null
    }, ExtArgs["result"]["utilisateur_client"]>
    composites: {}
  }

  type utilisateur_clientGetPayload<S extends boolean | null | undefined | utilisateur_clientDefaultArgs> = $Result.GetResult<Prisma.$utilisateur_clientPayload, S>

  type utilisateur_clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilisateur_clientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Utilisateur_clientCountAggregateInputType | true
    }

  export interface utilisateur_clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilisateur_client'], meta: { name: 'utilisateur_client' } }
    /**
     * Find zero or one Utilisateur_client that matches the filter.
     * @param {utilisateur_clientFindUniqueArgs} args - Arguments to find a Utilisateur_client
     * @example
     * // Get one Utilisateur_client
     * const utilisateur_client = await prisma.utilisateur_client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilisateur_clientFindUniqueArgs>(args: SelectSubset<T, utilisateur_clientFindUniqueArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur_client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilisateur_clientFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur_client
     * @example
     * // Get one Utilisateur_client
     * const utilisateur_client = await prisma.utilisateur_client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilisateur_clientFindUniqueOrThrowArgs>(args: SelectSubset<T, utilisateur_clientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur_client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_clientFindFirstArgs} args - Arguments to find a Utilisateur_client
     * @example
     * // Get one Utilisateur_client
     * const utilisateur_client = await prisma.utilisateur_client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilisateur_clientFindFirstArgs>(args?: SelectSubset<T, utilisateur_clientFindFirstArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur_client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_clientFindFirstOrThrowArgs} args - Arguments to find a Utilisateur_client
     * @example
     * // Get one Utilisateur_client
     * const utilisateur_client = await prisma.utilisateur_client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilisateur_clientFindFirstOrThrowArgs>(args?: SelectSubset<T, utilisateur_clientFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateur_clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_clientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateur_clients
     * const utilisateur_clients = await prisma.utilisateur_client.findMany()
     * 
     * // Get first 10 Utilisateur_clients
     * const utilisateur_clients = await prisma.utilisateur_client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateur_clientWithIdOnly = await prisma.utilisateur_client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends utilisateur_clientFindManyArgs>(args?: SelectSubset<T, utilisateur_clientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur_client.
     * @param {utilisateur_clientCreateArgs} args - Arguments to create a Utilisateur_client.
     * @example
     * // Create one Utilisateur_client
     * const Utilisateur_client = await prisma.utilisateur_client.create({
     *   data: {
     *     // ... data to create a Utilisateur_client
     *   }
     * })
     * 
     */
    create<T extends utilisateur_clientCreateArgs>(args: SelectSubset<T, utilisateur_clientCreateArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateur_clients.
     * @param {utilisateur_clientCreateManyArgs} args - Arguments to create many Utilisateur_clients.
     * @example
     * // Create many Utilisateur_clients
     * const utilisateur_client = await prisma.utilisateur_client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilisateur_clientCreateManyArgs>(args?: SelectSubset<T, utilisateur_clientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateur_client.
     * @param {utilisateur_clientDeleteArgs} args - Arguments to delete one Utilisateur_client.
     * @example
     * // Delete one Utilisateur_client
     * const Utilisateur_client = await prisma.utilisateur_client.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur_client
     *   }
     * })
     * 
     */
    delete<T extends utilisateur_clientDeleteArgs>(args: SelectSubset<T, utilisateur_clientDeleteArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur_client.
     * @param {utilisateur_clientUpdateArgs} args - Arguments to update one Utilisateur_client.
     * @example
     * // Update one Utilisateur_client
     * const utilisateur_client = await prisma.utilisateur_client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilisateur_clientUpdateArgs>(args: SelectSubset<T, utilisateur_clientUpdateArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateur_clients.
     * @param {utilisateur_clientDeleteManyArgs} args - Arguments to filter Utilisateur_clients to delete.
     * @example
     * // Delete a few Utilisateur_clients
     * const { count } = await prisma.utilisateur_client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilisateur_clientDeleteManyArgs>(args?: SelectSubset<T, utilisateur_clientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateur_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateur_clients
     * const utilisateur_client = await prisma.utilisateur_client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilisateur_clientUpdateManyArgs>(args: SelectSubset<T, utilisateur_clientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur_client.
     * @param {utilisateur_clientUpsertArgs} args - Arguments to update or create a Utilisateur_client.
     * @example
     * // Update or create a Utilisateur_client
     * const utilisateur_client = await prisma.utilisateur_client.upsert({
     *   create: {
     *     // ... data to create a Utilisateur_client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur_client we want to update
     *   }
     * })
     */
    upsert<T extends utilisateur_clientUpsertArgs>(args: SelectSubset<T, utilisateur_clientUpsertArgs<ExtArgs>>): Prisma__utilisateur_clientClient<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateur_clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_clientCountArgs} args - Arguments to filter Utilisateur_clients to count.
     * @example
     * // Count the number of Utilisateur_clients
     * const count = await prisma.utilisateur_client.count({
     *   where: {
     *     // ... the filter for the Utilisateur_clients we want to count
     *   }
     * })
    **/
    count<T extends utilisateur_clientCountArgs>(
      args?: Subset<T, utilisateur_clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Utilisateur_clientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur_client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Utilisateur_clientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Utilisateur_clientAggregateArgs>(args: Subset<T, Utilisateur_clientAggregateArgs>): Prisma.PrismaPromise<GetUtilisateur_clientAggregateType<T>>

    /**
     * Group by Utilisateur_client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_clientGroupByArgs} args - Group by arguments.
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
      T extends utilisateur_clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilisateur_clientGroupByArgs['orderBy'] }
        : { orderBy?: utilisateur_clientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, utilisateur_clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateur_clientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilisateur_client model
   */
  readonly fields: utilisateur_clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilisateur_client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilisateur_clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends utilisateur_client$roleArgs<ExtArgs> = {}>(args?: Subset<T, utilisateur_client$roleArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    societe<T extends utilisateur_client$societeArgs<ExtArgs> = {}>(args?: Subset<T, utilisateur_client$societeArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    statut<T extends statutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, statutDefaultArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the utilisateur_client model
   */
  interface utilisateur_clientFieldRefs {
    readonly id: FieldRef<"utilisateur_client", 'BigInt'>
    readonly uuid: FieldRef<"utilisateur_client", 'String'>
    readonly email: FieldRef<"utilisateur_client", 'String'>
    readonly login: FieldRef<"utilisateur_client", 'String'>
    readonly mot_de_passe: FieldRef<"utilisateur_client", 'String'>
    readonly nom_complet: FieldRef<"utilisateur_client", 'String'>
    readonly statut_id: FieldRef<"utilisateur_client", 'Int'>
    readonly societe_id: FieldRef<"utilisateur_client", 'Int'>
    readonly role_id: FieldRef<"utilisateur_client", 'BigInt'>
    readonly cree_le: FieldRef<"utilisateur_client", 'DateTime'>
    readonly dernier_login: FieldRef<"utilisateur_client", 'DateTime'>
    readonly otp_secret: FieldRef<"utilisateur_client", 'String'>
    readonly otp_expiration: FieldRef<"utilisateur_client", 'DateTime'>
    readonly tokenVersion: FieldRef<"utilisateur_client", 'Int'>
    readonly verification_token: FieldRef<"utilisateur_client", 'String'>
    readonly verification_expiration: FieldRef<"utilisateur_client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * utilisateur_client findUnique
   */
  export type utilisateur_clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur_client to fetch.
     */
    where: utilisateur_clientWhereUniqueInput
  }

  /**
   * utilisateur_client findUniqueOrThrow
   */
  export type utilisateur_clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur_client to fetch.
     */
    where: utilisateur_clientWhereUniqueInput
  }

  /**
   * utilisateur_client findFirst
   */
  export type utilisateur_clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur_client to fetch.
     */
    where?: utilisateur_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_clients to fetch.
     */
    orderBy?: utilisateur_clientOrderByWithRelationInput | utilisateur_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateur_clients.
     */
    cursor?: utilisateur_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateur_clients.
     */
    distinct?: Utilisateur_clientScalarFieldEnum | Utilisateur_clientScalarFieldEnum[]
  }

  /**
   * utilisateur_client findFirstOrThrow
   */
  export type utilisateur_clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur_client to fetch.
     */
    where?: utilisateur_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_clients to fetch.
     */
    orderBy?: utilisateur_clientOrderByWithRelationInput | utilisateur_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateur_clients.
     */
    cursor?: utilisateur_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateur_clients.
     */
    distinct?: Utilisateur_clientScalarFieldEnum | Utilisateur_clientScalarFieldEnum[]
  }

  /**
   * utilisateur_client findMany
   */
  export type utilisateur_clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur_clients to fetch.
     */
    where?: utilisateur_clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_clients to fetch.
     */
    orderBy?: utilisateur_clientOrderByWithRelationInput | utilisateur_clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilisateur_clients.
     */
    cursor?: utilisateur_clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_clients.
     */
    skip?: number
    distinct?: Utilisateur_clientScalarFieldEnum | Utilisateur_clientScalarFieldEnum[]
  }

  /**
   * utilisateur_client create
   */
  export type utilisateur_clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * The data needed to create a utilisateur_client.
     */
    data: XOR<utilisateur_clientCreateInput, utilisateur_clientUncheckedCreateInput>
  }

  /**
   * utilisateur_client createMany
   */
  export type utilisateur_clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilisateur_clients.
     */
    data: utilisateur_clientCreateManyInput | utilisateur_clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilisateur_client update
   */
  export type utilisateur_clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * The data needed to update a utilisateur_client.
     */
    data: XOR<utilisateur_clientUpdateInput, utilisateur_clientUncheckedUpdateInput>
    /**
     * Choose, which utilisateur_client to update.
     */
    where: utilisateur_clientWhereUniqueInput
  }

  /**
   * utilisateur_client updateMany
   */
  export type utilisateur_clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilisateur_clients.
     */
    data: XOR<utilisateur_clientUpdateManyMutationInput, utilisateur_clientUncheckedUpdateManyInput>
    /**
     * Filter which utilisateur_clients to update
     */
    where?: utilisateur_clientWhereInput
    /**
     * Limit how many utilisateur_clients to update.
     */
    limit?: number
  }

  /**
   * utilisateur_client upsert
   */
  export type utilisateur_clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * The filter to search for the utilisateur_client to update in case it exists.
     */
    where: utilisateur_clientWhereUniqueInput
    /**
     * In case the utilisateur_client found by the `where` argument doesn't exist, create a new utilisateur_client with this data.
     */
    create: XOR<utilisateur_clientCreateInput, utilisateur_clientUncheckedCreateInput>
    /**
     * In case the utilisateur_client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilisateur_clientUpdateInput, utilisateur_clientUncheckedUpdateInput>
  }

  /**
   * utilisateur_client delete
   */
  export type utilisateur_clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    /**
     * Filter which utilisateur_client to delete.
     */
    where: utilisateur_clientWhereUniqueInput
  }

  /**
   * utilisateur_client deleteMany
   */
  export type utilisateur_clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateur_clients to delete
     */
    where?: utilisateur_clientWhereInput
    /**
     * Limit how many utilisateur_clients to delete.
     */
    limit?: number
  }

  /**
   * utilisateur_client.role
   */
  export type utilisateur_client$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    where?: roleWhereInput
  }

  /**
   * utilisateur_client.societe
   */
  export type utilisateur_client$societeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    where?: societeWhereInput
  }

  /**
   * utilisateur_client without action
   */
  export type utilisateur_clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
  }


  /**
   * Model mode_paiement
   */

  export type AggregateMode_paiement = {
    _count: Mode_paiementCountAggregateOutputType | null
    _avg: Mode_paiementAvgAggregateOutputType | null
    _sum: Mode_paiementSumAggregateOutputType | null
    _min: Mode_paiementMinAggregateOutputType | null
    _max: Mode_paiementMaxAggregateOutputType | null
  }

  export type Mode_paiementAvgAggregateOutputType = {
    id: number | null
  }

  export type Mode_paiementSumAggregateOutputType = {
    id: bigint | null
  }

  export type Mode_paiementMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_mode_paiement: string | null
    libelle_mode_paiement: string | null
  }

  export type Mode_paiementMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_mode_paiement: string | null
    libelle_mode_paiement: string | null
  }

  export type Mode_paiementCountAggregateOutputType = {
    id: number
    uuid: number
    code_mode_paiement: number
    libelle_mode_paiement: number
    _all: number
  }


  export type Mode_paiementAvgAggregateInputType = {
    id?: true
  }

  export type Mode_paiementSumAggregateInputType = {
    id?: true
  }

  export type Mode_paiementMinAggregateInputType = {
    id?: true
    uuid?: true
    code_mode_paiement?: true
    libelle_mode_paiement?: true
  }

  export type Mode_paiementMaxAggregateInputType = {
    id?: true
    uuid?: true
    code_mode_paiement?: true
    libelle_mode_paiement?: true
  }

  export type Mode_paiementCountAggregateInputType = {
    id?: true
    uuid?: true
    code_mode_paiement?: true
    libelle_mode_paiement?: true
    _all?: true
  }

  export type Mode_paiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mode_paiement to aggregate.
     */
    where?: mode_paiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mode_paiements to fetch.
     */
    orderBy?: mode_paiementOrderByWithRelationInput | mode_paiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mode_paiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mode_paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mode_paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mode_paiements
    **/
    _count?: true | Mode_paiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mode_paiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mode_paiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mode_paiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mode_paiementMaxAggregateInputType
  }

  export type GetMode_paiementAggregateType<T extends Mode_paiementAggregateArgs> = {
        [P in keyof T & keyof AggregateMode_paiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMode_paiement[P]>
      : GetScalarType<T[P], AggregateMode_paiement[P]>
  }




  export type mode_paiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mode_paiementWhereInput
    orderBy?: mode_paiementOrderByWithAggregationInput | mode_paiementOrderByWithAggregationInput[]
    by: Mode_paiementScalarFieldEnum[] | Mode_paiementScalarFieldEnum
    having?: mode_paiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mode_paiementCountAggregateInputType | true
    _avg?: Mode_paiementAvgAggregateInputType
    _sum?: Mode_paiementSumAggregateInputType
    _min?: Mode_paiementMinAggregateInputType
    _max?: Mode_paiementMaxAggregateInputType
  }

  export type Mode_paiementGroupByOutputType = {
    id: bigint
    uuid: string
    code_mode_paiement: string
    libelle_mode_paiement: string
    _count: Mode_paiementCountAggregateOutputType | null
    _avg: Mode_paiementAvgAggregateOutputType | null
    _sum: Mode_paiementSumAggregateOutputType | null
    _min: Mode_paiementMinAggregateOutputType | null
    _max: Mode_paiementMaxAggregateOutputType | null
  }

  type GetMode_paiementGroupByPayload<T extends mode_paiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mode_paiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mode_paiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mode_paiementGroupByOutputType[P]>
            : GetScalarType<T[P], Mode_paiementGroupByOutputType[P]>
        }
      >
    >


  export type mode_paiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code_mode_paiement?: boolean
    libelle_mode_paiement?: boolean
  }, ExtArgs["result"]["mode_paiement"]>



  export type mode_paiementSelectScalar = {
    id?: boolean
    uuid?: boolean
    code_mode_paiement?: boolean
    libelle_mode_paiement?: boolean
  }

  export type mode_paiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code_mode_paiement" | "libelle_mode_paiement", ExtArgs["result"]["mode_paiement"]>

  export type $mode_paiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mode_paiement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      code_mode_paiement: string
      libelle_mode_paiement: string
    }, ExtArgs["result"]["mode_paiement"]>
    composites: {}
  }

  type mode_paiementGetPayload<S extends boolean | null | undefined | mode_paiementDefaultArgs> = $Result.GetResult<Prisma.$mode_paiementPayload, S>

  type mode_paiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mode_paiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mode_paiementCountAggregateInputType | true
    }

  export interface mode_paiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mode_paiement'], meta: { name: 'mode_paiement' } }
    /**
     * Find zero or one Mode_paiement that matches the filter.
     * @param {mode_paiementFindUniqueArgs} args - Arguments to find a Mode_paiement
     * @example
     * // Get one Mode_paiement
     * const mode_paiement = await prisma.mode_paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mode_paiementFindUniqueArgs>(args: SelectSubset<T, mode_paiementFindUniqueArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mode_paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mode_paiementFindUniqueOrThrowArgs} args - Arguments to find a Mode_paiement
     * @example
     * // Get one Mode_paiement
     * const mode_paiement = await prisma.mode_paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mode_paiementFindUniqueOrThrowArgs>(args: SelectSubset<T, mode_paiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mode_paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mode_paiementFindFirstArgs} args - Arguments to find a Mode_paiement
     * @example
     * // Get one Mode_paiement
     * const mode_paiement = await prisma.mode_paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mode_paiementFindFirstArgs>(args?: SelectSubset<T, mode_paiementFindFirstArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mode_paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mode_paiementFindFirstOrThrowArgs} args - Arguments to find a Mode_paiement
     * @example
     * // Get one Mode_paiement
     * const mode_paiement = await prisma.mode_paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mode_paiementFindFirstOrThrowArgs>(args?: SelectSubset<T, mode_paiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mode_paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mode_paiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mode_paiements
     * const mode_paiements = await prisma.mode_paiement.findMany()
     * 
     * // Get first 10 Mode_paiements
     * const mode_paiements = await prisma.mode_paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mode_paiementWithIdOnly = await prisma.mode_paiement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mode_paiementFindManyArgs>(args?: SelectSubset<T, mode_paiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mode_paiement.
     * @param {mode_paiementCreateArgs} args - Arguments to create a Mode_paiement.
     * @example
     * // Create one Mode_paiement
     * const Mode_paiement = await prisma.mode_paiement.create({
     *   data: {
     *     // ... data to create a Mode_paiement
     *   }
     * })
     * 
     */
    create<T extends mode_paiementCreateArgs>(args: SelectSubset<T, mode_paiementCreateArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mode_paiements.
     * @param {mode_paiementCreateManyArgs} args - Arguments to create many Mode_paiements.
     * @example
     * // Create many Mode_paiements
     * const mode_paiement = await prisma.mode_paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mode_paiementCreateManyArgs>(args?: SelectSubset<T, mode_paiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mode_paiement.
     * @param {mode_paiementDeleteArgs} args - Arguments to delete one Mode_paiement.
     * @example
     * // Delete one Mode_paiement
     * const Mode_paiement = await prisma.mode_paiement.delete({
     *   where: {
     *     // ... filter to delete one Mode_paiement
     *   }
     * })
     * 
     */
    delete<T extends mode_paiementDeleteArgs>(args: SelectSubset<T, mode_paiementDeleteArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mode_paiement.
     * @param {mode_paiementUpdateArgs} args - Arguments to update one Mode_paiement.
     * @example
     * // Update one Mode_paiement
     * const mode_paiement = await prisma.mode_paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mode_paiementUpdateArgs>(args: SelectSubset<T, mode_paiementUpdateArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mode_paiements.
     * @param {mode_paiementDeleteManyArgs} args - Arguments to filter Mode_paiements to delete.
     * @example
     * // Delete a few Mode_paiements
     * const { count } = await prisma.mode_paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mode_paiementDeleteManyArgs>(args?: SelectSubset<T, mode_paiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mode_paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mode_paiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mode_paiements
     * const mode_paiement = await prisma.mode_paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mode_paiementUpdateManyArgs>(args: SelectSubset<T, mode_paiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mode_paiement.
     * @param {mode_paiementUpsertArgs} args - Arguments to update or create a Mode_paiement.
     * @example
     * // Update or create a Mode_paiement
     * const mode_paiement = await prisma.mode_paiement.upsert({
     *   create: {
     *     // ... data to create a Mode_paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mode_paiement we want to update
     *   }
     * })
     */
    upsert<T extends mode_paiementUpsertArgs>(args: SelectSubset<T, mode_paiementUpsertArgs<ExtArgs>>): Prisma__mode_paiementClient<$Result.GetResult<Prisma.$mode_paiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mode_paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mode_paiementCountArgs} args - Arguments to filter Mode_paiements to count.
     * @example
     * // Count the number of Mode_paiements
     * const count = await prisma.mode_paiement.count({
     *   where: {
     *     // ... the filter for the Mode_paiements we want to count
     *   }
     * })
    **/
    count<T extends mode_paiementCountArgs>(
      args?: Subset<T, mode_paiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mode_paiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mode_paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mode_paiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mode_paiementAggregateArgs>(args: Subset<T, Mode_paiementAggregateArgs>): Prisma.PrismaPromise<GetMode_paiementAggregateType<T>>

    /**
     * Group by Mode_paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mode_paiementGroupByArgs} args - Group by arguments.
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
      T extends mode_paiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mode_paiementGroupByArgs['orderBy'] }
        : { orderBy?: mode_paiementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mode_paiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMode_paiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mode_paiement model
   */
  readonly fields: mode_paiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mode_paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mode_paiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the mode_paiement model
   */
  interface mode_paiementFieldRefs {
    readonly id: FieldRef<"mode_paiement", 'BigInt'>
    readonly uuid: FieldRef<"mode_paiement", 'String'>
    readonly code_mode_paiement: FieldRef<"mode_paiement", 'String'>
    readonly libelle_mode_paiement: FieldRef<"mode_paiement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mode_paiement findUnique
   */
  export type mode_paiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * Filter, which mode_paiement to fetch.
     */
    where: mode_paiementWhereUniqueInput
  }

  /**
   * mode_paiement findUniqueOrThrow
   */
  export type mode_paiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * Filter, which mode_paiement to fetch.
     */
    where: mode_paiementWhereUniqueInput
  }

  /**
   * mode_paiement findFirst
   */
  export type mode_paiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * Filter, which mode_paiement to fetch.
     */
    where?: mode_paiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mode_paiements to fetch.
     */
    orderBy?: mode_paiementOrderByWithRelationInput | mode_paiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mode_paiements.
     */
    cursor?: mode_paiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mode_paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mode_paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mode_paiements.
     */
    distinct?: Mode_paiementScalarFieldEnum | Mode_paiementScalarFieldEnum[]
  }

  /**
   * mode_paiement findFirstOrThrow
   */
  export type mode_paiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * Filter, which mode_paiement to fetch.
     */
    where?: mode_paiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mode_paiements to fetch.
     */
    orderBy?: mode_paiementOrderByWithRelationInput | mode_paiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mode_paiements.
     */
    cursor?: mode_paiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mode_paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mode_paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mode_paiements.
     */
    distinct?: Mode_paiementScalarFieldEnum | Mode_paiementScalarFieldEnum[]
  }

  /**
   * mode_paiement findMany
   */
  export type mode_paiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * Filter, which mode_paiements to fetch.
     */
    where?: mode_paiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mode_paiements to fetch.
     */
    orderBy?: mode_paiementOrderByWithRelationInput | mode_paiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mode_paiements.
     */
    cursor?: mode_paiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mode_paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mode_paiements.
     */
    skip?: number
    distinct?: Mode_paiementScalarFieldEnum | Mode_paiementScalarFieldEnum[]
  }

  /**
   * mode_paiement create
   */
  export type mode_paiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * The data needed to create a mode_paiement.
     */
    data: XOR<mode_paiementCreateInput, mode_paiementUncheckedCreateInput>
  }

  /**
   * mode_paiement createMany
   */
  export type mode_paiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mode_paiements.
     */
    data: mode_paiementCreateManyInput | mode_paiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mode_paiement update
   */
  export type mode_paiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * The data needed to update a mode_paiement.
     */
    data: XOR<mode_paiementUpdateInput, mode_paiementUncheckedUpdateInput>
    /**
     * Choose, which mode_paiement to update.
     */
    where: mode_paiementWhereUniqueInput
  }

  /**
   * mode_paiement updateMany
   */
  export type mode_paiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mode_paiements.
     */
    data: XOR<mode_paiementUpdateManyMutationInput, mode_paiementUncheckedUpdateManyInput>
    /**
     * Filter which mode_paiements to update
     */
    where?: mode_paiementWhereInput
    /**
     * Limit how many mode_paiements to update.
     */
    limit?: number
  }

  /**
   * mode_paiement upsert
   */
  export type mode_paiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * The filter to search for the mode_paiement to update in case it exists.
     */
    where: mode_paiementWhereUniqueInput
    /**
     * In case the mode_paiement found by the `where` argument doesn't exist, create a new mode_paiement with this data.
     */
    create: XOR<mode_paiementCreateInput, mode_paiementUncheckedCreateInput>
    /**
     * In case the mode_paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mode_paiementUpdateInput, mode_paiementUncheckedUpdateInput>
  }

  /**
   * mode_paiement delete
   */
  export type mode_paiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
    /**
     * Filter which mode_paiement to delete.
     */
    where: mode_paiementWhereUniqueInput
  }

  /**
   * mode_paiement deleteMany
   */
  export type mode_paiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mode_paiements to delete
     */
    where?: mode_paiementWhereInput
    /**
     * Limit how many mode_paiements to delete.
     */
    limit?: number
  }

  /**
   * mode_paiement without action
   */
  export type mode_paiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mode_paiement
     */
    select?: mode_paiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mode_paiement
     */
    omit?: mode_paiementOmit<ExtArgs> | null
  }


  /**
   * Model taux_imposition
   */

  export type AggregateTaux_imposition = {
    _count: Taux_impositionCountAggregateOutputType | null
    _avg: Taux_impositionAvgAggregateOutputType | null
    _sum: Taux_impositionSumAggregateOutputType | null
    _min: Taux_impositionMinAggregateOutputType | null
    _max: Taux_impositionMaxAggregateOutputType | null
  }

  export type Taux_impositionAvgAggregateOutputType = {
    id: number | null
    pourcentage: number | null
  }

  export type Taux_impositionSumAggregateOutputType = {
    id: bigint | null
    pourcentage: number | null
  }

  export type Taux_impositionMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code: string | null
    pourcentage: number | null
    description: string | null
  }

  export type Taux_impositionMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code: string | null
    pourcentage: number | null
    description: string | null
  }

  export type Taux_impositionCountAggregateOutputType = {
    id: number
    uuid: number
    code: number
    pourcentage: number
    description: number
    _all: number
  }


  export type Taux_impositionAvgAggregateInputType = {
    id?: true
    pourcentage?: true
  }

  export type Taux_impositionSumAggregateInputType = {
    id?: true
    pourcentage?: true
  }

  export type Taux_impositionMinAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    pourcentage?: true
    description?: true
  }

  export type Taux_impositionMaxAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    pourcentage?: true
    description?: true
  }

  export type Taux_impositionCountAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    pourcentage?: true
    description?: true
    _all?: true
  }

  export type Taux_impositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taux_imposition to aggregate.
     */
    where?: taux_impositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taux_impositions to fetch.
     */
    orderBy?: taux_impositionOrderByWithRelationInput | taux_impositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taux_impositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taux_impositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taux_impositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned taux_impositions
    **/
    _count?: true | Taux_impositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Taux_impositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Taux_impositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Taux_impositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Taux_impositionMaxAggregateInputType
  }

  export type GetTaux_impositionAggregateType<T extends Taux_impositionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaux_imposition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaux_imposition[P]>
      : GetScalarType<T[P], AggregateTaux_imposition[P]>
  }




  export type taux_impositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taux_impositionWhereInput
    orderBy?: taux_impositionOrderByWithAggregationInput | taux_impositionOrderByWithAggregationInput[]
    by: Taux_impositionScalarFieldEnum[] | Taux_impositionScalarFieldEnum
    having?: taux_impositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Taux_impositionCountAggregateInputType | true
    _avg?: Taux_impositionAvgAggregateInputType
    _sum?: Taux_impositionSumAggregateInputType
    _min?: Taux_impositionMinAggregateInputType
    _max?: Taux_impositionMaxAggregateInputType
  }

  export type Taux_impositionGroupByOutputType = {
    id: bigint
    uuid: string
    code: string
    pourcentage: number
    description: string
    _count: Taux_impositionCountAggregateOutputType | null
    _avg: Taux_impositionAvgAggregateOutputType | null
    _sum: Taux_impositionSumAggregateOutputType | null
    _min: Taux_impositionMinAggregateOutputType | null
    _max: Taux_impositionMaxAggregateOutputType | null
  }

  type GetTaux_impositionGroupByPayload<T extends taux_impositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Taux_impositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Taux_impositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Taux_impositionGroupByOutputType[P]>
            : GetScalarType<T[P], Taux_impositionGroupByOutputType[P]>
        }
      >
    >


  export type taux_impositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code?: boolean
    pourcentage?: boolean
    description?: boolean
  }, ExtArgs["result"]["taux_imposition"]>



  export type taux_impositionSelectScalar = {
    id?: boolean
    uuid?: boolean
    code?: boolean
    pourcentage?: boolean
    description?: boolean
  }

  export type taux_impositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code" | "pourcentage" | "description", ExtArgs["result"]["taux_imposition"]>

  export type $taux_impositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "taux_imposition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      code: string
      pourcentage: number
      description: string
    }, ExtArgs["result"]["taux_imposition"]>
    composites: {}
  }

  type taux_impositionGetPayload<S extends boolean | null | undefined | taux_impositionDefaultArgs> = $Result.GetResult<Prisma.$taux_impositionPayload, S>

  type taux_impositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<taux_impositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Taux_impositionCountAggregateInputType | true
    }

  export interface taux_impositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['taux_imposition'], meta: { name: 'taux_imposition' } }
    /**
     * Find zero or one Taux_imposition that matches the filter.
     * @param {taux_impositionFindUniqueArgs} args - Arguments to find a Taux_imposition
     * @example
     * // Get one Taux_imposition
     * const taux_imposition = await prisma.taux_imposition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends taux_impositionFindUniqueArgs>(args: SelectSubset<T, taux_impositionFindUniqueArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taux_imposition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {taux_impositionFindUniqueOrThrowArgs} args - Arguments to find a Taux_imposition
     * @example
     * // Get one Taux_imposition
     * const taux_imposition = await prisma.taux_imposition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends taux_impositionFindUniqueOrThrowArgs>(args: SelectSubset<T, taux_impositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taux_imposition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taux_impositionFindFirstArgs} args - Arguments to find a Taux_imposition
     * @example
     * // Get one Taux_imposition
     * const taux_imposition = await prisma.taux_imposition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends taux_impositionFindFirstArgs>(args?: SelectSubset<T, taux_impositionFindFirstArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taux_imposition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taux_impositionFindFirstOrThrowArgs} args - Arguments to find a Taux_imposition
     * @example
     * // Get one Taux_imposition
     * const taux_imposition = await prisma.taux_imposition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends taux_impositionFindFirstOrThrowArgs>(args?: SelectSubset<T, taux_impositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taux_impositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taux_impositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taux_impositions
     * const taux_impositions = await prisma.taux_imposition.findMany()
     * 
     * // Get first 10 Taux_impositions
     * const taux_impositions = await prisma.taux_imposition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taux_impositionWithIdOnly = await prisma.taux_imposition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends taux_impositionFindManyArgs>(args?: SelectSubset<T, taux_impositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taux_imposition.
     * @param {taux_impositionCreateArgs} args - Arguments to create a Taux_imposition.
     * @example
     * // Create one Taux_imposition
     * const Taux_imposition = await prisma.taux_imposition.create({
     *   data: {
     *     // ... data to create a Taux_imposition
     *   }
     * })
     * 
     */
    create<T extends taux_impositionCreateArgs>(args: SelectSubset<T, taux_impositionCreateArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taux_impositions.
     * @param {taux_impositionCreateManyArgs} args - Arguments to create many Taux_impositions.
     * @example
     * // Create many Taux_impositions
     * const taux_imposition = await prisma.taux_imposition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends taux_impositionCreateManyArgs>(args?: SelectSubset<T, taux_impositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Taux_imposition.
     * @param {taux_impositionDeleteArgs} args - Arguments to delete one Taux_imposition.
     * @example
     * // Delete one Taux_imposition
     * const Taux_imposition = await prisma.taux_imposition.delete({
     *   where: {
     *     // ... filter to delete one Taux_imposition
     *   }
     * })
     * 
     */
    delete<T extends taux_impositionDeleteArgs>(args: SelectSubset<T, taux_impositionDeleteArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taux_imposition.
     * @param {taux_impositionUpdateArgs} args - Arguments to update one Taux_imposition.
     * @example
     * // Update one Taux_imposition
     * const taux_imposition = await prisma.taux_imposition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends taux_impositionUpdateArgs>(args: SelectSubset<T, taux_impositionUpdateArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taux_impositions.
     * @param {taux_impositionDeleteManyArgs} args - Arguments to filter Taux_impositions to delete.
     * @example
     * // Delete a few Taux_impositions
     * const { count } = await prisma.taux_imposition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends taux_impositionDeleteManyArgs>(args?: SelectSubset<T, taux_impositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taux_impositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taux_impositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taux_impositions
     * const taux_imposition = await prisma.taux_imposition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends taux_impositionUpdateManyArgs>(args: SelectSubset<T, taux_impositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Taux_imposition.
     * @param {taux_impositionUpsertArgs} args - Arguments to update or create a Taux_imposition.
     * @example
     * // Update or create a Taux_imposition
     * const taux_imposition = await prisma.taux_imposition.upsert({
     *   create: {
     *     // ... data to create a Taux_imposition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taux_imposition we want to update
     *   }
     * })
     */
    upsert<T extends taux_impositionUpsertArgs>(args: SelectSubset<T, taux_impositionUpsertArgs<ExtArgs>>): Prisma__taux_impositionClient<$Result.GetResult<Prisma.$taux_impositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taux_impositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taux_impositionCountArgs} args - Arguments to filter Taux_impositions to count.
     * @example
     * // Count the number of Taux_impositions
     * const count = await prisma.taux_imposition.count({
     *   where: {
     *     // ... the filter for the Taux_impositions we want to count
     *   }
     * })
    **/
    count<T extends taux_impositionCountArgs>(
      args?: Subset<T, taux_impositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Taux_impositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taux_imposition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Taux_impositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Taux_impositionAggregateArgs>(args: Subset<T, Taux_impositionAggregateArgs>): Prisma.PrismaPromise<GetTaux_impositionAggregateType<T>>

    /**
     * Group by Taux_imposition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taux_impositionGroupByArgs} args - Group by arguments.
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
      T extends taux_impositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taux_impositionGroupByArgs['orderBy'] }
        : { orderBy?: taux_impositionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, taux_impositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaux_impositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the taux_imposition model
   */
  readonly fields: taux_impositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for taux_imposition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taux_impositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the taux_imposition model
   */
  interface taux_impositionFieldRefs {
    readonly id: FieldRef<"taux_imposition", 'BigInt'>
    readonly uuid: FieldRef<"taux_imposition", 'String'>
    readonly code: FieldRef<"taux_imposition", 'String'>
    readonly pourcentage: FieldRef<"taux_imposition", 'Float'>
    readonly description: FieldRef<"taux_imposition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * taux_imposition findUnique
   */
  export type taux_impositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * Filter, which taux_imposition to fetch.
     */
    where: taux_impositionWhereUniqueInput
  }

  /**
   * taux_imposition findUniqueOrThrow
   */
  export type taux_impositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * Filter, which taux_imposition to fetch.
     */
    where: taux_impositionWhereUniqueInput
  }

  /**
   * taux_imposition findFirst
   */
  export type taux_impositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * Filter, which taux_imposition to fetch.
     */
    where?: taux_impositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taux_impositions to fetch.
     */
    orderBy?: taux_impositionOrderByWithRelationInput | taux_impositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taux_impositions.
     */
    cursor?: taux_impositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taux_impositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taux_impositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taux_impositions.
     */
    distinct?: Taux_impositionScalarFieldEnum | Taux_impositionScalarFieldEnum[]
  }

  /**
   * taux_imposition findFirstOrThrow
   */
  export type taux_impositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * Filter, which taux_imposition to fetch.
     */
    where?: taux_impositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taux_impositions to fetch.
     */
    orderBy?: taux_impositionOrderByWithRelationInput | taux_impositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taux_impositions.
     */
    cursor?: taux_impositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taux_impositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taux_impositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taux_impositions.
     */
    distinct?: Taux_impositionScalarFieldEnum | Taux_impositionScalarFieldEnum[]
  }

  /**
   * taux_imposition findMany
   */
  export type taux_impositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * Filter, which taux_impositions to fetch.
     */
    where?: taux_impositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taux_impositions to fetch.
     */
    orderBy?: taux_impositionOrderByWithRelationInput | taux_impositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing taux_impositions.
     */
    cursor?: taux_impositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taux_impositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taux_impositions.
     */
    skip?: number
    distinct?: Taux_impositionScalarFieldEnum | Taux_impositionScalarFieldEnum[]
  }

  /**
   * taux_imposition create
   */
  export type taux_impositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * The data needed to create a taux_imposition.
     */
    data: XOR<taux_impositionCreateInput, taux_impositionUncheckedCreateInput>
  }

  /**
   * taux_imposition createMany
   */
  export type taux_impositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many taux_impositions.
     */
    data: taux_impositionCreateManyInput | taux_impositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * taux_imposition update
   */
  export type taux_impositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * The data needed to update a taux_imposition.
     */
    data: XOR<taux_impositionUpdateInput, taux_impositionUncheckedUpdateInput>
    /**
     * Choose, which taux_imposition to update.
     */
    where: taux_impositionWhereUniqueInput
  }

  /**
   * taux_imposition updateMany
   */
  export type taux_impositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update taux_impositions.
     */
    data: XOR<taux_impositionUpdateManyMutationInput, taux_impositionUncheckedUpdateManyInput>
    /**
     * Filter which taux_impositions to update
     */
    where?: taux_impositionWhereInput
    /**
     * Limit how many taux_impositions to update.
     */
    limit?: number
  }

  /**
   * taux_imposition upsert
   */
  export type taux_impositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * The filter to search for the taux_imposition to update in case it exists.
     */
    where: taux_impositionWhereUniqueInput
    /**
     * In case the taux_imposition found by the `where` argument doesn't exist, create a new taux_imposition with this data.
     */
    create: XOR<taux_impositionCreateInput, taux_impositionUncheckedCreateInput>
    /**
     * In case the taux_imposition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taux_impositionUpdateInput, taux_impositionUncheckedUpdateInput>
  }

  /**
   * taux_imposition delete
   */
  export type taux_impositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
    /**
     * Filter which taux_imposition to delete.
     */
    where: taux_impositionWhereUniqueInput
  }

  /**
   * taux_imposition deleteMany
   */
  export type taux_impositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which taux_impositions to delete
     */
    where?: taux_impositionWhereInput
    /**
     * Limit how many taux_impositions to delete.
     */
    limit?: number
  }

  /**
   * taux_imposition without action
   */
  export type taux_impositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the taux_imposition
     */
    select?: taux_impositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the taux_imposition
     */
    omit?: taux_impositionOmit<ExtArgs> | null
  }


  /**
   * Model type_facture
   */

  export type AggregateType_facture = {
    _count: Type_factureCountAggregateOutputType | null
    _avg: Type_factureAvgAggregateOutputType | null
    _sum: Type_factureSumAggregateOutputType | null
    _min: Type_factureMinAggregateOutputType | null
    _max: Type_factureMaxAggregateOutputType | null
  }

  export type Type_factureAvgAggregateOutputType = {
    id: number | null
  }

  export type Type_factureSumAggregateOutputType = {
    id: bigint | null
  }

  export type Type_factureMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_type_facture: string | null
    libelle_type_facture: string | null
  }

  export type Type_factureMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_type_facture: string | null
    libelle_type_facture: string | null
  }

  export type Type_factureCountAggregateOutputType = {
    id: number
    uuid: number
    code_type_facture: number
    libelle_type_facture: number
    _all: number
  }


  export type Type_factureAvgAggregateInputType = {
    id?: true
  }

  export type Type_factureSumAggregateInputType = {
    id?: true
  }

  export type Type_factureMinAggregateInputType = {
    id?: true
    uuid?: true
    code_type_facture?: true
    libelle_type_facture?: true
  }

  export type Type_factureMaxAggregateInputType = {
    id?: true
    uuid?: true
    code_type_facture?: true
    libelle_type_facture?: true
  }

  export type Type_factureCountAggregateInputType = {
    id?: true
    uuid?: true
    code_type_facture?: true
    libelle_type_facture?: true
    _all?: true
  }

  export type Type_factureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_facture to aggregate.
     */
    where?: type_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_factures to fetch.
     */
    orderBy?: type_factureOrderByWithRelationInput | type_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: type_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned type_factures
    **/
    _count?: true | Type_factureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Type_factureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Type_factureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_factureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_factureMaxAggregateInputType
  }

  export type GetType_factureAggregateType<T extends Type_factureAggregateArgs> = {
        [P in keyof T & keyof AggregateType_facture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_facture[P]>
      : GetScalarType<T[P], AggregateType_facture[P]>
  }




  export type type_factureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: type_factureWhereInput
    orderBy?: type_factureOrderByWithAggregationInput | type_factureOrderByWithAggregationInput[]
    by: Type_factureScalarFieldEnum[] | Type_factureScalarFieldEnum
    having?: type_factureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_factureCountAggregateInputType | true
    _avg?: Type_factureAvgAggregateInputType
    _sum?: Type_factureSumAggregateInputType
    _min?: Type_factureMinAggregateInputType
    _max?: Type_factureMaxAggregateInputType
  }

  export type Type_factureGroupByOutputType = {
    id: bigint
    uuid: string
    code_type_facture: string
    libelle_type_facture: string
    _count: Type_factureCountAggregateOutputType | null
    _avg: Type_factureAvgAggregateOutputType | null
    _sum: Type_factureSumAggregateOutputType | null
    _min: Type_factureMinAggregateOutputType | null
    _max: Type_factureMaxAggregateOutputType | null
  }

  type GetType_factureGroupByPayload<T extends type_factureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_factureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_factureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_factureGroupByOutputType[P]>
            : GetScalarType<T[P], Type_factureGroupByOutputType[P]>
        }
      >
    >


  export type type_factureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code_type_facture?: boolean
    libelle_type_facture?: boolean
  }, ExtArgs["result"]["type_facture"]>



  export type type_factureSelectScalar = {
    id?: boolean
    uuid?: boolean
    code_type_facture?: boolean
    libelle_type_facture?: boolean
  }

  export type type_factureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code_type_facture" | "libelle_type_facture", ExtArgs["result"]["type_facture"]>

  export type $type_facturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "type_facture"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      code_type_facture: string
      libelle_type_facture: string
    }, ExtArgs["result"]["type_facture"]>
    composites: {}
  }

  type type_factureGetPayload<S extends boolean | null | undefined | type_factureDefaultArgs> = $Result.GetResult<Prisma.$type_facturePayload, S>

  type type_factureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<type_factureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Type_factureCountAggregateInputType | true
    }

  export interface type_factureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['type_facture'], meta: { name: 'type_facture' } }
    /**
     * Find zero or one Type_facture that matches the filter.
     * @param {type_factureFindUniqueArgs} args - Arguments to find a Type_facture
     * @example
     * // Get one Type_facture
     * const type_facture = await prisma.type_facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends type_factureFindUniqueArgs>(args: SelectSubset<T, type_factureFindUniqueArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type_facture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {type_factureFindUniqueOrThrowArgs} args - Arguments to find a Type_facture
     * @example
     * // Get one Type_facture
     * const type_facture = await prisma.type_facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends type_factureFindUniqueOrThrowArgs>(args: SelectSubset<T, type_factureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_factureFindFirstArgs} args - Arguments to find a Type_facture
     * @example
     * // Get one Type_facture
     * const type_facture = await prisma.type_facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends type_factureFindFirstArgs>(args?: SelectSubset<T, type_factureFindFirstArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_factureFindFirstOrThrowArgs} args - Arguments to find a Type_facture
     * @example
     * // Get one Type_facture
     * const type_facture = await prisma.type_facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends type_factureFindFirstOrThrowArgs>(args?: SelectSubset<T, type_factureFindFirstOrThrowArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Type_factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_factureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_factures
     * const type_factures = await prisma.type_facture.findMany()
     * 
     * // Get first 10 Type_factures
     * const type_factures = await prisma.type_facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const type_factureWithIdOnly = await prisma.type_facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends type_factureFindManyArgs>(args?: SelectSubset<T, type_factureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type_facture.
     * @param {type_factureCreateArgs} args - Arguments to create a Type_facture.
     * @example
     * // Create one Type_facture
     * const Type_facture = await prisma.type_facture.create({
     *   data: {
     *     // ... data to create a Type_facture
     *   }
     * })
     * 
     */
    create<T extends type_factureCreateArgs>(args: SelectSubset<T, type_factureCreateArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Type_factures.
     * @param {type_factureCreateManyArgs} args - Arguments to create many Type_factures.
     * @example
     * // Create many Type_factures
     * const type_facture = await prisma.type_facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends type_factureCreateManyArgs>(args?: SelectSubset<T, type_factureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type_facture.
     * @param {type_factureDeleteArgs} args - Arguments to delete one Type_facture.
     * @example
     * // Delete one Type_facture
     * const Type_facture = await prisma.type_facture.delete({
     *   where: {
     *     // ... filter to delete one Type_facture
     *   }
     * })
     * 
     */
    delete<T extends type_factureDeleteArgs>(args: SelectSubset<T, type_factureDeleteArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type_facture.
     * @param {type_factureUpdateArgs} args - Arguments to update one Type_facture.
     * @example
     * // Update one Type_facture
     * const type_facture = await prisma.type_facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends type_factureUpdateArgs>(args: SelectSubset<T, type_factureUpdateArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Type_factures.
     * @param {type_factureDeleteManyArgs} args - Arguments to filter Type_factures to delete.
     * @example
     * // Delete a few Type_factures
     * const { count } = await prisma.type_facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends type_factureDeleteManyArgs>(args?: SelectSubset<T, type_factureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_factureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_factures
     * const type_facture = await prisma.type_facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends type_factureUpdateManyArgs>(args: SelectSubset<T, type_factureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type_facture.
     * @param {type_factureUpsertArgs} args - Arguments to update or create a Type_facture.
     * @example
     * // Update or create a Type_facture
     * const type_facture = await prisma.type_facture.upsert({
     *   create: {
     *     // ... data to create a Type_facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_facture we want to update
     *   }
     * })
     */
    upsert<T extends type_factureUpsertArgs>(args: SelectSubset<T, type_factureUpsertArgs<ExtArgs>>): Prisma__type_factureClient<$Result.GetResult<Prisma.$type_facturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Type_factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_factureCountArgs} args - Arguments to filter Type_factures to count.
     * @example
     * // Count the number of Type_factures
     * const count = await prisma.type_facture.count({
     *   where: {
     *     // ... the filter for the Type_factures we want to count
     *   }
     * })
    **/
    count<T extends type_factureCountArgs>(
      args?: Subset<T, type_factureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_factureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_factureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Type_factureAggregateArgs>(args: Subset<T, Type_factureAggregateArgs>): Prisma.PrismaPromise<GetType_factureAggregateType<T>>

    /**
     * Group by Type_facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_factureGroupByArgs} args - Group by arguments.
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
      T extends type_factureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: type_factureGroupByArgs['orderBy'] }
        : { orderBy?: type_factureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, type_factureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_factureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the type_facture model
   */
  readonly fields: type_factureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for type_facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__type_factureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the type_facture model
   */
  interface type_factureFieldRefs {
    readonly id: FieldRef<"type_facture", 'BigInt'>
    readonly uuid: FieldRef<"type_facture", 'String'>
    readonly code_type_facture: FieldRef<"type_facture", 'String'>
    readonly libelle_type_facture: FieldRef<"type_facture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * type_facture findUnique
   */
  export type type_factureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * Filter, which type_facture to fetch.
     */
    where: type_factureWhereUniqueInput
  }

  /**
   * type_facture findUniqueOrThrow
   */
  export type type_factureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * Filter, which type_facture to fetch.
     */
    where: type_factureWhereUniqueInput
  }

  /**
   * type_facture findFirst
   */
  export type type_factureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * Filter, which type_facture to fetch.
     */
    where?: type_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_factures to fetch.
     */
    orderBy?: type_factureOrderByWithRelationInput | type_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_factures.
     */
    cursor?: type_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_factures.
     */
    distinct?: Type_factureScalarFieldEnum | Type_factureScalarFieldEnum[]
  }

  /**
   * type_facture findFirstOrThrow
   */
  export type type_factureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * Filter, which type_facture to fetch.
     */
    where?: type_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_factures to fetch.
     */
    orderBy?: type_factureOrderByWithRelationInput | type_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_factures.
     */
    cursor?: type_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_factures.
     */
    distinct?: Type_factureScalarFieldEnum | Type_factureScalarFieldEnum[]
  }

  /**
   * type_facture findMany
   */
  export type type_factureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * Filter, which type_factures to fetch.
     */
    where?: type_factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_factures to fetch.
     */
    orderBy?: type_factureOrderByWithRelationInput | type_factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing type_factures.
     */
    cursor?: type_factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_factures.
     */
    skip?: number
    distinct?: Type_factureScalarFieldEnum | Type_factureScalarFieldEnum[]
  }

  /**
   * type_facture create
   */
  export type type_factureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * The data needed to create a type_facture.
     */
    data: XOR<type_factureCreateInput, type_factureUncheckedCreateInput>
  }

  /**
   * type_facture createMany
   */
  export type type_factureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many type_factures.
     */
    data: type_factureCreateManyInput | type_factureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_facture update
   */
  export type type_factureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * The data needed to update a type_facture.
     */
    data: XOR<type_factureUpdateInput, type_factureUncheckedUpdateInput>
    /**
     * Choose, which type_facture to update.
     */
    where: type_factureWhereUniqueInput
  }

  /**
   * type_facture updateMany
   */
  export type type_factureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update type_factures.
     */
    data: XOR<type_factureUpdateManyMutationInput, type_factureUncheckedUpdateManyInput>
    /**
     * Filter which type_factures to update
     */
    where?: type_factureWhereInput
    /**
     * Limit how many type_factures to update.
     */
    limit?: number
  }

  /**
   * type_facture upsert
   */
  export type type_factureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * The filter to search for the type_facture to update in case it exists.
     */
    where: type_factureWhereUniqueInput
    /**
     * In case the type_facture found by the `where` argument doesn't exist, create a new type_facture with this data.
     */
    create: XOR<type_factureCreateInput, type_factureUncheckedCreateInput>
    /**
     * In case the type_facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<type_factureUpdateInput, type_factureUncheckedUpdateInput>
  }

  /**
   * type_facture delete
   */
  export type type_factureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
    /**
     * Filter which type_facture to delete.
     */
    where: type_factureWhereUniqueInput
  }

  /**
   * type_facture deleteMany
   */
  export type type_factureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_factures to delete
     */
    where?: type_factureWhereInput
    /**
     * Limit how many type_factures to delete.
     */
    limit?: number
  }

  /**
   * type_facture without action
   */
  export type type_factureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facture
     */
    select?: type_factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facture
     */
    omit?: type_factureOmit<ExtArgs> | null
  }


  /**
   * Model devise
   */

  export type AggregateDevise = {
    _count: DeviseCountAggregateOutputType | null
    _avg: DeviseAvgAggregateOutputType | null
    _sum: DeviseSumAggregateOutputType | null
    _min: DeviseMinAggregateOutputType | null
    _max: DeviseMaxAggregateOutputType | null
  }

  export type DeviseAvgAggregateOutputType = {
    id: number | null
  }

  export type DeviseSumAggregateOutputType = {
    id: bigint | null
  }

  export type DeviseMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_devise: string | null
    taux_devise: string | null
    description: string | null
  }

  export type DeviseMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_devise: string | null
    taux_devise: string | null
    description: string | null
  }

  export type DeviseCountAggregateOutputType = {
    id: number
    uuid: number
    code_devise: number
    taux_devise: number
    description: number
    _all: number
  }


  export type DeviseAvgAggregateInputType = {
    id?: true
  }

  export type DeviseSumAggregateInputType = {
    id?: true
  }

  export type DeviseMinAggregateInputType = {
    id?: true
    uuid?: true
    code_devise?: true
    taux_devise?: true
    description?: true
  }

  export type DeviseMaxAggregateInputType = {
    id?: true
    uuid?: true
    code_devise?: true
    taux_devise?: true
    description?: true
  }

  export type DeviseCountAggregateInputType = {
    id?: true
    uuid?: true
    code_devise?: true
    taux_devise?: true
    description?: true
    _all?: true
  }

  export type DeviseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devise to aggregate.
     */
    where?: deviseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devises to fetch.
     */
    orderBy?: deviseOrderByWithRelationInput | deviseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deviseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devises
    **/
    _count?: true | DeviseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviseMaxAggregateInputType
  }

  export type GetDeviseAggregateType<T extends DeviseAggregateArgs> = {
        [P in keyof T & keyof AggregateDevise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevise[P]>
      : GetScalarType<T[P], AggregateDevise[P]>
  }




  export type deviseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviseWhereInput
    orderBy?: deviseOrderByWithAggregationInput | deviseOrderByWithAggregationInput[]
    by: DeviseScalarFieldEnum[] | DeviseScalarFieldEnum
    having?: deviseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviseCountAggregateInputType | true
    _avg?: DeviseAvgAggregateInputType
    _sum?: DeviseSumAggregateInputType
    _min?: DeviseMinAggregateInputType
    _max?: DeviseMaxAggregateInputType
  }

  export type DeviseGroupByOutputType = {
    id: bigint
    uuid: string
    code_devise: string
    taux_devise: string
    description: string
    _count: DeviseCountAggregateOutputType | null
    _avg: DeviseAvgAggregateOutputType | null
    _sum: DeviseSumAggregateOutputType | null
    _min: DeviseMinAggregateOutputType | null
    _max: DeviseMaxAggregateOutputType | null
  }

  type GetDeviseGroupByPayload<T extends deviseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviseGroupByOutputType[P]>
            : GetScalarType<T[P], DeviseGroupByOutputType[P]>
        }
      >
    >


  export type deviseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code_devise?: boolean
    taux_devise?: boolean
    description?: boolean
  }, ExtArgs["result"]["devise"]>



  export type deviseSelectScalar = {
    id?: boolean
    uuid?: boolean
    code_devise?: boolean
    taux_devise?: boolean
    description?: boolean
  }

  export type deviseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code_devise" | "taux_devise" | "description", ExtArgs["result"]["devise"]>

  export type $devisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "devise"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      code_devise: string
      taux_devise: string
      description: string
    }, ExtArgs["result"]["devise"]>
    composites: {}
  }

  type deviseGetPayload<S extends boolean | null | undefined | deviseDefaultArgs> = $Result.GetResult<Prisma.$devisePayload, S>

  type deviseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deviseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviseCountAggregateInputType | true
    }

  export interface deviseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['devise'], meta: { name: 'devise' } }
    /**
     * Find zero or one Devise that matches the filter.
     * @param {deviseFindUniqueArgs} args - Arguments to find a Devise
     * @example
     * // Get one Devise
     * const devise = await prisma.devise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deviseFindUniqueArgs>(args: SelectSubset<T, deviseFindUniqueArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deviseFindUniqueOrThrowArgs} args - Arguments to find a Devise
     * @example
     * // Get one Devise
     * const devise = await prisma.devise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deviseFindUniqueOrThrowArgs>(args: SelectSubset<T, deviseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviseFindFirstArgs} args - Arguments to find a Devise
     * @example
     * // Get one Devise
     * const devise = await prisma.devise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deviseFindFirstArgs>(args?: SelectSubset<T, deviseFindFirstArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviseFindFirstOrThrowArgs} args - Arguments to find a Devise
     * @example
     * // Get one Devise
     * const devise = await prisma.devise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deviseFindFirstOrThrowArgs>(args?: SelectSubset<T, deviseFindFirstOrThrowArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devises
     * const devises = await prisma.devise.findMany()
     * 
     * // Get first 10 Devises
     * const devises = await prisma.devise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviseWithIdOnly = await prisma.devise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends deviseFindManyArgs>(args?: SelectSubset<T, deviseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devise.
     * @param {deviseCreateArgs} args - Arguments to create a Devise.
     * @example
     * // Create one Devise
     * const Devise = await prisma.devise.create({
     *   data: {
     *     // ... data to create a Devise
     *   }
     * })
     * 
     */
    create<T extends deviseCreateArgs>(args: SelectSubset<T, deviseCreateArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devises.
     * @param {deviseCreateManyArgs} args - Arguments to create many Devises.
     * @example
     * // Create many Devises
     * const devise = await prisma.devise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deviseCreateManyArgs>(args?: SelectSubset<T, deviseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Devise.
     * @param {deviseDeleteArgs} args - Arguments to delete one Devise.
     * @example
     * // Delete one Devise
     * const Devise = await prisma.devise.delete({
     *   where: {
     *     // ... filter to delete one Devise
     *   }
     * })
     * 
     */
    delete<T extends deviseDeleteArgs>(args: SelectSubset<T, deviseDeleteArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devise.
     * @param {deviseUpdateArgs} args - Arguments to update one Devise.
     * @example
     * // Update one Devise
     * const devise = await prisma.devise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deviseUpdateArgs>(args: SelectSubset<T, deviseUpdateArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devises.
     * @param {deviseDeleteManyArgs} args - Arguments to filter Devises to delete.
     * @example
     * // Delete a few Devises
     * const { count } = await prisma.devise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deviseDeleteManyArgs>(args?: SelectSubset<T, deviseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devises
     * const devise = await prisma.devise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deviseUpdateManyArgs>(args: SelectSubset<T, deviseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Devise.
     * @param {deviseUpsertArgs} args - Arguments to update or create a Devise.
     * @example
     * // Update or create a Devise
     * const devise = await prisma.devise.upsert({
     *   create: {
     *     // ... data to create a Devise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devise we want to update
     *   }
     * })
     */
    upsert<T extends deviseUpsertArgs>(args: SelectSubset<T, deviseUpsertArgs<ExtArgs>>): Prisma__deviseClient<$Result.GetResult<Prisma.$devisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviseCountArgs} args - Arguments to filter Devises to count.
     * @example
     * // Count the number of Devises
     * const count = await prisma.devise.count({
     *   where: {
     *     // ... the filter for the Devises we want to count
     *   }
     * })
    **/
    count<T extends deviseCountArgs>(
      args?: Subset<T, deviseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviseAggregateArgs>(args: Subset<T, DeviseAggregateArgs>): Prisma.PrismaPromise<GetDeviseAggregateType<T>>

    /**
     * Group by Devise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviseGroupByArgs} args - Group by arguments.
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
      T extends deviseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deviseGroupByArgs['orderBy'] }
        : { orderBy?: deviseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, deviseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the devise model
   */
  readonly fields: deviseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for devise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deviseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the devise model
   */
  interface deviseFieldRefs {
    readonly id: FieldRef<"devise", 'BigInt'>
    readonly uuid: FieldRef<"devise", 'String'>
    readonly code_devise: FieldRef<"devise", 'String'>
    readonly taux_devise: FieldRef<"devise", 'String'>
    readonly description: FieldRef<"devise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * devise findUnique
   */
  export type deviseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * Filter, which devise to fetch.
     */
    where: deviseWhereUniqueInput
  }

  /**
   * devise findUniqueOrThrow
   */
  export type deviseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * Filter, which devise to fetch.
     */
    where: deviseWhereUniqueInput
  }

  /**
   * devise findFirst
   */
  export type deviseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * Filter, which devise to fetch.
     */
    where?: deviseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devises to fetch.
     */
    orderBy?: deviseOrderByWithRelationInput | deviseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devises.
     */
    cursor?: deviseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devises.
     */
    distinct?: DeviseScalarFieldEnum | DeviseScalarFieldEnum[]
  }

  /**
   * devise findFirstOrThrow
   */
  export type deviseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * Filter, which devise to fetch.
     */
    where?: deviseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devises to fetch.
     */
    orderBy?: deviseOrderByWithRelationInput | deviseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devises.
     */
    cursor?: deviseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devises.
     */
    distinct?: DeviseScalarFieldEnum | DeviseScalarFieldEnum[]
  }

  /**
   * devise findMany
   */
  export type deviseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * Filter, which devises to fetch.
     */
    where?: deviseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devises to fetch.
     */
    orderBy?: deviseOrderByWithRelationInput | deviseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devises.
     */
    cursor?: deviseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devises.
     */
    skip?: number
    distinct?: DeviseScalarFieldEnum | DeviseScalarFieldEnum[]
  }

  /**
   * devise create
   */
  export type deviseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * The data needed to create a devise.
     */
    data: XOR<deviseCreateInput, deviseUncheckedCreateInput>
  }

  /**
   * devise createMany
   */
  export type deviseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devises.
     */
    data: deviseCreateManyInput | deviseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * devise update
   */
  export type deviseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * The data needed to update a devise.
     */
    data: XOR<deviseUpdateInput, deviseUncheckedUpdateInput>
    /**
     * Choose, which devise to update.
     */
    where: deviseWhereUniqueInput
  }

  /**
   * devise updateMany
   */
  export type deviseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devises.
     */
    data: XOR<deviseUpdateManyMutationInput, deviseUncheckedUpdateManyInput>
    /**
     * Filter which devises to update
     */
    where?: deviseWhereInput
    /**
     * Limit how many devises to update.
     */
    limit?: number
  }

  /**
   * devise upsert
   */
  export type deviseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * The filter to search for the devise to update in case it exists.
     */
    where: deviseWhereUniqueInput
    /**
     * In case the devise found by the `where` argument doesn't exist, create a new devise with this data.
     */
    create: XOR<deviseCreateInput, deviseUncheckedCreateInput>
    /**
     * In case the devise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deviseUpdateInput, deviseUncheckedUpdateInput>
  }

  /**
   * devise delete
   */
  export type deviseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
    /**
     * Filter which devise to delete.
     */
    where: deviseWhereUniqueInput
  }

  /**
   * devise deleteMany
   */
  export type deviseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devises to delete
     */
    where?: deviseWhereInput
    /**
     * Limit how many devises to delete.
     */
    limit?: number
  }

  /**
   * devise without action
   */
  export type deviseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the devise
     */
    select?: deviseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the devise
     */
    omit?: deviseOmit<ExtArgs> | null
  }


  /**
   * Model type_facturation
   */

  export type AggregateType_facturation = {
    _count: Type_facturationCountAggregateOutputType | null
    _avg: Type_facturationAvgAggregateOutputType | null
    _sum: Type_facturationSumAggregateOutputType | null
    _min: Type_facturationMinAggregateOutputType | null
    _max: Type_facturationMaxAggregateOutputType | null
  }

  export type Type_facturationAvgAggregateOutputType = {
    id: number | null
  }

  export type Type_facturationSumAggregateOutputType = {
    id: bigint | null
  }

  export type Type_facturationMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_type_facturaction: string | null
    libelle_type_facturation: string | null
  }

  export type Type_facturationMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code_type_facturaction: string | null
    libelle_type_facturation: string | null
  }

  export type Type_facturationCountAggregateOutputType = {
    id: number
    uuid: number
    code_type_facturaction: number
    libelle_type_facturation: number
    _all: number
  }


  export type Type_facturationAvgAggregateInputType = {
    id?: true
  }

  export type Type_facturationSumAggregateInputType = {
    id?: true
  }

  export type Type_facturationMinAggregateInputType = {
    id?: true
    uuid?: true
    code_type_facturaction?: true
    libelle_type_facturation?: true
  }

  export type Type_facturationMaxAggregateInputType = {
    id?: true
    uuid?: true
    code_type_facturaction?: true
    libelle_type_facturation?: true
  }

  export type Type_facturationCountAggregateInputType = {
    id?: true
    uuid?: true
    code_type_facturaction?: true
    libelle_type_facturation?: true
    _all?: true
  }

  export type Type_facturationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_facturation to aggregate.
     */
    where?: type_facturationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_facturations to fetch.
     */
    orderBy?: type_facturationOrderByWithRelationInput | type_facturationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: type_facturationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_facturations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_facturations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned type_facturations
    **/
    _count?: true | Type_facturationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Type_facturationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Type_facturationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_facturationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_facturationMaxAggregateInputType
  }

  export type GetType_facturationAggregateType<T extends Type_facturationAggregateArgs> = {
        [P in keyof T & keyof AggregateType_facturation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_facturation[P]>
      : GetScalarType<T[P], AggregateType_facturation[P]>
  }




  export type type_facturationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: type_facturationWhereInput
    orderBy?: type_facturationOrderByWithAggregationInput | type_facturationOrderByWithAggregationInput[]
    by: Type_facturationScalarFieldEnum[] | Type_facturationScalarFieldEnum
    having?: type_facturationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_facturationCountAggregateInputType | true
    _avg?: Type_facturationAvgAggregateInputType
    _sum?: Type_facturationSumAggregateInputType
    _min?: Type_facturationMinAggregateInputType
    _max?: Type_facturationMaxAggregateInputType
  }

  export type Type_facturationGroupByOutputType = {
    id: bigint
    uuid: string
    code_type_facturaction: string
    libelle_type_facturation: string
    _count: Type_facturationCountAggregateOutputType | null
    _avg: Type_facturationAvgAggregateOutputType | null
    _sum: Type_facturationSumAggregateOutputType | null
    _min: Type_facturationMinAggregateOutputType | null
    _max: Type_facturationMaxAggregateOutputType | null
  }

  type GetType_facturationGroupByPayload<T extends type_facturationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_facturationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_facturationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_facturationGroupByOutputType[P]>
            : GetScalarType<T[P], Type_facturationGroupByOutputType[P]>
        }
      >
    >


  export type type_facturationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code_type_facturaction?: boolean
    libelle_type_facturation?: boolean
  }, ExtArgs["result"]["type_facturation"]>



  export type type_facturationSelectScalar = {
    id?: boolean
    uuid?: boolean
    code_type_facturaction?: boolean
    libelle_type_facturation?: boolean
  }

  export type type_facturationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code_type_facturaction" | "libelle_type_facturation", ExtArgs["result"]["type_facturation"]>

  export type $type_facturationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "type_facturation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      code_type_facturaction: string
      libelle_type_facturation: string
    }, ExtArgs["result"]["type_facturation"]>
    composites: {}
  }

  type type_facturationGetPayload<S extends boolean | null | undefined | type_facturationDefaultArgs> = $Result.GetResult<Prisma.$type_facturationPayload, S>

  type type_facturationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<type_facturationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Type_facturationCountAggregateInputType | true
    }

  export interface type_facturationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['type_facturation'], meta: { name: 'type_facturation' } }
    /**
     * Find zero or one Type_facturation that matches the filter.
     * @param {type_facturationFindUniqueArgs} args - Arguments to find a Type_facturation
     * @example
     * // Get one Type_facturation
     * const type_facturation = await prisma.type_facturation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends type_facturationFindUniqueArgs>(args: SelectSubset<T, type_facturationFindUniqueArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type_facturation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {type_facturationFindUniqueOrThrowArgs} args - Arguments to find a Type_facturation
     * @example
     * // Get one Type_facturation
     * const type_facturation = await prisma.type_facturation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends type_facturationFindUniqueOrThrowArgs>(args: SelectSubset<T, type_facturationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_facturation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_facturationFindFirstArgs} args - Arguments to find a Type_facturation
     * @example
     * // Get one Type_facturation
     * const type_facturation = await prisma.type_facturation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends type_facturationFindFirstArgs>(args?: SelectSubset<T, type_facturationFindFirstArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_facturation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_facturationFindFirstOrThrowArgs} args - Arguments to find a Type_facturation
     * @example
     * // Get one Type_facturation
     * const type_facturation = await prisma.type_facturation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends type_facturationFindFirstOrThrowArgs>(args?: SelectSubset<T, type_facturationFindFirstOrThrowArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Type_facturations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_facturationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_facturations
     * const type_facturations = await prisma.type_facturation.findMany()
     * 
     * // Get first 10 Type_facturations
     * const type_facturations = await prisma.type_facturation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const type_facturationWithIdOnly = await prisma.type_facturation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends type_facturationFindManyArgs>(args?: SelectSubset<T, type_facturationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type_facturation.
     * @param {type_facturationCreateArgs} args - Arguments to create a Type_facturation.
     * @example
     * // Create one Type_facturation
     * const Type_facturation = await prisma.type_facturation.create({
     *   data: {
     *     // ... data to create a Type_facturation
     *   }
     * })
     * 
     */
    create<T extends type_facturationCreateArgs>(args: SelectSubset<T, type_facturationCreateArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Type_facturations.
     * @param {type_facturationCreateManyArgs} args - Arguments to create many Type_facturations.
     * @example
     * // Create many Type_facturations
     * const type_facturation = await prisma.type_facturation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends type_facturationCreateManyArgs>(args?: SelectSubset<T, type_facturationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type_facturation.
     * @param {type_facturationDeleteArgs} args - Arguments to delete one Type_facturation.
     * @example
     * // Delete one Type_facturation
     * const Type_facturation = await prisma.type_facturation.delete({
     *   where: {
     *     // ... filter to delete one Type_facturation
     *   }
     * })
     * 
     */
    delete<T extends type_facturationDeleteArgs>(args: SelectSubset<T, type_facturationDeleteArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type_facturation.
     * @param {type_facturationUpdateArgs} args - Arguments to update one Type_facturation.
     * @example
     * // Update one Type_facturation
     * const type_facturation = await prisma.type_facturation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends type_facturationUpdateArgs>(args: SelectSubset<T, type_facturationUpdateArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Type_facturations.
     * @param {type_facturationDeleteManyArgs} args - Arguments to filter Type_facturations to delete.
     * @example
     * // Delete a few Type_facturations
     * const { count } = await prisma.type_facturation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends type_facturationDeleteManyArgs>(args?: SelectSubset<T, type_facturationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_facturations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_facturationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_facturations
     * const type_facturation = await prisma.type_facturation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends type_facturationUpdateManyArgs>(args: SelectSubset<T, type_facturationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type_facturation.
     * @param {type_facturationUpsertArgs} args - Arguments to update or create a Type_facturation.
     * @example
     * // Update or create a Type_facturation
     * const type_facturation = await prisma.type_facturation.upsert({
     *   create: {
     *     // ... data to create a Type_facturation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_facturation we want to update
     *   }
     * })
     */
    upsert<T extends type_facturationUpsertArgs>(args: SelectSubset<T, type_facturationUpsertArgs<ExtArgs>>): Prisma__type_facturationClient<$Result.GetResult<Prisma.$type_facturationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Type_facturations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_facturationCountArgs} args - Arguments to filter Type_facturations to count.
     * @example
     * // Count the number of Type_facturations
     * const count = await prisma.type_facturation.count({
     *   where: {
     *     // ... the filter for the Type_facturations we want to count
     *   }
     * })
    **/
    count<T extends type_facturationCountArgs>(
      args?: Subset<T, type_facturationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_facturationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_facturation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_facturationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Type_facturationAggregateArgs>(args: Subset<T, Type_facturationAggregateArgs>): Prisma.PrismaPromise<GetType_facturationAggregateType<T>>

    /**
     * Group by Type_facturation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_facturationGroupByArgs} args - Group by arguments.
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
      T extends type_facturationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: type_facturationGroupByArgs['orderBy'] }
        : { orderBy?: type_facturationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, type_facturationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_facturationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the type_facturation model
   */
  readonly fields: type_facturationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for type_facturation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__type_facturationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the type_facturation model
   */
  interface type_facturationFieldRefs {
    readonly id: FieldRef<"type_facturation", 'BigInt'>
    readonly uuid: FieldRef<"type_facturation", 'String'>
    readonly code_type_facturaction: FieldRef<"type_facturation", 'String'>
    readonly libelle_type_facturation: FieldRef<"type_facturation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * type_facturation findUnique
   */
  export type type_facturationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * Filter, which type_facturation to fetch.
     */
    where: type_facturationWhereUniqueInput
  }

  /**
   * type_facturation findUniqueOrThrow
   */
  export type type_facturationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * Filter, which type_facturation to fetch.
     */
    where: type_facturationWhereUniqueInput
  }

  /**
   * type_facturation findFirst
   */
  export type type_facturationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * Filter, which type_facturation to fetch.
     */
    where?: type_facturationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_facturations to fetch.
     */
    orderBy?: type_facturationOrderByWithRelationInput | type_facturationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_facturations.
     */
    cursor?: type_facturationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_facturations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_facturations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_facturations.
     */
    distinct?: Type_facturationScalarFieldEnum | Type_facturationScalarFieldEnum[]
  }

  /**
   * type_facturation findFirstOrThrow
   */
  export type type_facturationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * Filter, which type_facturation to fetch.
     */
    where?: type_facturationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_facturations to fetch.
     */
    orderBy?: type_facturationOrderByWithRelationInput | type_facturationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_facturations.
     */
    cursor?: type_facturationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_facturations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_facturations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_facturations.
     */
    distinct?: Type_facturationScalarFieldEnum | Type_facturationScalarFieldEnum[]
  }

  /**
   * type_facturation findMany
   */
  export type type_facturationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * Filter, which type_facturations to fetch.
     */
    where?: type_facturationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_facturations to fetch.
     */
    orderBy?: type_facturationOrderByWithRelationInput | type_facturationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing type_facturations.
     */
    cursor?: type_facturationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_facturations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_facturations.
     */
    skip?: number
    distinct?: Type_facturationScalarFieldEnum | Type_facturationScalarFieldEnum[]
  }

  /**
   * type_facturation create
   */
  export type type_facturationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * The data needed to create a type_facturation.
     */
    data: XOR<type_facturationCreateInput, type_facturationUncheckedCreateInput>
  }

  /**
   * type_facturation createMany
   */
  export type type_facturationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many type_facturations.
     */
    data: type_facturationCreateManyInput | type_facturationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_facturation update
   */
  export type type_facturationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * The data needed to update a type_facturation.
     */
    data: XOR<type_facturationUpdateInput, type_facturationUncheckedUpdateInput>
    /**
     * Choose, which type_facturation to update.
     */
    where: type_facturationWhereUniqueInput
  }

  /**
   * type_facturation updateMany
   */
  export type type_facturationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update type_facturations.
     */
    data: XOR<type_facturationUpdateManyMutationInput, type_facturationUncheckedUpdateManyInput>
    /**
     * Filter which type_facturations to update
     */
    where?: type_facturationWhereInput
    /**
     * Limit how many type_facturations to update.
     */
    limit?: number
  }

  /**
   * type_facturation upsert
   */
  export type type_facturationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * The filter to search for the type_facturation to update in case it exists.
     */
    where: type_facturationWhereUniqueInput
    /**
     * In case the type_facturation found by the `where` argument doesn't exist, create a new type_facturation with this data.
     */
    create: XOR<type_facturationCreateInput, type_facturationUncheckedCreateInput>
    /**
     * In case the type_facturation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<type_facturationUpdateInput, type_facturationUncheckedUpdateInput>
  }

  /**
   * type_facturation delete
   */
  export type type_facturationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
    /**
     * Filter which type_facturation to delete.
     */
    where: type_facturationWhereUniqueInput
  }

  /**
   * type_facturation deleteMany
   */
  export type type_facturationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_facturations to delete
     */
    where?: type_facturationWhereInput
    /**
     * Limit how many type_facturations to delete.
     */
    limit?: number
  }

  /**
   * type_facturation without action
   */
  export type type_facturationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_facturation
     */
    select?: type_facturationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_facturation
     */
    omit?: type_facturationOmit<ExtArgs> | null
  }


  /**
   * Model sticker
   */

  export type AggregateSticker = {
    _count: StickerCountAggregateOutputType | null
    _avg: StickerAvgAggregateOutputType | null
    _sum: StickerSumAggregateOutputType | null
    _min: StickerMinAggregateOutputType | null
    _max: StickerMaxAggregateOutputType | null
  }

  export type StickerAvgAggregateOutputType = {
    id: number | null
    societe_id: number | null
    balance_sticker: number | null
  }

  export type StickerSumAggregateOutputType = {
    id: number | null
    societe_id: number | null
    balance_sticker: number | null
  }

  export type StickerMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    balance_sticker: number | null
    date_maj: Date | null
  }

  export type StickerMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    balance_sticker: number | null
    date_maj: Date | null
  }

  export type StickerCountAggregateOutputType = {
    id: number
    uuid: number
    societe_id: number
    balance_sticker: number
    date_maj: number
    _all: number
  }


  export type StickerAvgAggregateInputType = {
    id?: true
    societe_id?: true
    balance_sticker?: true
  }

  export type StickerSumAggregateInputType = {
    id?: true
    societe_id?: true
    balance_sticker?: true
  }

  export type StickerMinAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    balance_sticker?: true
    date_maj?: true
  }

  export type StickerMaxAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    balance_sticker?: true
    date_maj?: true
  }

  export type StickerCountAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    balance_sticker?: true
    date_maj?: true
    _all?: true
  }

  export type StickerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sticker to aggregate.
     */
    where?: stickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stickers to fetch.
     */
    orderBy?: stickerOrderByWithRelationInput | stickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stickers
    **/
    _count?: true | StickerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StickerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StickerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StickerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StickerMaxAggregateInputType
  }

  export type GetStickerAggregateType<T extends StickerAggregateArgs> = {
        [P in keyof T & keyof AggregateSticker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSticker[P]>
      : GetScalarType<T[P], AggregateSticker[P]>
  }




  export type stickerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stickerWhereInput
    orderBy?: stickerOrderByWithAggregationInput | stickerOrderByWithAggregationInput[]
    by: StickerScalarFieldEnum[] | StickerScalarFieldEnum
    having?: stickerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StickerCountAggregateInputType | true
    _avg?: StickerAvgAggregateInputType
    _sum?: StickerSumAggregateInputType
    _min?: StickerMinAggregateInputType
    _max?: StickerMaxAggregateInputType
  }

  export type StickerGroupByOutputType = {
    id: number
    uuid: string
    societe_id: number
    balance_sticker: number | null
    date_maj: Date | null
    _count: StickerCountAggregateOutputType | null
    _avg: StickerAvgAggregateOutputType | null
    _sum: StickerSumAggregateOutputType | null
    _min: StickerMinAggregateOutputType | null
    _max: StickerMaxAggregateOutputType | null
  }

  type GetStickerGroupByPayload<T extends stickerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StickerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StickerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StickerGroupByOutputType[P]>
            : GetScalarType<T[P], StickerGroupByOutputType[P]>
        }
      >
    >


  export type stickerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    balance_sticker?: boolean
    date_maj?: boolean
    societe?: boolean | societeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sticker"]>



  export type stickerSelectScalar = {
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    balance_sticker?: boolean
    date_maj?: boolean
  }

  export type stickerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "societe_id" | "balance_sticker" | "date_maj", ExtArgs["result"]["sticker"]>
  export type stickerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    societe?: boolean | societeDefaultArgs<ExtArgs>
  }

  export type $stickerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sticker"
    objects: {
      societe: Prisma.$societePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      societe_id: number
      balance_sticker: number | null
      date_maj: Date | null
    }, ExtArgs["result"]["sticker"]>
    composites: {}
  }

  type stickerGetPayload<S extends boolean | null | undefined | stickerDefaultArgs> = $Result.GetResult<Prisma.$stickerPayload, S>

  type stickerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stickerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StickerCountAggregateInputType | true
    }

  export interface stickerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sticker'], meta: { name: 'sticker' } }
    /**
     * Find zero or one Sticker that matches the filter.
     * @param {stickerFindUniqueArgs} args - Arguments to find a Sticker
     * @example
     * // Get one Sticker
     * const sticker = await prisma.sticker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stickerFindUniqueArgs>(args: SelectSubset<T, stickerFindUniqueArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sticker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stickerFindUniqueOrThrowArgs} args - Arguments to find a Sticker
     * @example
     * // Get one Sticker
     * const sticker = await prisma.sticker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stickerFindUniqueOrThrowArgs>(args: SelectSubset<T, stickerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sticker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stickerFindFirstArgs} args - Arguments to find a Sticker
     * @example
     * // Get one Sticker
     * const sticker = await prisma.sticker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stickerFindFirstArgs>(args?: SelectSubset<T, stickerFindFirstArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sticker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stickerFindFirstOrThrowArgs} args - Arguments to find a Sticker
     * @example
     * // Get one Sticker
     * const sticker = await prisma.sticker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stickerFindFirstOrThrowArgs>(args?: SelectSubset<T, stickerFindFirstOrThrowArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stickerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stickers
     * const stickers = await prisma.sticker.findMany()
     * 
     * // Get first 10 Stickers
     * const stickers = await prisma.sticker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stickerWithIdOnly = await prisma.sticker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stickerFindManyArgs>(args?: SelectSubset<T, stickerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sticker.
     * @param {stickerCreateArgs} args - Arguments to create a Sticker.
     * @example
     * // Create one Sticker
     * const Sticker = await prisma.sticker.create({
     *   data: {
     *     // ... data to create a Sticker
     *   }
     * })
     * 
     */
    create<T extends stickerCreateArgs>(args: SelectSubset<T, stickerCreateArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stickers.
     * @param {stickerCreateManyArgs} args - Arguments to create many Stickers.
     * @example
     * // Create many Stickers
     * const sticker = await prisma.sticker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stickerCreateManyArgs>(args?: SelectSubset<T, stickerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sticker.
     * @param {stickerDeleteArgs} args - Arguments to delete one Sticker.
     * @example
     * // Delete one Sticker
     * const Sticker = await prisma.sticker.delete({
     *   where: {
     *     // ... filter to delete one Sticker
     *   }
     * })
     * 
     */
    delete<T extends stickerDeleteArgs>(args: SelectSubset<T, stickerDeleteArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sticker.
     * @param {stickerUpdateArgs} args - Arguments to update one Sticker.
     * @example
     * // Update one Sticker
     * const sticker = await prisma.sticker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stickerUpdateArgs>(args: SelectSubset<T, stickerUpdateArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stickers.
     * @param {stickerDeleteManyArgs} args - Arguments to filter Stickers to delete.
     * @example
     * // Delete a few Stickers
     * const { count } = await prisma.sticker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stickerDeleteManyArgs>(args?: SelectSubset<T, stickerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stickerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stickers
     * const sticker = await prisma.sticker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stickerUpdateManyArgs>(args: SelectSubset<T, stickerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sticker.
     * @param {stickerUpsertArgs} args - Arguments to update or create a Sticker.
     * @example
     * // Update or create a Sticker
     * const sticker = await prisma.sticker.upsert({
     *   create: {
     *     // ... data to create a Sticker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sticker we want to update
     *   }
     * })
     */
    upsert<T extends stickerUpsertArgs>(args: SelectSubset<T, stickerUpsertArgs<ExtArgs>>): Prisma__stickerClient<$Result.GetResult<Prisma.$stickerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stickerCountArgs} args - Arguments to filter Stickers to count.
     * @example
     * // Count the number of Stickers
     * const count = await prisma.sticker.count({
     *   where: {
     *     // ... the filter for the Stickers we want to count
     *   }
     * })
    **/
    count<T extends stickerCountArgs>(
      args?: Subset<T, stickerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StickerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StickerAggregateArgs>(args: Subset<T, StickerAggregateArgs>): Prisma.PrismaPromise<GetStickerAggregateType<T>>

    /**
     * Group by Sticker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stickerGroupByArgs} args - Group by arguments.
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
      T extends stickerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stickerGroupByArgs['orderBy'] }
        : { orderBy?: stickerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stickerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStickerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sticker model
   */
  readonly fields: stickerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sticker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stickerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    societe<T extends societeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, societeDefaultArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sticker model
   */
  interface stickerFieldRefs {
    readonly id: FieldRef<"sticker", 'Int'>
    readonly uuid: FieldRef<"sticker", 'String'>
    readonly societe_id: FieldRef<"sticker", 'Int'>
    readonly balance_sticker: FieldRef<"sticker", 'Int'>
    readonly date_maj: FieldRef<"sticker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sticker findUnique
   */
  export type stickerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * Filter, which sticker to fetch.
     */
    where: stickerWhereUniqueInput
  }

  /**
   * sticker findUniqueOrThrow
   */
  export type stickerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * Filter, which sticker to fetch.
     */
    where: stickerWhereUniqueInput
  }

  /**
   * sticker findFirst
   */
  export type stickerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * Filter, which sticker to fetch.
     */
    where?: stickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stickers to fetch.
     */
    orderBy?: stickerOrderByWithRelationInput | stickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stickers.
     */
    cursor?: stickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stickers.
     */
    distinct?: StickerScalarFieldEnum | StickerScalarFieldEnum[]
  }

  /**
   * sticker findFirstOrThrow
   */
  export type stickerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * Filter, which sticker to fetch.
     */
    where?: stickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stickers to fetch.
     */
    orderBy?: stickerOrderByWithRelationInput | stickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stickers.
     */
    cursor?: stickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stickers.
     */
    distinct?: StickerScalarFieldEnum | StickerScalarFieldEnum[]
  }

  /**
   * sticker findMany
   */
  export type stickerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * Filter, which stickers to fetch.
     */
    where?: stickerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stickers to fetch.
     */
    orderBy?: stickerOrderByWithRelationInput | stickerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stickers.
     */
    cursor?: stickerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stickers.
     */
    skip?: number
    distinct?: StickerScalarFieldEnum | StickerScalarFieldEnum[]
  }

  /**
   * sticker create
   */
  export type stickerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * The data needed to create a sticker.
     */
    data: XOR<stickerCreateInput, stickerUncheckedCreateInput>
  }

  /**
   * sticker createMany
   */
  export type stickerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stickers.
     */
    data: stickerCreateManyInput | stickerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sticker update
   */
  export type stickerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * The data needed to update a sticker.
     */
    data: XOR<stickerUpdateInput, stickerUncheckedUpdateInput>
    /**
     * Choose, which sticker to update.
     */
    where: stickerWhereUniqueInput
  }

  /**
   * sticker updateMany
   */
  export type stickerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stickers.
     */
    data: XOR<stickerUpdateManyMutationInput, stickerUncheckedUpdateManyInput>
    /**
     * Filter which stickers to update
     */
    where?: stickerWhereInput
    /**
     * Limit how many stickers to update.
     */
    limit?: number
  }

  /**
   * sticker upsert
   */
  export type stickerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * The filter to search for the sticker to update in case it exists.
     */
    where: stickerWhereUniqueInput
    /**
     * In case the sticker found by the `where` argument doesn't exist, create a new sticker with this data.
     */
    create: XOR<stickerCreateInput, stickerUncheckedCreateInput>
    /**
     * In case the sticker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stickerUpdateInput, stickerUncheckedUpdateInput>
  }

  /**
   * sticker delete
   */
  export type stickerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
    /**
     * Filter which sticker to delete.
     */
    where: stickerWhereUniqueInput
  }

  /**
   * sticker deleteMany
   */
  export type stickerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stickers to delete
     */
    where?: stickerWhereInput
    /**
     * Limit how many stickers to delete.
     */
    limit?: number
  }

  /**
   * sticker without action
   */
  export type stickerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sticker
     */
    select?: stickerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sticker
     */
    omit?: stickerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stickerInclude<ExtArgs> | null
  }


  /**
   * Model configuration
   */

  export type AggregateConfiguration = {
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  export type ConfigurationAvgAggregateOutputType = {
    id: number | null
    societe_id: number | null
    production: number | null
  }

  export type ConfigurationSumAggregateOutputType = {
    id: number | null
    societe_id: number | null
    production: number | null
  }

  export type ConfigurationMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    cle_api_fne: string | null
    cle_api_locale: string | null
    production: number | null
  }

  export type ConfigurationMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    societe_id: number | null
    cle_api_fne: string | null
    cle_api_locale: string | null
    production: number | null
  }

  export type ConfigurationCountAggregateOutputType = {
    id: number
    uuid: number
    societe_id: number
    cle_api_fne: number
    cle_api_locale: number
    production: number
    _all: number
  }


  export type ConfigurationAvgAggregateInputType = {
    id?: true
    societe_id?: true
    production?: true
  }

  export type ConfigurationSumAggregateInputType = {
    id?: true
    societe_id?: true
    production?: true
  }

  export type ConfigurationMinAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    cle_api_fne?: true
    cle_api_locale?: true
    production?: true
  }

  export type ConfigurationMaxAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    cle_api_fne?: true
    cle_api_locale?: true
    production?: true
  }

  export type ConfigurationCountAggregateInputType = {
    id?: true
    uuid?: true
    societe_id?: true
    cle_api_fne?: true
    cle_api_locale?: true
    production?: true
    _all?: true
  }

  export type ConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuration to aggregate.
     */
    where?: configurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurations to fetch.
     */
    orderBy?: configurationOrderByWithRelationInput | configurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configurations
    **/
    _count?: true | ConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigurationMaxAggregateInputType
  }

  export type GetConfigurationAggregateType<T extends ConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguration[P]>
      : GetScalarType<T[P], AggregateConfiguration[P]>
  }




  export type configurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configurationWhereInput
    orderBy?: configurationOrderByWithAggregationInput | configurationOrderByWithAggregationInput[]
    by: ConfigurationScalarFieldEnum[] | ConfigurationScalarFieldEnum
    having?: configurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigurationCountAggregateInputType | true
    _avg?: ConfigurationAvgAggregateInputType
    _sum?: ConfigurationSumAggregateInputType
    _min?: ConfigurationMinAggregateInputType
    _max?: ConfigurationMaxAggregateInputType
  }

  export type ConfigurationGroupByOutputType = {
    id: number
    uuid: string
    societe_id: number
    cle_api_fne: string | null
    cle_api_locale: string | null
    production: number
    _count: ConfigurationCountAggregateOutputType | null
    _avg: ConfigurationAvgAggregateOutputType | null
    _sum: ConfigurationSumAggregateOutputType | null
    _min: ConfigurationMinAggregateOutputType | null
    _max: ConfigurationMaxAggregateOutputType | null
  }

  type GetConfigurationGroupByPayload<T extends configurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type configurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    cle_api_fne?: boolean
    cle_api_locale?: boolean
    production?: boolean
    societe?: boolean | societeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuration"]>



  export type configurationSelectScalar = {
    id?: boolean
    uuid?: boolean
    societe_id?: boolean
    cle_api_fne?: boolean
    cle_api_locale?: boolean
    production?: boolean
  }

  export type configurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "societe_id" | "cle_api_fne" | "cle_api_locale" | "production", ExtArgs["result"]["configuration"]>
  export type configurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    societe?: boolean | societeDefaultArgs<ExtArgs>
  }

  export type $configurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuration"
    objects: {
      societe: Prisma.$societePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      societe_id: number
      cle_api_fne: string | null
      cle_api_locale: string | null
      production: number
    }, ExtArgs["result"]["configuration"]>
    composites: {}
  }

  type configurationGetPayload<S extends boolean | null | undefined | configurationDefaultArgs> = $Result.GetResult<Prisma.$configurationPayload, S>

  type configurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigurationCountAggregateInputType | true
    }

  export interface configurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuration'], meta: { name: 'configuration' } }
    /**
     * Find zero or one Configuration that matches the filter.
     * @param {configurationFindUniqueArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configurationFindUniqueArgs>(args: SelectSubset<T, configurationFindUniqueArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configurationFindUniqueOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configurationFindUniqueOrThrowArgs>(args: SelectSubset<T, configurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurationFindFirstArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configurationFindFirstArgs>(args?: SelectSubset<T, configurationFindFirstArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurationFindFirstOrThrowArgs} args - Arguments to find a Configuration
     * @example
     * // Get one Configuration
     * const configuration = await prisma.configuration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configurationFindFirstOrThrowArgs>(args?: SelectSubset<T, configurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configurations
     * const configurations = await prisma.configuration.findMany()
     * 
     * // Get first 10 Configurations
     * const configurations = await prisma.configuration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configurationWithIdOnly = await prisma.configuration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends configurationFindManyArgs>(args?: SelectSubset<T, configurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuration.
     * @param {configurationCreateArgs} args - Arguments to create a Configuration.
     * @example
     * // Create one Configuration
     * const Configuration = await prisma.configuration.create({
     *   data: {
     *     // ... data to create a Configuration
     *   }
     * })
     * 
     */
    create<T extends configurationCreateArgs>(args: SelectSubset<T, configurationCreateArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configurations.
     * @param {configurationCreateManyArgs} args - Arguments to create many Configurations.
     * @example
     * // Create many Configurations
     * const configuration = await prisma.configuration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configurationCreateManyArgs>(args?: SelectSubset<T, configurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Configuration.
     * @param {configurationDeleteArgs} args - Arguments to delete one Configuration.
     * @example
     * // Delete one Configuration
     * const Configuration = await prisma.configuration.delete({
     *   where: {
     *     // ... filter to delete one Configuration
     *   }
     * })
     * 
     */
    delete<T extends configurationDeleteArgs>(args: SelectSubset<T, configurationDeleteArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuration.
     * @param {configurationUpdateArgs} args - Arguments to update one Configuration.
     * @example
     * // Update one Configuration
     * const configuration = await prisma.configuration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configurationUpdateArgs>(args: SelectSubset<T, configurationUpdateArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configurations.
     * @param {configurationDeleteManyArgs} args - Arguments to filter Configurations to delete.
     * @example
     * // Delete a few Configurations
     * const { count } = await prisma.configuration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configurationDeleteManyArgs>(args?: SelectSubset<T, configurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configurations
     * const configuration = await prisma.configuration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configurationUpdateManyArgs>(args: SelectSubset<T, configurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuration.
     * @param {configurationUpsertArgs} args - Arguments to update or create a Configuration.
     * @example
     * // Update or create a Configuration
     * const configuration = await prisma.configuration.upsert({
     *   create: {
     *     // ... data to create a Configuration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuration we want to update
     *   }
     * })
     */
    upsert<T extends configurationUpsertArgs>(args: SelectSubset<T, configurationUpsertArgs<ExtArgs>>): Prisma__configurationClient<$Result.GetResult<Prisma.$configurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurationCountArgs} args - Arguments to filter Configurations to count.
     * @example
     * // Count the number of Configurations
     * const count = await prisma.configuration.count({
     *   where: {
     *     // ... the filter for the Configurations we want to count
     *   }
     * })
    **/
    count<T extends configurationCountArgs>(
      args?: Subset<T, configurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigurationAggregateArgs>(args: Subset<T, ConfigurationAggregateArgs>): Prisma.PrismaPromise<GetConfigurationAggregateType<T>>

    /**
     * Group by Configuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurationGroupByArgs} args - Group by arguments.
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
      T extends configurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configurationGroupByArgs['orderBy'] }
        : { orderBy?: configurationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, configurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuration model
   */
  readonly fields: configurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    societe<T extends societeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, societeDefaultArgs<ExtArgs>>): Prisma__societeClient<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the configuration model
   */
  interface configurationFieldRefs {
    readonly id: FieldRef<"configuration", 'Int'>
    readonly uuid: FieldRef<"configuration", 'String'>
    readonly societe_id: FieldRef<"configuration", 'Int'>
    readonly cle_api_fne: FieldRef<"configuration", 'String'>
    readonly cle_api_locale: FieldRef<"configuration", 'String'>
    readonly production: FieldRef<"configuration", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * configuration findUnique
   */
  export type configurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * Filter, which configuration to fetch.
     */
    where: configurationWhereUniqueInput
  }

  /**
   * configuration findUniqueOrThrow
   */
  export type configurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * Filter, which configuration to fetch.
     */
    where: configurationWhereUniqueInput
  }

  /**
   * configuration findFirst
   */
  export type configurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * Filter, which configuration to fetch.
     */
    where?: configurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurations to fetch.
     */
    orderBy?: configurationOrderByWithRelationInput | configurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configurations.
     */
    cursor?: configurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * configuration findFirstOrThrow
   */
  export type configurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * Filter, which configuration to fetch.
     */
    where?: configurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurations to fetch.
     */
    orderBy?: configurationOrderByWithRelationInput | configurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configurations.
     */
    cursor?: configurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configurations.
     */
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * configuration findMany
   */
  export type configurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * Filter, which configurations to fetch.
     */
    where?: configurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurations to fetch.
     */
    orderBy?: configurationOrderByWithRelationInput | configurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configurations.
     */
    cursor?: configurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurations.
     */
    skip?: number
    distinct?: ConfigurationScalarFieldEnum | ConfigurationScalarFieldEnum[]
  }

  /**
   * configuration create
   */
  export type configurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * The data needed to create a configuration.
     */
    data: XOR<configurationCreateInput, configurationUncheckedCreateInput>
  }

  /**
   * configuration createMany
   */
  export type configurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configurations.
     */
    data: configurationCreateManyInput | configurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuration update
   */
  export type configurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * The data needed to update a configuration.
     */
    data: XOR<configurationUpdateInput, configurationUncheckedUpdateInput>
    /**
     * Choose, which configuration to update.
     */
    where: configurationWhereUniqueInput
  }

  /**
   * configuration updateMany
   */
  export type configurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configurations.
     */
    data: XOR<configurationUpdateManyMutationInput, configurationUncheckedUpdateManyInput>
    /**
     * Filter which configurations to update
     */
    where?: configurationWhereInput
    /**
     * Limit how many configurations to update.
     */
    limit?: number
  }

  /**
   * configuration upsert
   */
  export type configurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * The filter to search for the configuration to update in case it exists.
     */
    where: configurationWhereUniqueInput
    /**
     * In case the configuration found by the `where` argument doesn't exist, create a new configuration with this data.
     */
    create: XOR<configurationCreateInput, configurationUncheckedCreateInput>
    /**
     * In case the configuration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configurationUpdateInput, configurationUncheckedUpdateInput>
  }

  /**
   * configuration delete
   */
  export type configurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
    /**
     * Filter which configuration to delete.
     */
    where: configurationWhereUniqueInput
  }

  /**
   * configuration deleteMany
   */
  export type configurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configurations to delete
     */
    where?: configurationWhereInput
    /**
     * Limit how many configurations to delete.
     */
    limit?: number
  }

  /**
   * configuration without action
   */
  export type configurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuration
     */
    select?: configurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuration
     */
    omit?: configurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: configurationInclude<ExtArgs> | null
  }


  /**
   * Model statut
   */

  export type AggregateStatut = {
    _count: StatutCountAggregateOutputType | null
    _avg: StatutAvgAggregateOutputType | null
    _sum: StatutSumAggregateOutputType | null
    _min: StatutMinAggregateOutputType | null
    _max: StatutMaxAggregateOutputType | null
  }

  export type StatutAvgAggregateOutputType = {
    id: number | null
  }

  export type StatutSumAggregateOutputType = {
    id: number | null
  }

  export type StatutMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    code: string | null
    description: string | null
  }

  export type StatutMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    code: string | null
    description: string | null
  }

  export type StatutCountAggregateOutputType = {
    id: number
    uuid: number
    code: number
    description: number
    _all: number
  }


  export type StatutAvgAggregateInputType = {
    id?: true
  }

  export type StatutSumAggregateInputType = {
    id?: true
  }

  export type StatutMinAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    description?: true
  }

  export type StatutMaxAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    description?: true
  }

  export type StatutCountAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    description?: true
    _all?: true
  }

  export type StatutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statut to aggregate.
     */
    where?: statutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuts to fetch.
     */
    orderBy?: statutOrderByWithRelationInput | statutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuts
    **/
    _count?: true | StatutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatutMaxAggregateInputType
  }

  export type GetStatutAggregateType<T extends StatutAggregateArgs> = {
        [P in keyof T & keyof AggregateStatut]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatut[P]>
      : GetScalarType<T[P], AggregateStatut[P]>
  }




  export type statutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statutWhereInput
    orderBy?: statutOrderByWithAggregationInput | statutOrderByWithAggregationInput[]
    by: StatutScalarFieldEnum[] | StatutScalarFieldEnum
    having?: statutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatutCountAggregateInputType | true
    _avg?: StatutAvgAggregateInputType
    _sum?: StatutSumAggregateInputType
    _min?: StatutMinAggregateInputType
    _max?: StatutMaxAggregateInputType
  }

  export type StatutGroupByOutputType = {
    id: number
    uuid: string
    code: string
    description: string | null
    _count: StatutCountAggregateOutputType | null
    _avg: StatutAvgAggregateOutputType | null
    _sum: StatutSumAggregateOutputType | null
    _min: StatutMinAggregateOutputType | null
    _max: StatutMaxAggregateOutputType | null
  }

  type GetStatutGroupByPayload<T extends statutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatutGroupByOutputType[P]>
            : GetScalarType<T[P], StatutGroupByOutputType[P]>
        }
      >
    >


  export type statutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code?: boolean
    description?: boolean
    societes?: boolean | statut$societesArgs<ExtArgs>
    licences?: boolean | statut$licencesArgs<ExtArgs>
    utilisateur_client?: boolean | statut$utilisateur_clientArgs<ExtArgs>
    _count?: boolean | StatutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statut"]>



  export type statutSelectScalar = {
    id?: boolean
    uuid?: boolean
    code?: boolean
    description?: boolean
  }

  export type statutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code" | "description", ExtArgs["result"]["statut"]>
  export type statutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    societes?: boolean | statut$societesArgs<ExtArgs>
    licences?: boolean | statut$licencesArgs<ExtArgs>
    utilisateur_client?: boolean | statut$utilisateur_clientArgs<ExtArgs>
    _count?: boolean | StatutCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $statutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "statut"
    objects: {
      societes: Prisma.$societePayload<ExtArgs>[]
      licences: Prisma.$licencePayload<ExtArgs>[]
      utilisateur_client: Prisma.$utilisateur_clientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      code: string
      description: string | null
    }, ExtArgs["result"]["statut"]>
    composites: {}
  }

  type statutGetPayload<S extends boolean | null | undefined | statutDefaultArgs> = $Result.GetResult<Prisma.$statutPayload, S>

  type statutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<statutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatutCountAggregateInputType | true
    }

  export interface statutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['statut'], meta: { name: 'statut' } }
    /**
     * Find zero or one Statut that matches the filter.
     * @param {statutFindUniqueArgs} args - Arguments to find a Statut
     * @example
     * // Get one Statut
     * const statut = await prisma.statut.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statutFindUniqueArgs>(args: SelectSubset<T, statutFindUniqueArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Statut that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {statutFindUniqueOrThrowArgs} args - Arguments to find a Statut
     * @example
     * // Get one Statut
     * const statut = await prisma.statut.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statutFindUniqueOrThrowArgs>(args: SelectSubset<T, statutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statut that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statutFindFirstArgs} args - Arguments to find a Statut
     * @example
     * // Get one Statut
     * const statut = await prisma.statut.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statutFindFirstArgs>(args?: SelectSubset<T, statutFindFirstArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statut that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statutFindFirstOrThrowArgs} args - Arguments to find a Statut
     * @example
     * // Get one Statut
     * const statut = await prisma.statut.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statutFindFirstOrThrowArgs>(args?: SelectSubset<T, statutFindFirstOrThrowArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuts
     * const statuts = await prisma.statut.findMany()
     * 
     * // Get first 10 Statuts
     * const statuts = await prisma.statut.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statutWithIdOnly = await prisma.statut.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends statutFindManyArgs>(args?: SelectSubset<T, statutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Statut.
     * @param {statutCreateArgs} args - Arguments to create a Statut.
     * @example
     * // Create one Statut
     * const Statut = await prisma.statut.create({
     *   data: {
     *     // ... data to create a Statut
     *   }
     * })
     * 
     */
    create<T extends statutCreateArgs>(args: SelectSubset<T, statutCreateArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuts.
     * @param {statutCreateManyArgs} args - Arguments to create many Statuts.
     * @example
     * // Create many Statuts
     * const statut = await prisma.statut.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends statutCreateManyArgs>(args?: SelectSubset<T, statutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statut.
     * @param {statutDeleteArgs} args - Arguments to delete one Statut.
     * @example
     * // Delete one Statut
     * const Statut = await prisma.statut.delete({
     *   where: {
     *     // ... filter to delete one Statut
     *   }
     * })
     * 
     */
    delete<T extends statutDeleteArgs>(args: SelectSubset<T, statutDeleteArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Statut.
     * @param {statutUpdateArgs} args - Arguments to update one Statut.
     * @example
     * // Update one Statut
     * const statut = await prisma.statut.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends statutUpdateArgs>(args: SelectSubset<T, statutUpdateArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuts.
     * @param {statutDeleteManyArgs} args - Arguments to filter Statuts to delete.
     * @example
     * // Delete a few Statuts
     * const { count } = await prisma.statut.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends statutDeleteManyArgs>(args?: SelectSubset<T, statutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuts
     * const statut = await prisma.statut.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends statutUpdateManyArgs>(args: SelectSubset<T, statutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statut.
     * @param {statutUpsertArgs} args - Arguments to update or create a Statut.
     * @example
     * // Update or create a Statut
     * const statut = await prisma.statut.upsert({
     *   create: {
     *     // ... data to create a Statut
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statut we want to update
     *   }
     * })
     */
    upsert<T extends statutUpsertArgs>(args: SelectSubset<T, statutUpsertArgs<ExtArgs>>): Prisma__statutClient<$Result.GetResult<Prisma.$statutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statutCountArgs} args - Arguments to filter Statuts to count.
     * @example
     * // Count the number of Statuts
     * const count = await prisma.statut.count({
     *   where: {
     *     // ... the filter for the Statuts we want to count
     *   }
     * })
    **/
    count<T extends statutCountArgs>(
      args?: Subset<T, statutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatutAggregateArgs>(args: Subset<T, StatutAggregateArgs>): Prisma.PrismaPromise<GetStatutAggregateType<T>>

    /**
     * Group by Statut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statutGroupByArgs} args - Group by arguments.
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
      T extends statutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statutGroupByArgs['orderBy'] }
        : { orderBy?: statutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, statutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the statut model
   */
  readonly fields: statutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for statut.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    societes<T extends statut$societesArgs<ExtArgs> = {}>(args?: Subset<T, statut$societesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$societePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licences<T extends statut$licencesArgs<ExtArgs> = {}>(args?: Subset<T, statut$licencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$licencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilisateur_client<T extends statut$utilisateur_clientArgs<ExtArgs> = {}>(args?: Subset<T, statut$utilisateur_clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the statut model
   */
  interface statutFieldRefs {
    readonly id: FieldRef<"statut", 'Int'>
    readonly uuid: FieldRef<"statut", 'String'>
    readonly code: FieldRef<"statut", 'String'>
    readonly description: FieldRef<"statut", 'String'>
  }
    

  // Custom InputTypes
  /**
   * statut findUnique
   */
  export type statutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * Filter, which statut to fetch.
     */
    where: statutWhereUniqueInput
  }

  /**
   * statut findUniqueOrThrow
   */
  export type statutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * Filter, which statut to fetch.
     */
    where: statutWhereUniqueInput
  }

  /**
   * statut findFirst
   */
  export type statutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * Filter, which statut to fetch.
     */
    where?: statutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuts to fetch.
     */
    orderBy?: statutOrderByWithRelationInput | statutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuts.
     */
    cursor?: statutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuts.
     */
    distinct?: StatutScalarFieldEnum | StatutScalarFieldEnum[]
  }

  /**
   * statut findFirstOrThrow
   */
  export type statutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * Filter, which statut to fetch.
     */
    where?: statutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuts to fetch.
     */
    orderBy?: statutOrderByWithRelationInput | statutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuts.
     */
    cursor?: statutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuts.
     */
    distinct?: StatutScalarFieldEnum | StatutScalarFieldEnum[]
  }

  /**
   * statut findMany
   */
  export type statutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * Filter, which statuts to fetch.
     */
    where?: statutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuts to fetch.
     */
    orderBy?: statutOrderByWithRelationInput | statutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuts.
     */
    cursor?: statutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuts.
     */
    skip?: number
    distinct?: StatutScalarFieldEnum | StatutScalarFieldEnum[]
  }

  /**
   * statut create
   */
  export type statutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * The data needed to create a statut.
     */
    data: XOR<statutCreateInput, statutUncheckedCreateInput>
  }

  /**
   * statut createMany
   */
  export type statutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statuts.
     */
    data: statutCreateManyInput | statutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * statut update
   */
  export type statutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * The data needed to update a statut.
     */
    data: XOR<statutUpdateInput, statutUncheckedUpdateInput>
    /**
     * Choose, which statut to update.
     */
    where: statutWhereUniqueInput
  }

  /**
   * statut updateMany
   */
  export type statutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statuts.
     */
    data: XOR<statutUpdateManyMutationInput, statutUncheckedUpdateManyInput>
    /**
     * Filter which statuts to update
     */
    where?: statutWhereInput
    /**
     * Limit how many statuts to update.
     */
    limit?: number
  }

  /**
   * statut upsert
   */
  export type statutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * The filter to search for the statut to update in case it exists.
     */
    where: statutWhereUniqueInput
    /**
     * In case the statut found by the `where` argument doesn't exist, create a new statut with this data.
     */
    create: XOR<statutCreateInput, statutUncheckedCreateInput>
    /**
     * In case the statut was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statutUpdateInput, statutUncheckedUpdateInput>
  }

  /**
   * statut delete
   */
  export type statutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
    /**
     * Filter which statut to delete.
     */
    where: statutWhereUniqueInput
  }

  /**
   * statut deleteMany
   */
  export type statutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuts to delete
     */
    where?: statutWhereInput
    /**
     * Limit how many statuts to delete.
     */
    limit?: number
  }

  /**
   * statut.societes
   */
  export type statut$societesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the societe
     */
    select?: societeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the societe
     */
    omit?: societeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: societeInclude<ExtArgs> | null
    where?: societeWhereInput
    orderBy?: societeOrderByWithRelationInput | societeOrderByWithRelationInput[]
    cursor?: societeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocieteScalarFieldEnum | SocieteScalarFieldEnum[]
  }

  /**
   * statut.licences
   */
  export type statut$licencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licence
     */
    select?: licenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the licence
     */
    omit?: licenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: licenceInclude<ExtArgs> | null
    where?: licenceWhereInput
    orderBy?: licenceOrderByWithRelationInput | licenceOrderByWithRelationInput[]
    cursor?: licenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenceScalarFieldEnum | LicenceScalarFieldEnum[]
  }

  /**
   * statut.utilisateur_client
   */
  export type statut$utilisateur_clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    where?: utilisateur_clientWhereInput
    orderBy?: utilisateur_clientOrderByWithRelationInput | utilisateur_clientOrderByWithRelationInput[]
    cursor?: utilisateur_clientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Utilisateur_clientScalarFieldEnum | Utilisateur_clientScalarFieldEnum[]
  }

  /**
   * statut without action
   */
  export type statutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statut
     */
    select?: statutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the statut
     */
    omit?: statutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statutInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: bigint | null
  }

  export type RoleMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    code: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    uuid: number
    code: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    uuid?: true
    code?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: bigint
    uuid: string
    code: string
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    code?: boolean
    description?: boolean
    utilisateur_client?: boolean | role$utilisateur_clientArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type roleSelectScalar = {
    id?: boolean
    uuid?: boolean
    code?: boolean
    description?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "code" | "description", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur_client?: boolean | role$utilisateur_clientArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      utilisateur_client: Prisma.$utilisateur_clientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      code: string
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
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
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur_client<T extends role$utilisateur_clientArgs<ExtArgs> = {}>(args?: Subset<T, role$utilisateur_clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateur_clientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'BigInt'>
    readonly uuid: FieldRef<"role", 'String'>
    readonly code: FieldRef<"role", 'String'>
    readonly description: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.utilisateur_client
   */
  export type role$utilisateur_clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_client
     */
    select?: utilisateur_clientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_client
     */
    omit?: utilisateur_clientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateur_clientInclude<ExtArgs> | null
    where?: utilisateur_clientWhereInput
    orderBy?: utilisateur_clientOrderByWithRelationInput | utilisateur_clientOrderByWithRelationInput[]
    cursor?: utilisateur_clientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Utilisateur_clientScalarFieldEnum | Utilisateur_clientScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model utilisateur_admin
   */

  export type AggregateUtilisateur_admin = {
    _count: Utilisateur_adminCountAggregateOutputType | null
    _avg: Utilisateur_adminAvgAggregateOutputType | null
    _sum: Utilisateur_adminSumAggregateOutputType | null
    _min: Utilisateur_adminMinAggregateOutputType | null
    _max: Utilisateur_adminMaxAggregateOutputType | null
  }

  export type Utilisateur_adminAvgAggregateOutputType = {
    id: number | null
    tokenVersion: number | null
  }

  export type Utilisateur_adminSumAggregateOutputType = {
    id: bigint | null
    tokenVersion: number | null
  }

  export type Utilisateur_adminMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    email: string | null
    login: string | null
    mot_de_passe: string | null
    nom_complet: string | null
    cree_le: Date | null
    dernier_login: Date | null
    otp_secret: string | null
    otp_expiration: Date | null
    tokenVersion: number | null
    verification_token: string | null
    verification_expiration: Date | null
  }

  export type Utilisateur_adminMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    email: string | null
    login: string | null
    mot_de_passe: string | null
    nom_complet: string | null
    cree_le: Date | null
    dernier_login: Date | null
    otp_secret: string | null
    otp_expiration: Date | null
    tokenVersion: number | null
    verification_token: string | null
    verification_expiration: Date | null
  }

  export type Utilisateur_adminCountAggregateOutputType = {
    id: number
    uuid: number
    email: number
    login: number
    mot_de_passe: number
    nom_complet: number
    cree_le: number
    dernier_login: number
    otp_secret: number
    otp_expiration: number
    tokenVersion: number
    verification_token: number
    verification_expiration: number
    _all: number
  }


  export type Utilisateur_adminAvgAggregateInputType = {
    id?: true
    tokenVersion?: true
  }

  export type Utilisateur_adminSumAggregateInputType = {
    id?: true
    tokenVersion?: true
  }

  export type Utilisateur_adminMinAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    login?: true
    mot_de_passe?: true
    nom_complet?: true
    cree_le?: true
    dernier_login?: true
    otp_secret?: true
    otp_expiration?: true
    tokenVersion?: true
    verification_token?: true
    verification_expiration?: true
  }

  export type Utilisateur_adminMaxAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    login?: true
    mot_de_passe?: true
    nom_complet?: true
    cree_le?: true
    dernier_login?: true
    otp_secret?: true
    otp_expiration?: true
    tokenVersion?: true
    verification_token?: true
    verification_expiration?: true
  }

  export type Utilisateur_adminCountAggregateInputType = {
    id?: true
    uuid?: true
    email?: true
    login?: true
    mot_de_passe?: true
    nom_complet?: true
    cree_le?: true
    dernier_login?: true
    otp_secret?: true
    otp_expiration?: true
    tokenVersion?: true
    verification_token?: true
    verification_expiration?: true
    _all?: true
  }

  export type Utilisateur_adminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateur_admin to aggregate.
     */
    where?: utilisateur_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_admins to fetch.
     */
    orderBy?: utilisateur_adminOrderByWithRelationInput | utilisateur_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilisateur_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilisateur_admins
    **/
    _count?: true | Utilisateur_adminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Utilisateur_adminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Utilisateur_adminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Utilisateur_adminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Utilisateur_adminMaxAggregateInputType
  }

  export type GetUtilisateur_adminAggregateType<T extends Utilisateur_adminAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur_admin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur_admin[P]>
      : GetScalarType<T[P], AggregateUtilisateur_admin[P]>
  }




  export type utilisateur_adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateur_adminWhereInput
    orderBy?: utilisateur_adminOrderByWithAggregationInput | utilisateur_adminOrderByWithAggregationInput[]
    by: Utilisateur_adminScalarFieldEnum[] | Utilisateur_adminScalarFieldEnum
    having?: utilisateur_adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Utilisateur_adminCountAggregateInputType | true
    _avg?: Utilisateur_adminAvgAggregateInputType
    _sum?: Utilisateur_adminSumAggregateInputType
    _min?: Utilisateur_adminMinAggregateInputType
    _max?: Utilisateur_adminMaxAggregateInputType
  }

  export type Utilisateur_adminGroupByOutputType = {
    id: bigint
    uuid: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le: Date
    dernier_login: Date | null
    otp_secret: string | null
    otp_expiration: Date | null
    tokenVersion: number
    verification_token: string | null
    verification_expiration: Date | null
    _count: Utilisateur_adminCountAggregateOutputType | null
    _avg: Utilisateur_adminAvgAggregateOutputType | null
    _sum: Utilisateur_adminSumAggregateOutputType | null
    _min: Utilisateur_adminMinAggregateOutputType | null
    _max: Utilisateur_adminMaxAggregateOutputType | null
  }

  type GetUtilisateur_adminGroupByPayload<T extends utilisateur_adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Utilisateur_adminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Utilisateur_adminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Utilisateur_adminGroupByOutputType[P]>
            : GetScalarType<T[P], Utilisateur_adminGroupByOutputType[P]>
        }
      >
    >


  export type utilisateur_adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    email?: boolean
    login?: boolean
    mot_de_passe?: boolean
    nom_complet?: boolean
    cree_le?: boolean
    dernier_login?: boolean
    otp_secret?: boolean
    otp_expiration?: boolean
    tokenVersion?: boolean
    verification_token?: boolean
    verification_expiration?: boolean
  }, ExtArgs["result"]["utilisateur_admin"]>



  export type utilisateur_adminSelectScalar = {
    id?: boolean
    uuid?: boolean
    email?: boolean
    login?: boolean
    mot_de_passe?: boolean
    nom_complet?: boolean
    cree_le?: boolean
    dernier_login?: boolean
    otp_secret?: boolean
    otp_expiration?: boolean
    tokenVersion?: boolean
    verification_token?: boolean
    verification_expiration?: boolean
  }

  export type utilisateur_adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "email" | "login" | "mot_de_passe" | "nom_complet" | "cree_le" | "dernier_login" | "otp_secret" | "otp_expiration" | "tokenVersion" | "verification_token" | "verification_expiration", ExtArgs["result"]["utilisateur_admin"]>

  export type $utilisateur_adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilisateur_admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      email: string
      login: string
      mot_de_passe: string
      nom_complet: string
      cree_le: Date
      dernier_login: Date | null
      otp_secret: string | null
      otp_expiration: Date | null
      tokenVersion: number
      verification_token: string | null
      verification_expiration: Date | null
    }, ExtArgs["result"]["utilisateur_admin"]>
    composites: {}
  }

  type utilisateur_adminGetPayload<S extends boolean | null | undefined | utilisateur_adminDefaultArgs> = $Result.GetResult<Prisma.$utilisateur_adminPayload, S>

  type utilisateur_adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilisateur_adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Utilisateur_adminCountAggregateInputType | true
    }

  export interface utilisateur_adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilisateur_admin'], meta: { name: 'utilisateur_admin' } }
    /**
     * Find zero or one Utilisateur_admin that matches the filter.
     * @param {utilisateur_adminFindUniqueArgs} args - Arguments to find a Utilisateur_admin
     * @example
     * // Get one Utilisateur_admin
     * const utilisateur_admin = await prisma.utilisateur_admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilisateur_adminFindUniqueArgs>(args: SelectSubset<T, utilisateur_adminFindUniqueArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur_admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilisateur_adminFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur_admin
     * @example
     * // Get one Utilisateur_admin
     * const utilisateur_admin = await prisma.utilisateur_admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilisateur_adminFindUniqueOrThrowArgs>(args: SelectSubset<T, utilisateur_adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur_admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_adminFindFirstArgs} args - Arguments to find a Utilisateur_admin
     * @example
     * // Get one Utilisateur_admin
     * const utilisateur_admin = await prisma.utilisateur_admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilisateur_adminFindFirstArgs>(args?: SelectSubset<T, utilisateur_adminFindFirstArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur_admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_adminFindFirstOrThrowArgs} args - Arguments to find a Utilisateur_admin
     * @example
     * // Get one Utilisateur_admin
     * const utilisateur_admin = await prisma.utilisateur_admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilisateur_adminFindFirstOrThrowArgs>(args?: SelectSubset<T, utilisateur_adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateur_admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateur_admins
     * const utilisateur_admins = await prisma.utilisateur_admin.findMany()
     * 
     * // Get first 10 Utilisateur_admins
     * const utilisateur_admins = await prisma.utilisateur_admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateur_adminWithIdOnly = await prisma.utilisateur_admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends utilisateur_adminFindManyArgs>(args?: SelectSubset<T, utilisateur_adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur_admin.
     * @param {utilisateur_adminCreateArgs} args - Arguments to create a Utilisateur_admin.
     * @example
     * // Create one Utilisateur_admin
     * const Utilisateur_admin = await prisma.utilisateur_admin.create({
     *   data: {
     *     // ... data to create a Utilisateur_admin
     *   }
     * })
     * 
     */
    create<T extends utilisateur_adminCreateArgs>(args: SelectSubset<T, utilisateur_adminCreateArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateur_admins.
     * @param {utilisateur_adminCreateManyArgs} args - Arguments to create many Utilisateur_admins.
     * @example
     * // Create many Utilisateur_admins
     * const utilisateur_admin = await prisma.utilisateur_admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilisateur_adminCreateManyArgs>(args?: SelectSubset<T, utilisateur_adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateur_admin.
     * @param {utilisateur_adminDeleteArgs} args - Arguments to delete one Utilisateur_admin.
     * @example
     * // Delete one Utilisateur_admin
     * const Utilisateur_admin = await prisma.utilisateur_admin.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur_admin
     *   }
     * })
     * 
     */
    delete<T extends utilisateur_adminDeleteArgs>(args: SelectSubset<T, utilisateur_adminDeleteArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur_admin.
     * @param {utilisateur_adminUpdateArgs} args - Arguments to update one Utilisateur_admin.
     * @example
     * // Update one Utilisateur_admin
     * const utilisateur_admin = await prisma.utilisateur_admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilisateur_adminUpdateArgs>(args: SelectSubset<T, utilisateur_adminUpdateArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateur_admins.
     * @param {utilisateur_adminDeleteManyArgs} args - Arguments to filter Utilisateur_admins to delete.
     * @example
     * // Delete a few Utilisateur_admins
     * const { count } = await prisma.utilisateur_admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilisateur_adminDeleteManyArgs>(args?: SelectSubset<T, utilisateur_adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateur_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateur_admins
     * const utilisateur_admin = await prisma.utilisateur_admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilisateur_adminUpdateManyArgs>(args: SelectSubset<T, utilisateur_adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur_admin.
     * @param {utilisateur_adminUpsertArgs} args - Arguments to update or create a Utilisateur_admin.
     * @example
     * // Update or create a Utilisateur_admin
     * const utilisateur_admin = await prisma.utilisateur_admin.upsert({
     *   create: {
     *     // ... data to create a Utilisateur_admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur_admin we want to update
     *   }
     * })
     */
    upsert<T extends utilisateur_adminUpsertArgs>(args: SelectSubset<T, utilisateur_adminUpsertArgs<ExtArgs>>): Prisma__utilisateur_adminClient<$Result.GetResult<Prisma.$utilisateur_adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateur_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_adminCountArgs} args - Arguments to filter Utilisateur_admins to count.
     * @example
     * // Count the number of Utilisateur_admins
     * const count = await prisma.utilisateur_admin.count({
     *   where: {
     *     // ... the filter for the Utilisateur_admins we want to count
     *   }
     * })
    **/
    count<T extends utilisateur_adminCountArgs>(
      args?: Subset<T, utilisateur_adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Utilisateur_adminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Utilisateur_adminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Utilisateur_adminAggregateArgs>(args: Subset<T, Utilisateur_adminAggregateArgs>): Prisma.PrismaPromise<GetUtilisateur_adminAggregateType<T>>

    /**
     * Group by Utilisateur_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateur_adminGroupByArgs} args - Group by arguments.
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
      T extends utilisateur_adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilisateur_adminGroupByArgs['orderBy'] }
        : { orderBy?: utilisateur_adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, utilisateur_adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateur_adminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilisateur_admin model
   */
  readonly fields: utilisateur_adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilisateur_admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilisateur_adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the utilisateur_admin model
   */
  interface utilisateur_adminFieldRefs {
    readonly id: FieldRef<"utilisateur_admin", 'BigInt'>
    readonly uuid: FieldRef<"utilisateur_admin", 'String'>
    readonly email: FieldRef<"utilisateur_admin", 'String'>
    readonly login: FieldRef<"utilisateur_admin", 'String'>
    readonly mot_de_passe: FieldRef<"utilisateur_admin", 'String'>
    readonly nom_complet: FieldRef<"utilisateur_admin", 'String'>
    readonly cree_le: FieldRef<"utilisateur_admin", 'DateTime'>
    readonly dernier_login: FieldRef<"utilisateur_admin", 'DateTime'>
    readonly otp_secret: FieldRef<"utilisateur_admin", 'String'>
    readonly otp_expiration: FieldRef<"utilisateur_admin", 'DateTime'>
    readonly tokenVersion: FieldRef<"utilisateur_admin", 'Int'>
    readonly verification_token: FieldRef<"utilisateur_admin", 'String'>
    readonly verification_expiration: FieldRef<"utilisateur_admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * utilisateur_admin findUnique
   */
  export type utilisateur_adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur_admin to fetch.
     */
    where: utilisateur_adminWhereUniqueInput
  }

  /**
   * utilisateur_admin findUniqueOrThrow
   */
  export type utilisateur_adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur_admin to fetch.
     */
    where: utilisateur_adminWhereUniqueInput
  }

  /**
   * utilisateur_admin findFirst
   */
  export type utilisateur_adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur_admin to fetch.
     */
    where?: utilisateur_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_admins to fetch.
     */
    orderBy?: utilisateur_adminOrderByWithRelationInput | utilisateur_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateur_admins.
     */
    cursor?: utilisateur_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateur_admins.
     */
    distinct?: Utilisateur_adminScalarFieldEnum | Utilisateur_adminScalarFieldEnum[]
  }

  /**
   * utilisateur_admin findFirstOrThrow
   */
  export type utilisateur_adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur_admin to fetch.
     */
    where?: utilisateur_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_admins to fetch.
     */
    orderBy?: utilisateur_adminOrderByWithRelationInput | utilisateur_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateur_admins.
     */
    cursor?: utilisateur_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateur_admins.
     */
    distinct?: Utilisateur_adminScalarFieldEnum | Utilisateur_adminScalarFieldEnum[]
  }

  /**
   * utilisateur_admin findMany
   */
  export type utilisateur_adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * Filter, which utilisateur_admins to fetch.
     */
    where?: utilisateur_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateur_admins to fetch.
     */
    orderBy?: utilisateur_adminOrderByWithRelationInput | utilisateur_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilisateur_admins.
     */
    cursor?: utilisateur_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateur_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateur_admins.
     */
    skip?: number
    distinct?: Utilisateur_adminScalarFieldEnum | Utilisateur_adminScalarFieldEnum[]
  }

  /**
   * utilisateur_admin create
   */
  export type utilisateur_adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * The data needed to create a utilisateur_admin.
     */
    data: XOR<utilisateur_adminCreateInput, utilisateur_adminUncheckedCreateInput>
  }

  /**
   * utilisateur_admin createMany
   */
  export type utilisateur_adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilisateur_admins.
     */
    data: utilisateur_adminCreateManyInput | utilisateur_adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilisateur_admin update
   */
  export type utilisateur_adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * The data needed to update a utilisateur_admin.
     */
    data: XOR<utilisateur_adminUpdateInput, utilisateur_adminUncheckedUpdateInput>
    /**
     * Choose, which utilisateur_admin to update.
     */
    where: utilisateur_adminWhereUniqueInput
  }

  /**
   * utilisateur_admin updateMany
   */
  export type utilisateur_adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilisateur_admins.
     */
    data: XOR<utilisateur_adminUpdateManyMutationInput, utilisateur_adminUncheckedUpdateManyInput>
    /**
     * Filter which utilisateur_admins to update
     */
    where?: utilisateur_adminWhereInput
    /**
     * Limit how many utilisateur_admins to update.
     */
    limit?: number
  }

  /**
   * utilisateur_admin upsert
   */
  export type utilisateur_adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * The filter to search for the utilisateur_admin to update in case it exists.
     */
    where: utilisateur_adminWhereUniqueInput
    /**
     * In case the utilisateur_admin found by the `where` argument doesn't exist, create a new utilisateur_admin with this data.
     */
    create: XOR<utilisateur_adminCreateInput, utilisateur_adminUncheckedCreateInput>
    /**
     * In case the utilisateur_admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilisateur_adminUpdateInput, utilisateur_adminUncheckedUpdateInput>
  }

  /**
   * utilisateur_admin delete
   */
  export type utilisateur_adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
    /**
     * Filter which utilisateur_admin to delete.
     */
    where: utilisateur_adminWhereUniqueInput
  }

  /**
   * utilisateur_admin deleteMany
   */
  export type utilisateur_adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateur_admins to delete
     */
    where?: utilisateur_adminWhereInput
    /**
     * Limit how many utilisateur_admins to delete.
     */
    limit?: number
  }

  /**
   * utilisateur_admin without action
   */
  export type utilisateur_adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur_admin
     */
    select?: utilisateur_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur_admin
     */
    omit?: utilisateur_adminOmit<ExtArgs> | null
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


  export const SocieteScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code_societe: 'code_societe',
    raison_sociale_societe: 'raison_sociale_societe',
    ncc: 'ncc',
    rccm: 'rccm',
    regime_imposition: 'regime_imposition',
    centre_impot: 'centre_impot',
    ref_bancaire: 'ref_bancaire',
    adresse: 'adresse',
    telephone: 'telephone',
    email: 'email',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le',
    bd_host: 'bd_host',
    bd_name: 'bd_name',
    bd_user: 'bd_user',
    bd_pass: 'bd_pass',
    bd_port: 'bd_port',
    logo_url: 'logo_url',
    statut_id: 'statut_id'
  };

  export type SocieteScalarFieldEnum = (typeof SocieteScalarFieldEnum)[keyof typeof SocieteScalarFieldEnum]


  export const EtablissementScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    societe_id: 'societe_id',
    code_etablissement: 'code_etablissement',
    libelle_etablissement: 'libelle_etablissement',
    localite_etablissement: 'localite_etablissement',
    cree_le: 'cree_le',
    modifie_le: 'modifie_le'
  };

  export type EtablissementScalarFieldEnum = (typeof EtablissementScalarFieldEnum)[keyof typeof EtablissementScalarFieldEnum]


  export const Point_venteScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    etablissement_id: 'etablissement_id',
    libelle_pdv: 'libelle_pdv',
    cree_le: 'cree_le'
  };

  export type Point_venteScalarFieldEnum = (typeof Point_venteScalarFieldEnum)[keyof typeof Point_venteScalarFieldEnum]


  export const LicenceScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    societe_id: 'societe_id',
    cle: 'cle',
    date_expiration: 'date_expiration',
    statut_id: 'statut_id'
  };

  export type LicenceScalarFieldEnum = (typeof LicenceScalarFieldEnum)[keyof typeof LicenceScalarFieldEnum]


  export const Utilisateur_clientScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    email: 'email',
    login: 'login',
    mot_de_passe: 'mot_de_passe',
    nom_complet: 'nom_complet',
    statut_id: 'statut_id',
    societe_id: 'societe_id',
    role_id: 'role_id',
    cree_le: 'cree_le',
    dernier_login: 'dernier_login',
    otp_secret: 'otp_secret',
    otp_expiration: 'otp_expiration',
    tokenVersion: 'tokenVersion',
    verification_token: 'verification_token',
    verification_expiration: 'verification_expiration'
  };

  export type Utilisateur_clientScalarFieldEnum = (typeof Utilisateur_clientScalarFieldEnum)[keyof typeof Utilisateur_clientScalarFieldEnum]


  export const Mode_paiementScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code_mode_paiement: 'code_mode_paiement',
    libelle_mode_paiement: 'libelle_mode_paiement'
  };

  export type Mode_paiementScalarFieldEnum = (typeof Mode_paiementScalarFieldEnum)[keyof typeof Mode_paiementScalarFieldEnum]


  export const Taux_impositionScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code: 'code',
    pourcentage: 'pourcentage',
    description: 'description'
  };

  export type Taux_impositionScalarFieldEnum = (typeof Taux_impositionScalarFieldEnum)[keyof typeof Taux_impositionScalarFieldEnum]


  export const Type_factureScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code_type_facture: 'code_type_facture',
    libelle_type_facture: 'libelle_type_facture'
  };

  export type Type_factureScalarFieldEnum = (typeof Type_factureScalarFieldEnum)[keyof typeof Type_factureScalarFieldEnum]


  export const DeviseScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code_devise: 'code_devise',
    taux_devise: 'taux_devise',
    description: 'description'
  };

  export type DeviseScalarFieldEnum = (typeof DeviseScalarFieldEnum)[keyof typeof DeviseScalarFieldEnum]


  export const Type_facturationScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code_type_facturaction: 'code_type_facturaction',
    libelle_type_facturation: 'libelle_type_facturation'
  };

  export type Type_facturationScalarFieldEnum = (typeof Type_facturationScalarFieldEnum)[keyof typeof Type_facturationScalarFieldEnum]


  export const StickerScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    societe_id: 'societe_id',
    balance_sticker: 'balance_sticker',
    date_maj: 'date_maj'
  };

  export type StickerScalarFieldEnum = (typeof StickerScalarFieldEnum)[keyof typeof StickerScalarFieldEnum]


  export const ConfigurationScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    societe_id: 'societe_id',
    cle_api_fne: 'cle_api_fne',
    cle_api_locale: 'cle_api_locale',
    production: 'production'
  };

  export type ConfigurationScalarFieldEnum = (typeof ConfigurationScalarFieldEnum)[keyof typeof ConfigurationScalarFieldEnum]


  export const StatutScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code: 'code',
    description: 'description'
  };

  export type StatutScalarFieldEnum = (typeof StatutScalarFieldEnum)[keyof typeof StatutScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    code: 'code',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Utilisateur_adminScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    email: 'email',
    login: 'login',
    mot_de_passe: 'mot_de_passe',
    nom_complet: 'nom_complet',
    cree_le: 'cree_le',
    dernier_login: 'dernier_login',
    otp_secret: 'otp_secret',
    otp_expiration: 'otp_expiration',
    tokenVersion: 'tokenVersion',
    verification_token: 'verification_token',
    verification_expiration: 'verification_expiration'
  };

  export type Utilisateur_adminScalarFieldEnum = (typeof Utilisateur_adminScalarFieldEnum)[keyof typeof Utilisateur_adminScalarFieldEnum]


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


  export const societeOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_societe: 'code_societe',
    raison_sociale_societe: 'raison_sociale_societe',
    ncc: 'ncc',
    rccm: 'rccm',
    regime_imposition: 'regime_imposition',
    centre_impot: 'centre_impot',
    ref_bancaire: 'ref_bancaire',
    adresse: 'adresse',
    telephone: 'telephone',
    email: 'email',
    bd_host: 'bd_host',
    bd_name: 'bd_name',
    bd_user: 'bd_user',
    bd_pass: 'bd_pass',
    logo_url: 'logo_url'
  };

  export type societeOrderByRelevanceFieldEnum = (typeof societeOrderByRelevanceFieldEnum)[keyof typeof societeOrderByRelevanceFieldEnum]


  export const etablissementOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_etablissement: 'code_etablissement',
    libelle_etablissement: 'libelle_etablissement',
    localite_etablissement: 'localite_etablissement'
  };

  export type etablissementOrderByRelevanceFieldEnum = (typeof etablissementOrderByRelevanceFieldEnum)[keyof typeof etablissementOrderByRelevanceFieldEnum]


  export const point_venteOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    libelle_pdv: 'libelle_pdv'
  };

  export type point_venteOrderByRelevanceFieldEnum = (typeof point_venteOrderByRelevanceFieldEnum)[keyof typeof point_venteOrderByRelevanceFieldEnum]


  export const licenceOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    cle: 'cle'
  };

  export type licenceOrderByRelevanceFieldEnum = (typeof licenceOrderByRelevanceFieldEnum)[keyof typeof licenceOrderByRelevanceFieldEnum]


  export const utilisateur_clientOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    email: 'email',
    login: 'login',
    mot_de_passe: 'mot_de_passe',
    nom_complet: 'nom_complet',
    otp_secret: 'otp_secret',
    verification_token: 'verification_token'
  };

  export type utilisateur_clientOrderByRelevanceFieldEnum = (typeof utilisateur_clientOrderByRelevanceFieldEnum)[keyof typeof utilisateur_clientOrderByRelevanceFieldEnum]


  export const mode_paiementOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_mode_paiement: 'code_mode_paiement',
    libelle_mode_paiement: 'libelle_mode_paiement'
  };

  export type mode_paiementOrderByRelevanceFieldEnum = (typeof mode_paiementOrderByRelevanceFieldEnum)[keyof typeof mode_paiementOrderByRelevanceFieldEnum]


  export const taux_impositionOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code: 'code',
    description: 'description'
  };

  export type taux_impositionOrderByRelevanceFieldEnum = (typeof taux_impositionOrderByRelevanceFieldEnum)[keyof typeof taux_impositionOrderByRelevanceFieldEnum]


  export const type_factureOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_type_facture: 'code_type_facture',
    libelle_type_facture: 'libelle_type_facture'
  };

  export type type_factureOrderByRelevanceFieldEnum = (typeof type_factureOrderByRelevanceFieldEnum)[keyof typeof type_factureOrderByRelevanceFieldEnum]


  export const deviseOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_devise: 'code_devise',
    taux_devise: 'taux_devise',
    description: 'description'
  };

  export type deviseOrderByRelevanceFieldEnum = (typeof deviseOrderByRelevanceFieldEnum)[keyof typeof deviseOrderByRelevanceFieldEnum]


  export const type_facturationOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code_type_facturaction: 'code_type_facturaction',
    libelle_type_facturation: 'libelle_type_facturation'
  };

  export type type_facturationOrderByRelevanceFieldEnum = (typeof type_facturationOrderByRelevanceFieldEnum)[keyof typeof type_facturationOrderByRelevanceFieldEnum]


  export const stickerOrderByRelevanceFieldEnum: {
    uuid: 'uuid'
  };

  export type stickerOrderByRelevanceFieldEnum = (typeof stickerOrderByRelevanceFieldEnum)[keyof typeof stickerOrderByRelevanceFieldEnum]


  export const configurationOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    cle_api_fne: 'cle_api_fne',
    cle_api_locale: 'cle_api_locale'
  };

  export type configurationOrderByRelevanceFieldEnum = (typeof configurationOrderByRelevanceFieldEnum)[keyof typeof configurationOrderByRelevanceFieldEnum]


  export const statutOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code: 'code',
    description: 'description'
  };

  export type statutOrderByRelevanceFieldEnum = (typeof statutOrderByRelevanceFieldEnum)[keyof typeof statutOrderByRelevanceFieldEnum]


  export const roleOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    code: 'code',
    description: 'description'
  };

  export type roleOrderByRelevanceFieldEnum = (typeof roleOrderByRelevanceFieldEnum)[keyof typeof roleOrderByRelevanceFieldEnum]


  export const utilisateur_adminOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    email: 'email',
    login: 'login',
    mot_de_passe: 'mot_de_passe',
    nom_complet: 'nom_complet',
    otp_secret: 'otp_secret',
    verification_token: 'verification_token'
  };

  export type utilisateur_adminOrderByRelevanceFieldEnum = (typeof utilisateur_adminOrderByRelevanceFieldEnum)[keyof typeof utilisateur_adminOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type societeWhereInput = {
    AND?: societeWhereInput | societeWhereInput[]
    OR?: societeWhereInput[]
    NOT?: societeWhereInput | societeWhereInput[]
    id?: IntFilter<"societe"> | number
    uuid?: StringFilter<"societe"> | string
    code_societe?: StringNullableFilter<"societe"> | string | null
    raison_sociale_societe?: StringNullableFilter<"societe"> | string | null
    ncc?: StringNullableFilter<"societe"> | string | null
    rccm?: StringNullableFilter<"societe"> | string | null
    regime_imposition?: StringNullableFilter<"societe"> | string | null
    centre_impot?: StringNullableFilter<"societe"> | string | null
    ref_bancaire?: StringNullableFilter<"societe"> | string | null
    adresse?: StringNullableFilter<"societe"> | string | null
    telephone?: StringNullableFilter<"societe"> | string | null
    email?: StringNullableFilter<"societe"> | string | null
    cree_le?: DateTimeNullableFilter<"societe"> | Date | string | null
    modifie_le?: DateTimeNullableFilter<"societe"> | Date | string | null
    bd_host?: StringNullableFilter<"societe"> | string | null
    bd_name?: StringNullableFilter<"societe"> | string | null
    bd_user?: StringNullableFilter<"societe"> | string | null
    bd_pass?: StringNullableFilter<"societe"> | string | null
    bd_port?: IntNullableFilter<"societe"> | number | null
    logo_url?: StringNullableFilter<"societe"> | string | null
    statut_id?: IntNullableFilter<"societe"> | number | null
    statut?: XOR<StatutNullableScalarRelationFilter, statutWhereInput> | null
    configuration?: XOR<ConfigurationNullableScalarRelationFilter, configurationWhereInput> | null
    etablissement?: EtablissementListRelationFilter
    utilisateur_client?: Utilisateur_clientListRelationFilter
    licences?: LicenceListRelationFilter
    stickers?: StickerListRelationFilter
  }

  export type societeOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_societe?: SortOrderInput | SortOrder
    raison_sociale_societe?: SortOrderInput | SortOrder
    ncc?: SortOrderInput | SortOrder
    rccm?: SortOrderInput | SortOrder
    regime_imposition?: SortOrderInput | SortOrder
    centre_impot?: SortOrderInput | SortOrder
    ref_bancaire?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    cree_le?: SortOrderInput | SortOrder
    modifie_le?: SortOrderInput | SortOrder
    bd_host?: SortOrderInput | SortOrder
    bd_name?: SortOrderInput | SortOrder
    bd_user?: SortOrderInput | SortOrder
    bd_pass?: SortOrderInput | SortOrder
    bd_port?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    statut_id?: SortOrderInput | SortOrder
    statut?: statutOrderByWithRelationInput
    configuration?: configurationOrderByWithRelationInput
    etablissement?: etablissementOrderByRelationAggregateInput
    utilisateur_client?: utilisateur_clientOrderByRelationAggregateInput
    licences?: licenceOrderByRelationAggregateInput
    stickers?: stickerOrderByRelationAggregateInput
    _relevance?: societeOrderByRelevanceInput
  }

  export type societeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    code_societe?: string
    AND?: societeWhereInput | societeWhereInput[]
    OR?: societeWhereInput[]
    NOT?: societeWhereInput | societeWhereInput[]
    raison_sociale_societe?: StringNullableFilter<"societe"> | string | null
    ncc?: StringNullableFilter<"societe"> | string | null
    rccm?: StringNullableFilter<"societe"> | string | null
    regime_imposition?: StringNullableFilter<"societe"> | string | null
    centre_impot?: StringNullableFilter<"societe"> | string | null
    ref_bancaire?: StringNullableFilter<"societe"> | string | null
    adresse?: StringNullableFilter<"societe"> | string | null
    telephone?: StringNullableFilter<"societe"> | string | null
    email?: StringNullableFilter<"societe"> | string | null
    cree_le?: DateTimeNullableFilter<"societe"> | Date | string | null
    modifie_le?: DateTimeNullableFilter<"societe"> | Date | string | null
    bd_host?: StringNullableFilter<"societe"> | string | null
    bd_name?: StringNullableFilter<"societe"> | string | null
    bd_user?: StringNullableFilter<"societe"> | string | null
    bd_pass?: StringNullableFilter<"societe"> | string | null
    bd_port?: IntNullableFilter<"societe"> | number | null
    logo_url?: StringNullableFilter<"societe"> | string | null
    statut_id?: IntNullableFilter<"societe"> | number | null
    statut?: XOR<StatutNullableScalarRelationFilter, statutWhereInput> | null
    configuration?: XOR<ConfigurationNullableScalarRelationFilter, configurationWhereInput> | null
    etablissement?: EtablissementListRelationFilter
    utilisateur_client?: Utilisateur_clientListRelationFilter
    licences?: LicenceListRelationFilter
    stickers?: StickerListRelationFilter
  }, "id" | "uuid" | "code_societe">

  export type societeOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_societe?: SortOrderInput | SortOrder
    raison_sociale_societe?: SortOrderInput | SortOrder
    ncc?: SortOrderInput | SortOrder
    rccm?: SortOrderInput | SortOrder
    regime_imposition?: SortOrderInput | SortOrder
    centre_impot?: SortOrderInput | SortOrder
    ref_bancaire?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    cree_le?: SortOrderInput | SortOrder
    modifie_le?: SortOrderInput | SortOrder
    bd_host?: SortOrderInput | SortOrder
    bd_name?: SortOrderInput | SortOrder
    bd_user?: SortOrderInput | SortOrder
    bd_pass?: SortOrderInput | SortOrder
    bd_port?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    statut_id?: SortOrderInput | SortOrder
    _count?: societeCountOrderByAggregateInput
    _avg?: societeAvgOrderByAggregateInput
    _max?: societeMaxOrderByAggregateInput
    _min?: societeMinOrderByAggregateInput
    _sum?: societeSumOrderByAggregateInput
  }

  export type societeScalarWhereWithAggregatesInput = {
    AND?: societeScalarWhereWithAggregatesInput | societeScalarWhereWithAggregatesInput[]
    OR?: societeScalarWhereWithAggregatesInput[]
    NOT?: societeScalarWhereWithAggregatesInput | societeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"societe"> | number
    uuid?: StringWithAggregatesFilter<"societe"> | string
    code_societe?: StringNullableWithAggregatesFilter<"societe"> | string | null
    raison_sociale_societe?: StringNullableWithAggregatesFilter<"societe"> | string | null
    ncc?: StringNullableWithAggregatesFilter<"societe"> | string | null
    rccm?: StringNullableWithAggregatesFilter<"societe"> | string | null
    regime_imposition?: StringNullableWithAggregatesFilter<"societe"> | string | null
    centre_impot?: StringNullableWithAggregatesFilter<"societe"> | string | null
    ref_bancaire?: StringNullableWithAggregatesFilter<"societe"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"societe"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"societe"> | string | null
    email?: StringNullableWithAggregatesFilter<"societe"> | string | null
    cree_le?: DateTimeNullableWithAggregatesFilter<"societe"> | Date | string | null
    modifie_le?: DateTimeNullableWithAggregatesFilter<"societe"> | Date | string | null
    bd_host?: StringNullableWithAggregatesFilter<"societe"> | string | null
    bd_name?: StringNullableWithAggregatesFilter<"societe"> | string | null
    bd_user?: StringNullableWithAggregatesFilter<"societe"> | string | null
    bd_pass?: StringNullableWithAggregatesFilter<"societe"> | string | null
    bd_port?: IntNullableWithAggregatesFilter<"societe"> | number | null
    logo_url?: StringNullableWithAggregatesFilter<"societe"> | string | null
    statut_id?: IntNullableWithAggregatesFilter<"societe"> | number | null
  }

  export type etablissementWhereInput = {
    AND?: etablissementWhereInput | etablissementWhereInput[]
    OR?: etablissementWhereInput[]
    NOT?: etablissementWhereInput | etablissementWhereInput[]
    id?: IntFilter<"etablissement"> | number
    uuid?: StringFilter<"etablissement"> | string
    societe_id?: IntFilter<"etablissement"> | number
    code_etablissement?: StringFilter<"etablissement"> | string
    libelle_etablissement?: StringFilter<"etablissement"> | string
    localite_etablissement?: StringFilter<"etablissement"> | string
    cree_le?: DateTimeFilter<"etablissement"> | Date | string
    modifie_le?: DateTimeFilter<"etablissement"> | Date | string
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
    point_vente?: Point_venteListRelationFilter
  }

  export type etablissementOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    code_etablissement?: SortOrder
    libelle_etablissement?: SortOrder
    localite_etablissement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    societe?: societeOrderByWithRelationInput
    point_vente?: point_venteOrderByRelationAggregateInput
    _relevance?: etablissementOrderByRelevanceInput
  }

  export type etablissementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    societe_id_code_etablissement?: etablissementSociete_idCode_etablissementCompoundUniqueInput
    AND?: etablissementWhereInput | etablissementWhereInput[]
    OR?: etablissementWhereInput[]
    NOT?: etablissementWhereInput | etablissementWhereInput[]
    societe_id?: IntFilter<"etablissement"> | number
    code_etablissement?: StringFilter<"etablissement"> | string
    libelle_etablissement?: StringFilter<"etablissement"> | string
    localite_etablissement?: StringFilter<"etablissement"> | string
    cree_le?: DateTimeFilter<"etablissement"> | Date | string
    modifie_le?: DateTimeFilter<"etablissement"> | Date | string
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
    point_vente?: Point_venteListRelationFilter
  }, "id" | "uuid" | "societe_id_code_etablissement">

  export type etablissementOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    code_etablissement?: SortOrder
    libelle_etablissement?: SortOrder
    localite_etablissement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    _count?: etablissementCountOrderByAggregateInput
    _avg?: etablissementAvgOrderByAggregateInput
    _max?: etablissementMaxOrderByAggregateInput
    _min?: etablissementMinOrderByAggregateInput
    _sum?: etablissementSumOrderByAggregateInput
  }

  export type etablissementScalarWhereWithAggregatesInput = {
    AND?: etablissementScalarWhereWithAggregatesInput | etablissementScalarWhereWithAggregatesInput[]
    OR?: etablissementScalarWhereWithAggregatesInput[]
    NOT?: etablissementScalarWhereWithAggregatesInput | etablissementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"etablissement"> | number
    uuid?: StringWithAggregatesFilter<"etablissement"> | string
    societe_id?: IntWithAggregatesFilter<"etablissement"> | number
    code_etablissement?: StringWithAggregatesFilter<"etablissement"> | string
    libelle_etablissement?: StringWithAggregatesFilter<"etablissement"> | string
    localite_etablissement?: StringWithAggregatesFilter<"etablissement"> | string
    cree_le?: DateTimeWithAggregatesFilter<"etablissement"> | Date | string
    modifie_le?: DateTimeWithAggregatesFilter<"etablissement"> | Date | string
  }

  export type point_venteWhereInput = {
    AND?: point_venteWhereInput | point_venteWhereInput[]
    OR?: point_venteWhereInput[]
    NOT?: point_venteWhereInput | point_venteWhereInput[]
    id?: IntFilter<"point_vente"> | number
    uuid?: StringFilter<"point_vente"> | string
    etablissement_id?: IntFilter<"point_vente"> | number
    libelle_pdv?: StringFilter<"point_vente"> | string
    cree_le?: DateTimeFilter<"point_vente"> | Date | string
    etablissement?: XOR<EtablissementScalarRelationFilter, etablissementWhereInput>
  }

  export type point_venteOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    etablissement_id?: SortOrder
    libelle_pdv?: SortOrder
    cree_le?: SortOrder
    etablissement?: etablissementOrderByWithRelationInput
    _relevance?: point_venteOrderByRelevanceInput
  }

  export type point_venteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: point_venteWhereInput | point_venteWhereInput[]
    OR?: point_venteWhereInput[]
    NOT?: point_venteWhereInput | point_venteWhereInput[]
    etablissement_id?: IntFilter<"point_vente"> | number
    libelle_pdv?: StringFilter<"point_vente"> | string
    cree_le?: DateTimeFilter<"point_vente"> | Date | string
    etablissement?: XOR<EtablissementScalarRelationFilter, etablissementWhereInput>
  }, "id" | "uuid">

  export type point_venteOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    etablissement_id?: SortOrder
    libelle_pdv?: SortOrder
    cree_le?: SortOrder
    _count?: point_venteCountOrderByAggregateInput
    _avg?: point_venteAvgOrderByAggregateInput
    _max?: point_venteMaxOrderByAggregateInput
    _min?: point_venteMinOrderByAggregateInput
    _sum?: point_venteSumOrderByAggregateInput
  }

  export type point_venteScalarWhereWithAggregatesInput = {
    AND?: point_venteScalarWhereWithAggregatesInput | point_venteScalarWhereWithAggregatesInput[]
    OR?: point_venteScalarWhereWithAggregatesInput[]
    NOT?: point_venteScalarWhereWithAggregatesInput | point_venteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"point_vente"> | number
    uuid?: StringWithAggregatesFilter<"point_vente"> | string
    etablissement_id?: IntWithAggregatesFilter<"point_vente"> | number
    libelle_pdv?: StringWithAggregatesFilter<"point_vente"> | string
    cree_le?: DateTimeWithAggregatesFilter<"point_vente"> | Date | string
  }

  export type licenceWhereInput = {
    AND?: licenceWhereInput | licenceWhereInput[]
    OR?: licenceWhereInput[]
    NOT?: licenceWhereInput | licenceWhereInput[]
    id?: IntFilter<"licence"> | number
    uuid?: StringFilter<"licence"> | string
    societe_id?: IntFilter<"licence"> | number
    cle?: StringFilter<"licence"> | string
    date_expiration?: DateTimeNullableFilter<"licence"> | Date | string | null
    statut_id?: IntNullableFilter<"licence"> | number | null
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
    statut?: XOR<StatutNullableScalarRelationFilter, statutWhereInput> | null
  }

  export type licenceOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle?: SortOrder
    date_expiration?: SortOrderInput | SortOrder
    statut_id?: SortOrderInput | SortOrder
    societe?: societeOrderByWithRelationInput
    statut?: statutOrderByWithRelationInput
    _relevance?: licenceOrderByRelevanceInput
  }

  export type licenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    cle?: string
    AND?: licenceWhereInput | licenceWhereInput[]
    OR?: licenceWhereInput[]
    NOT?: licenceWhereInput | licenceWhereInput[]
    societe_id?: IntFilter<"licence"> | number
    date_expiration?: DateTimeNullableFilter<"licence"> | Date | string | null
    statut_id?: IntNullableFilter<"licence"> | number | null
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
    statut?: XOR<StatutNullableScalarRelationFilter, statutWhereInput> | null
  }, "id" | "uuid" | "cle">

  export type licenceOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle?: SortOrder
    date_expiration?: SortOrderInput | SortOrder
    statut_id?: SortOrderInput | SortOrder
    _count?: licenceCountOrderByAggregateInput
    _avg?: licenceAvgOrderByAggregateInput
    _max?: licenceMaxOrderByAggregateInput
    _min?: licenceMinOrderByAggregateInput
    _sum?: licenceSumOrderByAggregateInput
  }

  export type licenceScalarWhereWithAggregatesInput = {
    AND?: licenceScalarWhereWithAggregatesInput | licenceScalarWhereWithAggregatesInput[]
    OR?: licenceScalarWhereWithAggregatesInput[]
    NOT?: licenceScalarWhereWithAggregatesInput | licenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"licence"> | number
    uuid?: StringWithAggregatesFilter<"licence"> | string
    societe_id?: IntWithAggregatesFilter<"licence"> | number
    cle?: StringWithAggregatesFilter<"licence"> | string
    date_expiration?: DateTimeNullableWithAggregatesFilter<"licence"> | Date | string | null
    statut_id?: IntNullableWithAggregatesFilter<"licence"> | number | null
  }

  export type utilisateur_clientWhereInput = {
    AND?: utilisateur_clientWhereInput | utilisateur_clientWhereInput[]
    OR?: utilisateur_clientWhereInput[]
    NOT?: utilisateur_clientWhereInput | utilisateur_clientWhereInput[]
    id?: BigIntFilter<"utilisateur_client"> | bigint | number
    uuid?: StringFilter<"utilisateur_client"> | string
    email?: StringFilter<"utilisateur_client"> | string
    login?: StringFilter<"utilisateur_client"> | string
    mot_de_passe?: StringFilter<"utilisateur_client"> | string
    nom_complet?: StringFilter<"utilisateur_client"> | string
    statut_id?: IntFilter<"utilisateur_client"> | number
    societe_id?: IntNullableFilter<"utilisateur_client"> | number | null
    role_id?: BigIntNullableFilter<"utilisateur_client"> | bigint | number | null
    cree_le?: DateTimeFilter<"utilisateur_client"> | Date | string
    dernier_login?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    otp_secret?: StringNullableFilter<"utilisateur_client"> | string | null
    otp_expiration?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    tokenVersion?: IntFilter<"utilisateur_client"> | number
    verification_token?: StringNullableFilter<"utilisateur_client"> | string | null
    verification_expiration?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    role?: XOR<RoleNullableScalarRelationFilter, roleWhereInput> | null
    societe?: XOR<SocieteNullableScalarRelationFilter, societeWhereInput> | null
    statut?: XOR<StatutScalarRelationFilter, statutWhereInput>
  }

  export type utilisateur_clientOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    statut_id?: SortOrder
    societe_id?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrderInput | SortOrder
    otp_secret?: SortOrderInput | SortOrder
    otp_expiration?: SortOrderInput | SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrderInput | SortOrder
    verification_expiration?: SortOrderInput | SortOrder
    role?: roleOrderByWithRelationInput
    societe?: societeOrderByWithRelationInput
    statut?: statutOrderByWithRelationInput
    _relevance?: utilisateur_clientOrderByRelevanceInput
  }

  export type utilisateur_clientWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: utilisateur_clientWhereInput | utilisateur_clientWhereInput[]
    OR?: utilisateur_clientWhereInput[]
    NOT?: utilisateur_clientWhereInput | utilisateur_clientWhereInput[]
    email?: StringFilter<"utilisateur_client"> | string
    login?: StringFilter<"utilisateur_client"> | string
    mot_de_passe?: StringFilter<"utilisateur_client"> | string
    nom_complet?: StringFilter<"utilisateur_client"> | string
    statut_id?: IntFilter<"utilisateur_client"> | number
    societe_id?: IntNullableFilter<"utilisateur_client"> | number | null
    role_id?: BigIntNullableFilter<"utilisateur_client"> | bigint | number | null
    cree_le?: DateTimeFilter<"utilisateur_client"> | Date | string
    dernier_login?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    otp_secret?: StringNullableFilter<"utilisateur_client"> | string | null
    otp_expiration?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    tokenVersion?: IntFilter<"utilisateur_client"> | number
    verification_token?: StringNullableFilter<"utilisateur_client"> | string | null
    verification_expiration?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    role?: XOR<RoleNullableScalarRelationFilter, roleWhereInput> | null
    societe?: XOR<SocieteNullableScalarRelationFilter, societeWhereInput> | null
    statut?: XOR<StatutScalarRelationFilter, statutWhereInput>
  }, "id" | "uuid">

  export type utilisateur_clientOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    statut_id?: SortOrder
    societe_id?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrderInput | SortOrder
    otp_secret?: SortOrderInput | SortOrder
    otp_expiration?: SortOrderInput | SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrderInput | SortOrder
    verification_expiration?: SortOrderInput | SortOrder
    _count?: utilisateur_clientCountOrderByAggregateInput
    _avg?: utilisateur_clientAvgOrderByAggregateInput
    _max?: utilisateur_clientMaxOrderByAggregateInput
    _min?: utilisateur_clientMinOrderByAggregateInput
    _sum?: utilisateur_clientSumOrderByAggregateInput
  }

  export type utilisateur_clientScalarWhereWithAggregatesInput = {
    AND?: utilisateur_clientScalarWhereWithAggregatesInput | utilisateur_clientScalarWhereWithAggregatesInput[]
    OR?: utilisateur_clientScalarWhereWithAggregatesInput[]
    NOT?: utilisateur_clientScalarWhereWithAggregatesInput | utilisateur_clientScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"utilisateur_client"> | bigint | number
    uuid?: StringWithAggregatesFilter<"utilisateur_client"> | string
    email?: StringWithAggregatesFilter<"utilisateur_client"> | string
    login?: StringWithAggregatesFilter<"utilisateur_client"> | string
    mot_de_passe?: StringWithAggregatesFilter<"utilisateur_client"> | string
    nom_complet?: StringWithAggregatesFilter<"utilisateur_client"> | string
    statut_id?: IntWithAggregatesFilter<"utilisateur_client"> | number
    societe_id?: IntNullableWithAggregatesFilter<"utilisateur_client"> | number | null
    role_id?: BigIntNullableWithAggregatesFilter<"utilisateur_client"> | bigint | number | null
    cree_le?: DateTimeWithAggregatesFilter<"utilisateur_client"> | Date | string
    dernier_login?: DateTimeNullableWithAggregatesFilter<"utilisateur_client"> | Date | string | null
    otp_secret?: StringNullableWithAggregatesFilter<"utilisateur_client"> | string | null
    otp_expiration?: DateTimeNullableWithAggregatesFilter<"utilisateur_client"> | Date | string | null
    tokenVersion?: IntWithAggregatesFilter<"utilisateur_client"> | number
    verification_token?: StringNullableWithAggregatesFilter<"utilisateur_client"> | string | null
    verification_expiration?: DateTimeNullableWithAggregatesFilter<"utilisateur_client"> | Date | string | null
  }

  export type mode_paiementWhereInput = {
    AND?: mode_paiementWhereInput | mode_paiementWhereInput[]
    OR?: mode_paiementWhereInput[]
    NOT?: mode_paiementWhereInput | mode_paiementWhereInput[]
    id?: BigIntFilter<"mode_paiement"> | bigint | number
    uuid?: StringFilter<"mode_paiement"> | string
    code_mode_paiement?: StringFilter<"mode_paiement"> | string
    libelle_mode_paiement?: StringFilter<"mode_paiement"> | string
  }

  export type mode_paiementOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_mode_paiement?: SortOrder
    libelle_mode_paiement?: SortOrder
    _relevance?: mode_paiementOrderByRelevanceInput
  }

  export type mode_paiementWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: mode_paiementWhereInput | mode_paiementWhereInput[]
    OR?: mode_paiementWhereInput[]
    NOT?: mode_paiementWhereInput | mode_paiementWhereInput[]
    code_mode_paiement?: StringFilter<"mode_paiement"> | string
    libelle_mode_paiement?: StringFilter<"mode_paiement"> | string
  }, "id" | "uuid">

  export type mode_paiementOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_mode_paiement?: SortOrder
    libelle_mode_paiement?: SortOrder
    _count?: mode_paiementCountOrderByAggregateInput
    _avg?: mode_paiementAvgOrderByAggregateInput
    _max?: mode_paiementMaxOrderByAggregateInput
    _min?: mode_paiementMinOrderByAggregateInput
    _sum?: mode_paiementSumOrderByAggregateInput
  }

  export type mode_paiementScalarWhereWithAggregatesInput = {
    AND?: mode_paiementScalarWhereWithAggregatesInput | mode_paiementScalarWhereWithAggregatesInput[]
    OR?: mode_paiementScalarWhereWithAggregatesInput[]
    NOT?: mode_paiementScalarWhereWithAggregatesInput | mode_paiementScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"mode_paiement"> | bigint | number
    uuid?: StringWithAggregatesFilter<"mode_paiement"> | string
    code_mode_paiement?: StringWithAggregatesFilter<"mode_paiement"> | string
    libelle_mode_paiement?: StringWithAggregatesFilter<"mode_paiement"> | string
  }

  export type taux_impositionWhereInput = {
    AND?: taux_impositionWhereInput | taux_impositionWhereInput[]
    OR?: taux_impositionWhereInput[]
    NOT?: taux_impositionWhereInput | taux_impositionWhereInput[]
    id?: BigIntFilter<"taux_imposition"> | bigint | number
    uuid?: StringFilter<"taux_imposition"> | string
    code?: StringFilter<"taux_imposition"> | string
    pourcentage?: FloatFilter<"taux_imposition"> | number
    description?: StringFilter<"taux_imposition"> | string
  }

  export type taux_impositionOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    pourcentage?: SortOrder
    description?: SortOrder
    _relevance?: taux_impositionOrderByRelevanceInput
  }

  export type taux_impositionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: taux_impositionWhereInput | taux_impositionWhereInput[]
    OR?: taux_impositionWhereInput[]
    NOT?: taux_impositionWhereInput | taux_impositionWhereInput[]
    code?: StringFilter<"taux_imposition"> | string
    pourcentage?: FloatFilter<"taux_imposition"> | number
    description?: StringFilter<"taux_imposition"> | string
  }, "id" | "uuid">

  export type taux_impositionOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    pourcentage?: SortOrder
    description?: SortOrder
    _count?: taux_impositionCountOrderByAggregateInput
    _avg?: taux_impositionAvgOrderByAggregateInput
    _max?: taux_impositionMaxOrderByAggregateInput
    _min?: taux_impositionMinOrderByAggregateInput
    _sum?: taux_impositionSumOrderByAggregateInput
  }

  export type taux_impositionScalarWhereWithAggregatesInput = {
    AND?: taux_impositionScalarWhereWithAggregatesInput | taux_impositionScalarWhereWithAggregatesInput[]
    OR?: taux_impositionScalarWhereWithAggregatesInput[]
    NOT?: taux_impositionScalarWhereWithAggregatesInput | taux_impositionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"taux_imposition"> | bigint | number
    uuid?: StringWithAggregatesFilter<"taux_imposition"> | string
    code?: StringWithAggregatesFilter<"taux_imposition"> | string
    pourcentage?: FloatWithAggregatesFilter<"taux_imposition"> | number
    description?: StringWithAggregatesFilter<"taux_imposition"> | string
  }

  export type type_factureWhereInput = {
    AND?: type_factureWhereInput | type_factureWhereInput[]
    OR?: type_factureWhereInput[]
    NOT?: type_factureWhereInput | type_factureWhereInput[]
    id?: BigIntFilter<"type_facture"> | bigint | number
    uuid?: StringFilter<"type_facture"> | string
    code_type_facture?: StringFilter<"type_facture"> | string
    libelle_type_facture?: StringFilter<"type_facture"> | string
  }

  export type type_factureOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facture?: SortOrder
    libelle_type_facture?: SortOrder
    _relevance?: type_factureOrderByRelevanceInput
  }

  export type type_factureWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: type_factureWhereInput | type_factureWhereInput[]
    OR?: type_factureWhereInput[]
    NOT?: type_factureWhereInput | type_factureWhereInput[]
    code_type_facture?: StringFilter<"type_facture"> | string
    libelle_type_facture?: StringFilter<"type_facture"> | string
  }, "id" | "uuid">

  export type type_factureOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facture?: SortOrder
    libelle_type_facture?: SortOrder
    _count?: type_factureCountOrderByAggregateInput
    _avg?: type_factureAvgOrderByAggregateInput
    _max?: type_factureMaxOrderByAggregateInput
    _min?: type_factureMinOrderByAggregateInput
    _sum?: type_factureSumOrderByAggregateInput
  }

  export type type_factureScalarWhereWithAggregatesInput = {
    AND?: type_factureScalarWhereWithAggregatesInput | type_factureScalarWhereWithAggregatesInput[]
    OR?: type_factureScalarWhereWithAggregatesInput[]
    NOT?: type_factureScalarWhereWithAggregatesInput | type_factureScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"type_facture"> | bigint | number
    uuid?: StringWithAggregatesFilter<"type_facture"> | string
    code_type_facture?: StringWithAggregatesFilter<"type_facture"> | string
    libelle_type_facture?: StringWithAggregatesFilter<"type_facture"> | string
  }

  export type deviseWhereInput = {
    AND?: deviseWhereInput | deviseWhereInput[]
    OR?: deviseWhereInput[]
    NOT?: deviseWhereInput | deviseWhereInput[]
    id?: BigIntFilter<"devise"> | bigint | number
    uuid?: StringFilter<"devise"> | string
    code_devise?: StringFilter<"devise"> | string
    taux_devise?: StringFilter<"devise"> | string
    description?: StringFilter<"devise"> | string
  }

  export type deviseOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_devise?: SortOrder
    taux_devise?: SortOrder
    description?: SortOrder
    _relevance?: deviseOrderByRelevanceInput
  }

  export type deviseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: deviseWhereInput | deviseWhereInput[]
    OR?: deviseWhereInput[]
    NOT?: deviseWhereInput | deviseWhereInput[]
    code_devise?: StringFilter<"devise"> | string
    taux_devise?: StringFilter<"devise"> | string
    description?: StringFilter<"devise"> | string
  }, "id" | "uuid">

  export type deviseOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_devise?: SortOrder
    taux_devise?: SortOrder
    description?: SortOrder
    _count?: deviseCountOrderByAggregateInput
    _avg?: deviseAvgOrderByAggregateInput
    _max?: deviseMaxOrderByAggregateInput
    _min?: deviseMinOrderByAggregateInput
    _sum?: deviseSumOrderByAggregateInput
  }

  export type deviseScalarWhereWithAggregatesInput = {
    AND?: deviseScalarWhereWithAggregatesInput | deviseScalarWhereWithAggregatesInput[]
    OR?: deviseScalarWhereWithAggregatesInput[]
    NOT?: deviseScalarWhereWithAggregatesInput | deviseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"devise"> | bigint | number
    uuid?: StringWithAggregatesFilter<"devise"> | string
    code_devise?: StringWithAggregatesFilter<"devise"> | string
    taux_devise?: StringWithAggregatesFilter<"devise"> | string
    description?: StringWithAggregatesFilter<"devise"> | string
  }

  export type type_facturationWhereInput = {
    AND?: type_facturationWhereInput | type_facturationWhereInput[]
    OR?: type_facturationWhereInput[]
    NOT?: type_facturationWhereInput | type_facturationWhereInput[]
    id?: BigIntFilter<"type_facturation"> | bigint | number
    uuid?: StringFilter<"type_facturation"> | string
    code_type_facturaction?: StringFilter<"type_facturation"> | string
    libelle_type_facturation?: StringFilter<"type_facturation"> | string
  }

  export type type_facturationOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facturaction?: SortOrder
    libelle_type_facturation?: SortOrder
    _relevance?: type_facturationOrderByRelevanceInput
  }

  export type type_facturationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: type_facturationWhereInput | type_facturationWhereInput[]
    OR?: type_facturationWhereInput[]
    NOT?: type_facturationWhereInput | type_facturationWhereInput[]
    code_type_facturaction?: StringFilter<"type_facturation"> | string
    libelle_type_facturation?: StringFilter<"type_facturation"> | string
  }, "id" | "uuid">

  export type type_facturationOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facturaction?: SortOrder
    libelle_type_facturation?: SortOrder
    _count?: type_facturationCountOrderByAggregateInput
    _avg?: type_facturationAvgOrderByAggregateInput
    _max?: type_facturationMaxOrderByAggregateInput
    _min?: type_facturationMinOrderByAggregateInput
    _sum?: type_facturationSumOrderByAggregateInput
  }

  export type type_facturationScalarWhereWithAggregatesInput = {
    AND?: type_facturationScalarWhereWithAggregatesInput | type_facturationScalarWhereWithAggregatesInput[]
    OR?: type_facturationScalarWhereWithAggregatesInput[]
    NOT?: type_facturationScalarWhereWithAggregatesInput | type_facturationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"type_facturation"> | bigint | number
    uuid?: StringWithAggregatesFilter<"type_facturation"> | string
    code_type_facturaction?: StringWithAggregatesFilter<"type_facturation"> | string
    libelle_type_facturation?: StringWithAggregatesFilter<"type_facturation"> | string
  }

  export type stickerWhereInput = {
    AND?: stickerWhereInput | stickerWhereInput[]
    OR?: stickerWhereInput[]
    NOT?: stickerWhereInput | stickerWhereInput[]
    id?: IntFilter<"sticker"> | number
    uuid?: StringFilter<"sticker"> | string
    societe_id?: IntFilter<"sticker"> | number
    balance_sticker?: IntNullableFilter<"sticker"> | number | null
    date_maj?: DateTimeNullableFilter<"sticker"> | Date | string | null
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
  }

  export type stickerOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    balance_sticker?: SortOrderInput | SortOrder
    date_maj?: SortOrderInput | SortOrder
    societe?: societeOrderByWithRelationInput
    _relevance?: stickerOrderByRelevanceInput
  }

  export type stickerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    societe_id?: number
    AND?: stickerWhereInput | stickerWhereInput[]
    OR?: stickerWhereInput[]
    NOT?: stickerWhereInput | stickerWhereInput[]
    balance_sticker?: IntNullableFilter<"sticker"> | number | null
    date_maj?: DateTimeNullableFilter<"sticker"> | Date | string | null
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
  }, "id" | "uuid" | "societe_id">

  export type stickerOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    balance_sticker?: SortOrderInput | SortOrder
    date_maj?: SortOrderInput | SortOrder
    _count?: stickerCountOrderByAggregateInput
    _avg?: stickerAvgOrderByAggregateInput
    _max?: stickerMaxOrderByAggregateInput
    _min?: stickerMinOrderByAggregateInput
    _sum?: stickerSumOrderByAggregateInput
  }

  export type stickerScalarWhereWithAggregatesInput = {
    AND?: stickerScalarWhereWithAggregatesInput | stickerScalarWhereWithAggregatesInput[]
    OR?: stickerScalarWhereWithAggregatesInput[]
    NOT?: stickerScalarWhereWithAggregatesInput | stickerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sticker"> | number
    uuid?: StringWithAggregatesFilter<"sticker"> | string
    societe_id?: IntWithAggregatesFilter<"sticker"> | number
    balance_sticker?: IntNullableWithAggregatesFilter<"sticker"> | number | null
    date_maj?: DateTimeNullableWithAggregatesFilter<"sticker"> | Date | string | null
  }

  export type configurationWhereInput = {
    AND?: configurationWhereInput | configurationWhereInput[]
    OR?: configurationWhereInput[]
    NOT?: configurationWhereInput | configurationWhereInput[]
    id?: IntFilter<"configuration"> | number
    uuid?: StringFilter<"configuration"> | string
    societe_id?: IntFilter<"configuration"> | number
    cle_api_fne?: StringNullableFilter<"configuration"> | string | null
    cle_api_locale?: StringNullableFilter<"configuration"> | string | null
    production?: IntFilter<"configuration"> | number
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
  }

  export type configurationOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle_api_fne?: SortOrderInput | SortOrder
    cle_api_locale?: SortOrderInput | SortOrder
    production?: SortOrder
    societe?: societeOrderByWithRelationInput
    _relevance?: configurationOrderByRelevanceInput
  }

  export type configurationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    societe_id?: number
    AND?: configurationWhereInput | configurationWhereInput[]
    OR?: configurationWhereInput[]
    NOT?: configurationWhereInput | configurationWhereInput[]
    cle_api_fne?: StringNullableFilter<"configuration"> | string | null
    cle_api_locale?: StringNullableFilter<"configuration"> | string | null
    production?: IntFilter<"configuration"> | number
    societe?: XOR<SocieteScalarRelationFilter, societeWhereInput>
  }, "id" | "uuid" | "societe_id">

  export type configurationOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle_api_fne?: SortOrderInput | SortOrder
    cle_api_locale?: SortOrderInput | SortOrder
    production?: SortOrder
    _count?: configurationCountOrderByAggregateInput
    _avg?: configurationAvgOrderByAggregateInput
    _max?: configurationMaxOrderByAggregateInput
    _min?: configurationMinOrderByAggregateInput
    _sum?: configurationSumOrderByAggregateInput
  }

  export type configurationScalarWhereWithAggregatesInput = {
    AND?: configurationScalarWhereWithAggregatesInput | configurationScalarWhereWithAggregatesInput[]
    OR?: configurationScalarWhereWithAggregatesInput[]
    NOT?: configurationScalarWhereWithAggregatesInput | configurationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"configuration"> | number
    uuid?: StringWithAggregatesFilter<"configuration"> | string
    societe_id?: IntWithAggregatesFilter<"configuration"> | number
    cle_api_fne?: StringNullableWithAggregatesFilter<"configuration"> | string | null
    cle_api_locale?: StringNullableWithAggregatesFilter<"configuration"> | string | null
    production?: IntWithAggregatesFilter<"configuration"> | number
  }

  export type statutWhereInput = {
    AND?: statutWhereInput | statutWhereInput[]
    OR?: statutWhereInput[]
    NOT?: statutWhereInput | statutWhereInput[]
    id?: IntFilter<"statut"> | number
    uuid?: StringFilter<"statut"> | string
    code?: StringFilter<"statut"> | string
    description?: StringNullableFilter<"statut"> | string | null
    societes?: SocieteListRelationFilter
    licences?: LicenceListRelationFilter
    utilisateur_client?: Utilisateur_clientListRelationFilter
  }

  export type statutOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    societes?: societeOrderByRelationAggregateInput
    licences?: licenceOrderByRelationAggregateInput
    utilisateur_client?: utilisateur_clientOrderByRelationAggregateInput
    _relevance?: statutOrderByRelevanceInput
  }

  export type statutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    code?: string
    AND?: statutWhereInput | statutWhereInput[]
    OR?: statutWhereInput[]
    NOT?: statutWhereInput | statutWhereInput[]
    description?: StringNullableFilter<"statut"> | string | null
    societes?: SocieteListRelationFilter
    licences?: LicenceListRelationFilter
    utilisateur_client?: Utilisateur_clientListRelationFilter
  }, "id" | "uuid" | "code">

  export type statutOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: statutCountOrderByAggregateInput
    _avg?: statutAvgOrderByAggregateInput
    _max?: statutMaxOrderByAggregateInput
    _min?: statutMinOrderByAggregateInput
    _sum?: statutSumOrderByAggregateInput
  }

  export type statutScalarWhereWithAggregatesInput = {
    AND?: statutScalarWhereWithAggregatesInput | statutScalarWhereWithAggregatesInput[]
    OR?: statutScalarWhereWithAggregatesInput[]
    NOT?: statutScalarWhereWithAggregatesInput | statutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"statut"> | number
    uuid?: StringWithAggregatesFilter<"statut"> | string
    code?: StringWithAggregatesFilter<"statut"> | string
    description?: StringNullableWithAggregatesFilter<"statut"> | string | null
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: BigIntFilter<"role"> | bigint | number
    uuid?: StringFilter<"role"> | string
    code?: StringFilter<"role"> | string
    description?: StringNullableFilter<"role"> | string | null
    utilisateur_client?: Utilisateur_clientListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    utilisateur_client?: utilisateur_clientOrderByRelationAggregateInput
    _relevance?: roleOrderByRelevanceInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    code?: StringFilter<"role"> | string
    description?: StringNullableFilter<"role"> | string | null
    utilisateur_client?: Utilisateur_clientListRelationFilter
  }, "id" | "uuid">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"role"> | bigint | number
    uuid?: StringWithAggregatesFilter<"role"> | string
    code?: StringWithAggregatesFilter<"role"> | string
    description?: StringNullableWithAggregatesFilter<"role"> | string | null
  }

  export type utilisateur_adminWhereInput = {
    AND?: utilisateur_adminWhereInput | utilisateur_adminWhereInput[]
    OR?: utilisateur_adminWhereInput[]
    NOT?: utilisateur_adminWhereInput | utilisateur_adminWhereInput[]
    id?: BigIntFilter<"utilisateur_admin"> | bigint | number
    uuid?: StringFilter<"utilisateur_admin"> | string
    email?: StringFilter<"utilisateur_admin"> | string
    login?: StringFilter<"utilisateur_admin"> | string
    mot_de_passe?: StringFilter<"utilisateur_admin"> | string
    nom_complet?: StringFilter<"utilisateur_admin"> | string
    cree_le?: DateTimeFilter<"utilisateur_admin"> | Date | string
    dernier_login?: DateTimeNullableFilter<"utilisateur_admin"> | Date | string | null
    otp_secret?: StringNullableFilter<"utilisateur_admin"> | string | null
    otp_expiration?: DateTimeNullableFilter<"utilisateur_admin"> | Date | string | null
    tokenVersion?: IntFilter<"utilisateur_admin"> | number
    verification_token?: StringNullableFilter<"utilisateur_admin"> | string | null
    verification_expiration?: DateTimeNullableFilter<"utilisateur_admin"> | Date | string | null
  }

  export type utilisateur_adminOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrderInput | SortOrder
    otp_secret?: SortOrderInput | SortOrder
    otp_expiration?: SortOrderInput | SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrderInput | SortOrder
    verification_expiration?: SortOrderInput | SortOrder
    _relevance?: utilisateur_adminOrderByRelevanceInput
  }

  export type utilisateur_adminWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    AND?: utilisateur_adminWhereInput | utilisateur_adminWhereInput[]
    OR?: utilisateur_adminWhereInput[]
    NOT?: utilisateur_adminWhereInput | utilisateur_adminWhereInput[]
    email?: StringFilter<"utilisateur_admin"> | string
    login?: StringFilter<"utilisateur_admin"> | string
    mot_de_passe?: StringFilter<"utilisateur_admin"> | string
    nom_complet?: StringFilter<"utilisateur_admin"> | string
    cree_le?: DateTimeFilter<"utilisateur_admin"> | Date | string
    dernier_login?: DateTimeNullableFilter<"utilisateur_admin"> | Date | string | null
    otp_secret?: StringNullableFilter<"utilisateur_admin"> | string | null
    otp_expiration?: DateTimeNullableFilter<"utilisateur_admin"> | Date | string | null
    tokenVersion?: IntFilter<"utilisateur_admin"> | number
    verification_token?: StringNullableFilter<"utilisateur_admin"> | string | null
    verification_expiration?: DateTimeNullableFilter<"utilisateur_admin"> | Date | string | null
  }, "id" | "uuid">

  export type utilisateur_adminOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrderInput | SortOrder
    otp_secret?: SortOrderInput | SortOrder
    otp_expiration?: SortOrderInput | SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrderInput | SortOrder
    verification_expiration?: SortOrderInput | SortOrder
    _count?: utilisateur_adminCountOrderByAggregateInput
    _avg?: utilisateur_adminAvgOrderByAggregateInput
    _max?: utilisateur_adminMaxOrderByAggregateInput
    _min?: utilisateur_adminMinOrderByAggregateInput
    _sum?: utilisateur_adminSumOrderByAggregateInput
  }

  export type utilisateur_adminScalarWhereWithAggregatesInput = {
    AND?: utilisateur_adminScalarWhereWithAggregatesInput | utilisateur_adminScalarWhereWithAggregatesInput[]
    OR?: utilisateur_adminScalarWhereWithAggregatesInput[]
    NOT?: utilisateur_adminScalarWhereWithAggregatesInput | utilisateur_adminScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"utilisateur_admin"> | bigint | number
    uuid?: StringWithAggregatesFilter<"utilisateur_admin"> | string
    email?: StringWithAggregatesFilter<"utilisateur_admin"> | string
    login?: StringWithAggregatesFilter<"utilisateur_admin"> | string
    mot_de_passe?: StringWithAggregatesFilter<"utilisateur_admin"> | string
    nom_complet?: StringWithAggregatesFilter<"utilisateur_admin"> | string
    cree_le?: DateTimeWithAggregatesFilter<"utilisateur_admin"> | Date | string
    dernier_login?: DateTimeNullableWithAggregatesFilter<"utilisateur_admin"> | Date | string | null
    otp_secret?: StringNullableWithAggregatesFilter<"utilisateur_admin"> | string | null
    otp_expiration?: DateTimeNullableWithAggregatesFilter<"utilisateur_admin"> | Date | string | null
    tokenVersion?: IntWithAggregatesFilter<"utilisateur_admin"> | number
    verification_token?: StringNullableWithAggregatesFilter<"utilisateur_admin"> | string | null
    verification_expiration?: DateTimeNullableWithAggregatesFilter<"utilisateur_admin"> | Date | string | null
  }

  export type societeCreateInput = {
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut?: statutCreateNestedOneWithoutSocietesInput
    configuration?: configurationCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutSocieteInput
    licences?: licenceCreateNestedManyWithoutSocieteInput
    stickers?: stickerCreateNestedManyWithoutSocieteInput
  }

  export type societeUncheckedCreateInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut_id?: number | null
    configuration?: configurationUncheckedCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementUncheckedCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutSocieteInput
    licences?: licenceUncheckedCreateNestedManyWithoutSocieteInput
    stickers?: stickerUncheckedCreateNestedManyWithoutSocieteInput
  }

  export type societeUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: statutUpdateOneWithoutSocietesNestedInput
    configuration?: configurationUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutSocieteNestedInput
    licences?: licenceUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
    configuration?: configurationUncheckedUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUncheckedUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutSocieteNestedInput
    licences?: licenceUncheckedUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUncheckedUpdateManyWithoutSocieteNestedInput
  }

  export type societeCreateManyInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut_id?: number | null
  }

  export type societeUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type societeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type etablissementCreateInput = {
    uuid?: string
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
    societe: societeCreateNestedOneWithoutEtablissementInput
    point_vente?: point_venteCreateNestedManyWithoutEtablissementInput
  }

  export type etablissementUncheckedCreateInput = {
    id?: number
    uuid?: string
    societe_id: number
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
    point_vente?: point_venteUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type etablissementUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    societe?: societeUpdateOneRequiredWithoutEtablissementNestedInput
    point_vente?: point_venteUpdateManyWithoutEtablissementNestedInput
  }

  export type etablissementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    point_vente?: point_venteUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type etablissementCreateManyInput = {
    id?: number
    uuid?: string
    societe_id: number
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type etablissementUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type etablissementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type point_venteCreateInput = {
    uuid?: string
    libelle_pdv: string
    cree_le?: Date | string
    etablissement: etablissementCreateNestedOneWithoutPoint_venteInput
  }

  export type point_venteUncheckedCreateInput = {
    id?: number
    uuid?: string
    etablissement_id: number
    libelle_pdv: string
    cree_le?: Date | string
  }

  export type point_venteUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    libelle_pdv?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    etablissement?: etablissementUpdateOneRequiredWithoutPoint_venteNestedInput
  }

  export type point_venteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    etablissement_id?: IntFieldUpdateOperationsInput | number
    libelle_pdv?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type point_venteCreateManyInput = {
    id?: number
    uuid?: string
    etablissement_id: number
    libelle_pdv: string
    cree_le?: Date | string
  }

  export type point_venteUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    libelle_pdv?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type point_venteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    etablissement_id?: IntFieldUpdateOperationsInput | number
    libelle_pdv?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type licenceCreateInput = {
    uuid?: string
    cle: string
    date_expiration?: Date | string | null
    societe: societeCreateNestedOneWithoutLicencesInput
    statut?: statutCreateNestedOneWithoutLicencesInput
  }

  export type licenceUncheckedCreateInput = {
    id?: number
    uuid?: string
    societe_id: number
    cle: string
    date_expiration?: Date | string | null
    statut_id?: number | null
  }

  export type licenceUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    societe?: societeUpdateOneRequiredWithoutLicencesNestedInput
    statut?: statutUpdateOneWithoutLicencesNestedInput
  }

  export type licenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type licenceCreateManyInput = {
    id?: number
    uuid?: string
    societe_id: number
    cle: string
    date_expiration?: Date | string | null
    statut_id?: number | null
  }

  export type licenceUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type licenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type utilisateur_clientCreateInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
    role?: roleCreateNestedOneWithoutUtilisateur_clientInput
    societe?: societeCreateNestedOneWithoutUtilisateur_clientInput
    statut?: statutCreateNestedOneWithoutUtilisateur_clientInput
  }

  export type utilisateur_clientUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    statut_id?: number
    societe_id?: number | null
    role_id?: bigint | number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_clientUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: roleUpdateOneWithoutUtilisateur_clientNestedInput
    societe?: societeUpdateOneWithoutUtilisateur_clientNestedInput
    statut?: statutUpdateOneRequiredWithoutUtilisateur_clientNestedInput
  }

  export type utilisateur_clientUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    statut_id?: IntFieldUpdateOperationsInput | number
    societe_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_clientCreateManyInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    statut_id?: number
    societe_id?: number | null
    role_id?: bigint | number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_clientUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_clientUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    statut_id?: IntFieldUpdateOperationsInput | number
    societe_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mode_paiementCreateInput = {
    id?: bigint | number
    uuid?: string
    code_mode_paiement: string
    libelle_mode_paiement: string
  }

  export type mode_paiementUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    code_mode_paiement: string
    libelle_mode_paiement: string
  }

  export type mode_paiementUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    libelle_mode_paiement?: StringFieldUpdateOperationsInput | string
  }

  export type mode_paiementUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    libelle_mode_paiement?: StringFieldUpdateOperationsInput | string
  }

  export type mode_paiementCreateManyInput = {
    id?: bigint | number
    uuid?: string
    code_mode_paiement: string
    libelle_mode_paiement: string
  }

  export type mode_paiementUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    libelle_mode_paiement?: StringFieldUpdateOperationsInput | string
  }

  export type mode_paiementUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_mode_paiement?: StringFieldUpdateOperationsInput | string
    libelle_mode_paiement?: StringFieldUpdateOperationsInput | string
  }

  export type taux_impositionCreateInput = {
    id?: bigint | number
    uuid?: string
    code: string
    pourcentage: number
    description: string
  }

  export type taux_impositionUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    code: string
    pourcentage: number
    description: string
  }

  export type taux_impositionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    pourcentage?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type taux_impositionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    pourcentage?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type taux_impositionCreateManyInput = {
    id?: bigint | number
    uuid?: string
    code: string
    pourcentage: number
    description: string
  }

  export type taux_impositionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    pourcentage?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type taux_impositionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    pourcentage?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type type_factureCreateInput = {
    id?: bigint | number
    uuid?: string
    code_type_facture: string
    libelle_type_facture: string
  }

  export type type_factureUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    code_type_facture: string
    libelle_type_facture: string
  }

  export type type_factureUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    libelle_type_facture?: StringFieldUpdateOperationsInput | string
  }

  export type type_factureUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    libelle_type_facture?: StringFieldUpdateOperationsInput | string
  }

  export type type_factureCreateManyInput = {
    id?: bigint | number
    uuid?: string
    code_type_facture: string
    libelle_type_facture: string
  }

  export type type_factureUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    libelle_type_facture?: StringFieldUpdateOperationsInput | string
  }

  export type type_factureUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facture?: StringFieldUpdateOperationsInput | string
    libelle_type_facture?: StringFieldUpdateOperationsInput | string
  }

  export type deviseCreateInput = {
    id?: bigint | number
    uuid?: string
    code_devise: string
    taux_devise: string
    description: string
  }

  export type deviseUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    code_devise: string
    taux_devise: string
    description: string
  }

  export type deviseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    taux_devise?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type deviseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    taux_devise?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type deviseCreateManyInput = {
    id?: bigint | number
    uuid?: string
    code_devise: string
    taux_devise: string
    description: string
  }

  export type deviseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    taux_devise?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type deviseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_devise?: StringFieldUpdateOperationsInput | string
    taux_devise?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type type_facturationCreateInput = {
    id?: bigint | number
    uuid?: string
    code_type_facturaction: string
    libelle_type_facturation: string
  }

  export type type_facturationUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    code_type_facturaction: string
    libelle_type_facturation: string
  }

  export type type_facturationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facturaction?: StringFieldUpdateOperationsInput | string
    libelle_type_facturation?: StringFieldUpdateOperationsInput | string
  }

  export type type_facturationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facturaction?: StringFieldUpdateOperationsInput | string
    libelle_type_facturation?: StringFieldUpdateOperationsInput | string
  }

  export type type_facturationCreateManyInput = {
    id?: bigint | number
    uuid?: string
    code_type_facturaction: string
    libelle_type_facturation: string
  }

  export type type_facturationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facturaction?: StringFieldUpdateOperationsInput | string
    libelle_type_facturation?: StringFieldUpdateOperationsInput | string
  }

  export type type_facturationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_type_facturaction?: StringFieldUpdateOperationsInput | string
    libelle_type_facturation?: StringFieldUpdateOperationsInput | string
  }

  export type stickerCreateInput = {
    uuid?: string
    balance_sticker?: number | null
    date_maj?: Date | string | null
    societe: societeCreateNestedOneWithoutStickersInput
  }

  export type stickerUncheckedCreateInput = {
    id?: number
    uuid?: string
    societe_id: number
    balance_sticker?: number | null
    date_maj?: Date | string | null
  }

  export type stickerUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    balance_sticker?: NullableIntFieldUpdateOperationsInput | number | null
    date_maj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    societe?: societeUpdateOneRequiredWithoutStickersNestedInput
  }

  export type stickerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    balance_sticker?: NullableIntFieldUpdateOperationsInput | number | null
    date_maj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stickerCreateManyInput = {
    id?: number
    uuid?: string
    societe_id: number
    balance_sticker?: number | null
    date_maj?: Date | string | null
  }

  export type stickerUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    balance_sticker?: NullableIntFieldUpdateOperationsInput | number | null
    date_maj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stickerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    balance_sticker?: NullableIntFieldUpdateOperationsInput | number | null
    date_maj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type configurationCreateInput = {
    uuid?: string
    cle_api_fne?: string | null
    cle_api_locale?: string | null
    production?: number
    societe: societeCreateNestedOneWithoutConfigurationInput
  }

  export type configurationUncheckedCreateInput = {
    id?: number
    uuid?: string
    societe_id: number
    cle_api_fne?: string | null
    cle_api_locale?: string | null
    production?: number
  }

  export type configurationUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cle_api_fne?: NullableStringFieldUpdateOperationsInput | string | null
    cle_api_locale?: NullableStringFieldUpdateOperationsInput | string | null
    production?: IntFieldUpdateOperationsInput | number
    societe?: societeUpdateOneRequiredWithoutConfigurationNestedInput
  }

  export type configurationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    cle_api_fne?: NullableStringFieldUpdateOperationsInput | string | null
    cle_api_locale?: NullableStringFieldUpdateOperationsInput | string | null
    production?: IntFieldUpdateOperationsInput | number
  }

  export type configurationCreateManyInput = {
    id?: number
    uuid?: string
    societe_id: number
    cle_api_fne?: string | null
    cle_api_locale?: string | null
    production?: number
  }

  export type configurationUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cle_api_fne?: NullableStringFieldUpdateOperationsInput | string | null
    cle_api_locale?: NullableStringFieldUpdateOperationsInput | string | null
    production?: IntFieldUpdateOperationsInput | number
  }

  export type configurationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    cle_api_fne?: NullableStringFieldUpdateOperationsInput | string | null
    cle_api_locale?: NullableStringFieldUpdateOperationsInput | string | null
    production?: IntFieldUpdateOperationsInput | number
  }

  export type statutCreateInput = {
    uuid?: string
    code: string
    description?: string | null
    societes?: societeCreateNestedManyWithoutStatutInput
    licences?: licenceCreateNestedManyWithoutStatutInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutStatutInput
  }

  export type statutUncheckedCreateInput = {
    id?: number
    uuid?: string
    code: string
    description?: string | null
    societes?: societeUncheckedCreateNestedManyWithoutStatutInput
    licences?: licenceUncheckedCreateNestedManyWithoutStatutInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutStatutInput
  }

  export type statutUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    societes?: societeUpdateManyWithoutStatutNestedInput
    licences?: licenceUpdateManyWithoutStatutNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutStatutNestedInput
  }

  export type statutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    societes?: societeUncheckedUpdateManyWithoutStatutNestedInput
    licences?: licenceUncheckedUpdateManyWithoutStatutNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutStatutNestedInput
  }

  export type statutCreateManyInput = {
    id?: number
    uuid?: string
    code: string
    description?: string | null
  }

  export type statutUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type statutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roleCreateInput = {
    id: bigint | number
    uuid?: string
    code: string
    description?: string | null
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id: bigint | number
    uuid?: string
    code: string
    description?: string | null
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateur_client?: utilisateur_clientUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id: bigint | number
    uuid?: string
    code: string
    description?: string | null
  }

  export type roleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type utilisateur_adminCreateInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_adminUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_adminUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_adminUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_adminCreateManyInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_adminUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_adminUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StatutNullableScalarRelationFilter = {
    is?: statutWhereInput | null
    isNot?: statutWhereInput | null
  }

  export type ConfigurationNullableScalarRelationFilter = {
    is?: configurationWhereInput | null
    isNot?: configurationWhereInput | null
  }

  export type EtablissementListRelationFilter = {
    every?: etablissementWhereInput
    some?: etablissementWhereInput
    none?: etablissementWhereInput
  }

  export type Utilisateur_clientListRelationFilter = {
    every?: utilisateur_clientWhereInput
    some?: utilisateur_clientWhereInput
    none?: utilisateur_clientWhereInput
  }

  export type LicenceListRelationFilter = {
    every?: licenceWhereInput
    some?: licenceWhereInput
    none?: licenceWhereInput
  }

  export type StickerListRelationFilter = {
    every?: stickerWhereInput
    some?: stickerWhereInput
    none?: stickerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type etablissementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type utilisateur_clientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type licenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stickerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type societeOrderByRelevanceInput = {
    fields: societeOrderByRelevanceFieldEnum | societeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type societeCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_societe?: SortOrder
    raison_sociale_societe?: SortOrder
    ncc?: SortOrder
    rccm?: SortOrder
    regime_imposition?: SortOrder
    centre_impot?: SortOrder
    ref_bancaire?: SortOrder
    adresse?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    bd_host?: SortOrder
    bd_name?: SortOrder
    bd_user?: SortOrder
    bd_pass?: SortOrder
    bd_port?: SortOrder
    logo_url?: SortOrder
    statut_id?: SortOrder
  }

  export type societeAvgOrderByAggregateInput = {
    id?: SortOrder
    bd_port?: SortOrder
    statut_id?: SortOrder
  }

  export type societeMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_societe?: SortOrder
    raison_sociale_societe?: SortOrder
    ncc?: SortOrder
    rccm?: SortOrder
    regime_imposition?: SortOrder
    centre_impot?: SortOrder
    ref_bancaire?: SortOrder
    adresse?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    bd_host?: SortOrder
    bd_name?: SortOrder
    bd_user?: SortOrder
    bd_pass?: SortOrder
    bd_port?: SortOrder
    logo_url?: SortOrder
    statut_id?: SortOrder
  }

  export type societeMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_societe?: SortOrder
    raison_sociale_societe?: SortOrder
    ncc?: SortOrder
    rccm?: SortOrder
    regime_imposition?: SortOrder
    centre_impot?: SortOrder
    ref_bancaire?: SortOrder
    adresse?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
    bd_host?: SortOrder
    bd_name?: SortOrder
    bd_user?: SortOrder
    bd_pass?: SortOrder
    bd_port?: SortOrder
    logo_url?: SortOrder
    statut_id?: SortOrder
  }

  export type societeSumOrderByAggregateInput = {
    id?: SortOrder
    bd_port?: SortOrder
    statut_id?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SocieteScalarRelationFilter = {
    is?: societeWhereInput
    isNot?: societeWhereInput
  }

  export type Point_venteListRelationFilter = {
    every?: point_venteWhereInput
    some?: point_venteWhereInput
    none?: point_venteWhereInput
  }

  export type point_venteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type etablissementOrderByRelevanceInput = {
    fields: etablissementOrderByRelevanceFieldEnum | etablissementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type etablissementSociete_idCode_etablissementCompoundUniqueInput = {
    societe_id: number
    code_etablissement: string
  }

  export type etablissementCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    code_etablissement?: SortOrder
    libelle_etablissement?: SortOrder
    localite_etablissement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type etablissementAvgOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
  }

  export type etablissementMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    code_etablissement?: SortOrder
    libelle_etablissement?: SortOrder
    localite_etablissement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type etablissementMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    code_etablissement?: SortOrder
    libelle_etablissement?: SortOrder
    localite_etablissement?: SortOrder
    cree_le?: SortOrder
    modifie_le?: SortOrder
  }

  export type etablissementSumOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
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

  export type EtablissementScalarRelationFilter = {
    is?: etablissementWhereInput
    isNot?: etablissementWhereInput
  }

  export type point_venteOrderByRelevanceInput = {
    fields: point_venteOrderByRelevanceFieldEnum | point_venteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type point_venteCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    etablissement_id?: SortOrder
    libelle_pdv?: SortOrder
    cree_le?: SortOrder
  }

  export type point_venteAvgOrderByAggregateInput = {
    id?: SortOrder
    etablissement_id?: SortOrder
  }

  export type point_venteMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    etablissement_id?: SortOrder
    libelle_pdv?: SortOrder
    cree_le?: SortOrder
  }

  export type point_venteMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    etablissement_id?: SortOrder
    libelle_pdv?: SortOrder
    cree_le?: SortOrder
  }

  export type point_venteSumOrderByAggregateInput = {
    id?: SortOrder
    etablissement_id?: SortOrder
  }

  export type licenceOrderByRelevanceInput = {
    fields: licenceOrderByRelevanceFieldEnum | licenceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type licenceCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle?: SortOrder
    date_expiration?: SortOrder
    statut_id?: SortOrder
  }

  export type licenceAvgOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
    statut_id?: SortOrder
  }

  export type licenceMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle?: SortOrder
    date_expiration?: SortOrder
    statut_id?: SortOrder
  }

  export type licenceMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle?: SortOrder
    date_expiration?: SortOrder
    statut_id?: SortOrder
  }

  export type licenceSumOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
    statut_id?: SortOrder
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

  export type RoleNullableScalarRelationFilter = {
    is?: roleWhereInput | null
    isNot?: roleWhereInput | null
  }

  export type SocieteNullableScalarRelationFilter = {
    is?: societeWhereInput | null
    isNot?: societeWhereInput | null
  }

  export type StatutScalarRelationFilter = {
    is?: statutWhereInput
    isNot?: statutWhereInput
  }

  export type utilisateur_clientOrderByRelevanceInput = {
    fields: utilisateur_clientOrderByRelevanceFieldEnum | utilisateur_clientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type utilisateur_clientCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    statut_id?: SortOrder
    societe_id?: SortOrder
    role_id?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrder
    otp_secret?: SortOrder
    otp_expiration?: SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrder
    verification_expiration?: SortOrder
  }

  export type utilisateur_clientAvgOrderByAggregateInput = {
    id?: SortOrder
    statut_id?: SortOrder
    societe_id?: SortOrder
    role_id?: SortOrder
    tokenVersion?: SortOrder
  }

  export type utilisateur_clientMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    statut_id?: SortOrder
    societe_id?: SortOrder
    role_id?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrder
    otp_secret?: SortOrder
    otp_expiration?: SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrder
    verification_expiration?: SortOrder
  }

  export type utilisateur_clientMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    statut_id?: SortOrder
    societe_id?: SortOrder
    role_id?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrder
    otp_secret?: SortOrder
    otp_expiration?: SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrder
    verification_expiration?: SortOrder
  }

  export type utilisateur_clientSumOrderByAggregateInput = {
    id?: SortOrder
    statut_id?: SortOrder
    societe_id?: SortOrder
    role_id?: SortOrder
    tokenVersion?: SortOrder
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

  export type mode_paiementOrderByRelevanceInput = {
    fields: mode_paiementOrderByRelevanceFieldEnum | mode_paiementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mode_paiementCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_mode_paiement?: SortOrder
    libelle_mode_paiement?: SortOrder
  }

  export type mode_paiementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mode_paiementMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_mode_paiement?: SortOrder
    libelle_mode_paiement?: SortOrder
  }

  export type mode_paiementMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_mode_paiement?: SortOrder
    libelle_mode_paiement?: SortOrder
  }

  export type mode_paiementSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type taux_impositionOrderByRelevanceInput = {
    fields: taux_impositionOrderByRelevanceFieldEnum | taux_impositionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type taux_impositionCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    pourcentage?: SortOrder
    description?: SortOrder
  }

  export type taux_impositionAvgOrderByAggregateInput = {
    id?: SortOrder
    pourcentage?: SortOrder
  }

  export type taux_impositionMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    pourcentage?: SortOrder
    description?: SortOrder
  }

  export type taux_impositionMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    pourcentage?: SortOrder
    description?: SortOrder
  }

  export type taux_impositionSumOrderByAggregateInput = {
    id?: SortOrder
    pourcentage?: SortOrder
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

  export type type_factureOrderByRelevanceInput = {
    fields: type_factureOrderByRelevanceFieldEnum | type_factureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type type_factureCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facture?: SortOrder
    libelle_type_facture?: SortOrder
  }

  export type type_factureAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type type_factureMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facture?: SortOrder
    libelle_type_facture?: SortOrder
  }

  export type type_factureMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facture?: SortOrder
    libelle_type_facture?: SortOrder
  }

  export type type_factureSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type deviseOrderByRelevanceInput = {
    fields: deviseOrderByRelevanceFieldEnum | deviseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type deviseCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_devise?: SortOrder
    taux_devise?: SortOrder
    description?: SortOrder
  }

  export type deviseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type deviseMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_devise?: SortOrder
    taux_devise?: SortOrder
    description?: SortOrder
  }

  export type deviseMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_devise?: SortOrder
    taux_devise?: SortOrder
    description?: SortOrder
  }

  export type deviseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type type_facturationOrderByRelevanceInput = {
    fields: type_facturationOrderByRelevanceFieldEnum | type_facturationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type type_facturationCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facturaction?: SortOrder
    libelle_type_facturation?: SortOrder
  }

  export type type_facturationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type type_facturationMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facturaction?: SortOrder
    libelle_type_facturation?: SortOrder
  }

  export type type_facturationMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code_type_facturaction?: SortOrder
    libelle_type_facturation?: SortOrder
  }

  export type type_facturationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stickerOrderByRelevanceInput = {
    fields: stickerOrderByRelevanceFieldEnum | stickerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type stickerCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    balance_sticker?: SortOrder
    date_maj?: SortOrder
  }

  export type stickerAvgOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
    balance_sticker?: SortOrder
  }

  export type stickerMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    balance_sticker?: SortOrder
    date_maj?: SortOrder
  }

  export type stickerMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    balance_sticker?: SortOrder
    date_maj?: SortOrder
  }

  export type stickerSumOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
    balance_sticker?: SortOrder
  }

  export type configurationOrderByRelevanceInput = {
    fields: configurationOrderByRelevanceFieldEnum | configurationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type configurationCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle_api_fne?: SortOrder
    cle_api_locale?: SortOrder
    production?: SortOrder
  }

  export type configurationAvgOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
    production?: SortOrder
  }

  export type configurationMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle_api_fne?: SortOrder
    cle_api_locale?: SortOrder
    production?: SortOrder
  }

  export type configurationMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    societe_id?: SortOrder
    cle_api_fne?: SortOrder
    cle_api_locale?: SortOrder
    production?: SortOrder
  }

  export type configurationSumOrderByAggregateInput = {
    id?: SortOrder
    societe_id?: SortOrder
    production?: SortOrder
  }

  export type SocieteListRelationFilter = {
    every?: societeWhereInput
    some?: societeWhereInput
    none?: societeWhereInput
  }

  export type societeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type statutOrderByRelevanceInput = {
    fields: statutOrderByRelevanceFieldEnum | statutOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type statutCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type statutAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type statutMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type statutMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type statutSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleOrderByRelevanceInput = {
    fields: roleOrderByRelevanceFieldEnum | roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type utilisateur_adminOrderByRelevanceInput = {
    fields: utilisateur_adminOrderByRelevanceFieldEnum | utilisateur_adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type utilisateur_adminCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrder
    otp_secret?: SortOrder
    otp_expiration?: SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrder
    verification_expiration?: SortOrder
  }

  export type utilisateur_adminAvgOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
  }

  export type utilisateur_adminMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrder
    otp_secret?: SortOrder
    otp_expiration?: SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrder
    verification_expiration?: SortOrder
  }

  export type utilisateur_adminMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    email?: SortOrder
    login?: SortOrder
    mot_de_passe?: SortOrder
    nom_complet?: SortOrder
    cree_le?: SortOrder
    dernier_login?: SortOrder
    otp_secret?: SortOrder
    otp_expiration?: SortOrder
    tokenVersion?: SortOrder
    verification_token?: SortOrder
    verification_expiration?: SortOrder
  }

  export type utilisateur_adminSumOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
  }

  export type statutCreateNestedOneWithoutSocietesInput = {
    create?: XOR<statutCreateWithoutSocietesInput, statutUncheckedCreateWithoutSocietesInput>
    connectOrCreate?: statutCreateOrConnectWithoutSocietesInput
    connect?: statutWhereUniqueInput
  }

  export type configurationCreateNestedOneWithoutSocieteInput = {
    create?: XOR<configurationCreateWithoutSocieteInput, configurationUncheckedCreateWithoutSocieteInput>
    connectOrCreate?: configurationCreateOrConnectWithoutSocieteInput
    connect?: configurationWhereUniqueInput
  }

  export type etablissementCreateNestedManyWithoutSocieteInput = {
    create?: XOR<etablissementCreateWithoutSocieteInput, etablissementUncheckedCreateWithoutSocieteInput> | etablissementCreateWithoutSocieteInput[] | etablissementUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: etablissementCreateOrConnectWithoutSocieteInput | etablissementCreateOrConnectWithoutSocieteInput[]
    createMany?: etablissementCreateManySocieteInputEnvelope
    connect?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
  }

  export type utilisateur_clientCreateNestedManyWithoutSocieteInput = {
    create?: XOR<utilisateur_clientCreateWithoutSocieteInput, utilisateur_clientUncheckedCreateWithoutSocieteInput> | utilisateur_clientCreateWithoutSocieteInput[] | utilisateur_clientUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutSocieteInput | utilisateur_clientCreateOrConnectWithoutSocieteInput[]
    createMany?: utilisateur_clientCreateManySocieteInputEnvelope
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
  }

  export type licenceCreateNestedManyWithoutSocieteInput = {
    create?: XOR<licenceCreateWithoutSocieteInput, licenceUncheckedCreateWithoutSocieteInput> | licenceCreateWithoutSocieteInput[] | licenceUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutSocieteInput | licenceCreateOrConnectWithoutSocieteInput[]
    createMany?: licenceCreateManySocieteInputEnvelope
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
  }

  export type stickerCreateNestedManyWithoutSocieteInput = {
    create?: XOR<stickerCreateWithoutSocieteInput, stickerUncheckedCreateWithoutSocieteInput> | stickerCreateWithoutSocieteInput[] | stickerUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: stickerCreateOrConnectWithoutSocieteInput | stickerCreateOrConnectWithoutSocieteInput[]
    createMany?: stickerCreateManySocieteInputEnvelope
    connect?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
  }

  export type configurationUncheckedCreateNestedOneWithoutSocieteInput = {
    create?: XOR<configurationCreateWithoutSocieteInput, configurationUncheckedCreateWithoutSocieteInput>
    connectOrCreate?: configurationCreateOrConnectWithoutSocieteInput
    connect?: configurationWhereUniqueInput
  }

  export type etablissementUncheckedCreateNestedManyWithoutSocieteInput = {
    create?: XOR<etablissementCreateWithoutSocieteInput, etablissementUncheckedCreateWithoutSocieteInput> | etablissementCreateWithoutSocieteInput[] | etablissementUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: etablissementCreateOrConnectWithoutSocieteInput | etablissementCreateOrConnectWithoutSocieteInput[]
    createMany?: etablissementCreateManySocieteInputEnvelope
    connect?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
  }

  export type utilisateur_clientUncheckedCreateNestedManyWithoutSocieteInput = {
    create?: XOR<utilisateur_clientCreateWithoutSocieteInput, utilisateur_clientUncheckedCreateWithoutSocieteInput> | utilisateur_clientCreateWithoutSocieteInput[] | utilisateur_clientUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutSocieteInput | utilisateur_clientCreateOrConnectWithoutSocieteInput[]
    createMany?: utilisateur_clientCreateManySocieteInputEnvelope
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
  }

  export type licenceUncheckedCreateNestedManyWithoutSocieteInput = {
    create?: XOR<licenceCreateWithoutSocieteInput, licenceUncheckedCreateWithoutSocieteInput> | licenceCreateWithoutSocieteInput[] | licenceUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutSocieteInput | licenceCreateOrConnectWithoutSocieteInput[]
    createMany?: licenceCreateManySocieteInputEnvelope
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
  }

  export type stickerUncheckedCreateNestedManyWithoutSocieteInput = {
    create?: XOR<stickerCreateWithoutSocieteInput, stickerUncheckedCreateWithoutSocieteInput> | stickerCreateWithoutSocieteInput[] | stickerUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: stickerCreateOrConnectWithoutSocieteInput | stickerCreateOrConnectWithoutSocieteInput[]
    createMany?: stickerCreateManySocieteInputEnvelope
    connect?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type statutUpdateOneWithoutSocietesNestedInput = {
    create?: XOR<statutCreateWithoutSocietesInput, statutUncheckedCreateWithoutSocietesInput>
    connectOrCreate?: statutCreateOrConnectWithoutSocietesInput
    upsert?: statutUpsertWithoutSocietesInput
    disconnect?: statutWhereInput | boolean
    delete?: statutWhereInput | boolean
    connect?: statutWhereUniqueInput
    update?: XOR<XOR<statutUpdateToOneWithWhereWithoutSocietesInput, statutUpdateWithoutSocietesInput>, statutUncheckedUpdateWithoutSocietesInput>
  }

  export type configurationUpdateOneWithoutSocieteNestedInput = {
    create?: XOR<configurationCreateWithoutSocieteInput, configurationUncheckedCreateWithoutSocieteInput>
    connectOrCreate?: configurationCreateOrConnectWithoutSocieteInput
    upsert?: configurationUpsertWithoutSocieteInput
    disconnect?: configurationWhereInput | boolean
    delete?: configurationWhereInput | boolean
    connect?: configurationWhereUniqueInput
    update?: XOR<XOR<configurationUpdateToOneWithWhereWithoutSocieteInput, configurationUpdateWithoutSocieteInput>, configurationUncheckedUpdateWithoutSocieteInput>
  }

  export type etablissementUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<etablissementCreateWithoutSocieteInput, etablissementUncheckedCreateWithoutSocieteInput> | etablissementCreateWithoutSocieteInput[] | etablissementUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: etablissementCreateOrConnectWithoutSocieteInput | etablissementCreateOrConnectWithoutSocieteInput[]
    upsert?: etablissementUpsertWithWhereUniqueWithoutSocieteInput | etablissementUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: etablissementCreateManySocieteInputEnvelope
    set?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    disconnect?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    delete?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    connect?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    update?: etablissementUpdateWithWhereUniqueWithoutSocieteInput | etablissementUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: etablissementUpdateManyWithWhereWithoutSocieteInput | etablissementUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: etablissementScalarWhereInput | etablissementScalarWhereInput[]
  }

  export type utilisateur_clientUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<utilisateur_clientCreateWithoutSocieteInput, utilisateur_clientUncheckedCreateWithoutSocieteInput> | utilisateur_clientCreateWithoutSocieteInput[] | utilisateur_clientUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutSocieteInput | utilisateur_clientCreateOrConnectWithoutSocieteInput[]
    upsert?: utilisateur_clientUpsertWithWhereUniqueWithoutSocieteInput | utilisateur_clientUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: utilisateur_clientCreateManySocieteInputEnvelope
    set?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    disconnect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    delete?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    update?: utilisateur_clientUpdateWithWhereUniqueWithoutSocieteInput | utilisateur_clientUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: utilisateur_clientUpdateManyWithWhereWithoutSocieteInput | utilisateur_clientUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
  }

  export type licenceUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<licenceCreateWithoutSocieteInput, licenceUncheckedCreateWithoutSocieteInput> | licenceCreateWithoutSocieteInput[] | licenceUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutSocieteInput | licenceCreateOrConnectWithoutSocieteInput[]
    upsert?: licenceUpsertWithWhereUniqueWithoutSocieteInput | licenceUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: licenceCreateManySocieteInputEnvelope
    set?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    disconnect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    delete?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    update?: licenceUpdateWithWhereUniqueWithoutSocieteInput | licenceUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: licenceUpdateManyWithWhereWithoutSocieteInput | licenceUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: licenceScalarWhereInput | licenceScalarWhereInput[]
  }

  export type stickerUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<stickerCreateWithoutSocieteInput, stickerUncheckedCreateWithoutSocieteInput> | stickerCreateWithoutSocieteInput[] | stickerUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: stickerCreateOrConnectWithoutSocieteInput | stickerCreateOrConnectWithoutSocieteInput[]
    upsert?: stickerUpsertWithWhereUniqueWithoutSocieteInput | stickerUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: stickerCreateManySocieteInputEnvelope
    set?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    disconnect?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    delete?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    connect?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    update?: stickerUpdateWithWhereUniqueWithoutSocieteInput | stickerUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: stickerUpdateManyWithWhereWithoutSocieteInput | stickerUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: stickerScalarWhereInput | stickerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type configurationUncheckedUpdateOneWithoutSocieteNestedInput = {
    create?: XOR<configurationCreateWithoutSocieteInput, configurationUncheckedCreateWithoutSocieteInput>
    connectOrCreate?: configurationCreateOrConnectWithoutSocieteInput
    upsert?: configurationUpsertWithoutSocieteInput
    disconnect?: configurationWhereInput | boolean
    delete?: configurationWhereInput | boolean
    connect?: configurationWhereUniqueInput
    update?: XOR<XOR<configurationUpdateToOneWithWhereWithoutSocieteInput, configurationUpdateWithoutSocieteInput>, configurationUncheckedUpdateWithoutSocieteInput>
  }

  export type etablissementUncheckedUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<etablissementCreateWithoutSocieteInput, etablissementUncheckedCreateWithoutSocieteInput> | etablissementCreateWithoutSocieteInput[] | etablissementUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: etablissementCreateOrConnectWithoutSocieteInput | etablissementCreateOrConnectWithoutSocieteInput[]
    upsert?: etablissementUpsertWithWhereUniqueWithoutSocieteInput | etablissementUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: etablissementCreateManySocieteInputEnvelope
    set?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    disconnect?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    delete?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    connect?: etablissementWhereUniqueInput | etablissementWhereUniqueInput[]
    update?: etablissementUpdateWithWhereUniqueWithoutSocieteInput | etablissementUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: etablissementUpdateManyWithWhereWithoutSocieteInput | etablissementUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: etablissementScalarWhereInput | etablissementScalarWhereInput[]
  }

  export type utilisateur_clientUncheckedUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<utilisateur_clientCreateWithoutSocieteInput, utilisateur_clientUncheckedCreateWithoutSocieteInput> | utilisateur_clientCreateWithoutSocieteInput[] | utilisateur_clientUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutSocieteInput | utilisateur_clientCreateOrConnectWithoutSocieteInput[]
    upsert?: utilisateur_clientUpsertWithWhereUniqueWithoutSocieteInput | utilisateur_clientUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: utilisateur_clientCreateManySocieteInputEnvelope
    set?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    disconnect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    delete?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    update?: utilisateur_clientUpdateWithWhereUniqueWithoutSocieteInput | utilisateur_clientUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: utilisateur_clientUpdateManyWithWhereWithoutSocieteInput | utilisateur_clientUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
  }

  export type licenceUncheckedUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<licenceCreateWithoutSocieteInput, licenceUncheckedCreateWithoutSocieteInput> | licenceCreateWithoutSocieteInput[] | licenceUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutSocieteInput | licenceCreateOrConnectWithoutSocieteInput[]
    upsert?: licenceUpsertWithWhereUniqueWithoutSocieteInput | licenceUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: licenceCreateManySocieteInputEnvelope
    set?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    disconnect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    delete?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    update?: licenceUpdateWithWhereUniqueWithoutSocieteInput | licenceUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: licenceUpdateManyWithWhereWithoutSocieteInput | licenceUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: licenceScalarWhereInput | licenceScalarWhereInput[]
  }

  export type stickerUncheckedUpdateManyWithoutSocieteNestedInput = {
    create?: XOR<stickerCreateWithoutSocieteInput, stickerUncheckedCreateWithoutSocieteInput> | stickerCreateWithoutSocieteInput[] | stickerUncheckedCreateWithoutSocieteInput[]
    connectOrCreate?: stickerCreateOrConnectWithoutSocieteInput | stickerCreateOrConnectWithoutSocieteInput[]
    upsert?: stickerUpsertWithWhereUniqueWithoutSocieteInput | stickerUpsertWithWhereUniqueWithoutSocieteInput[]
    createMany?: stickerCreateManySocieteInputEnvelope
    set?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    disconnect?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    delete?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    connect?: stickerWhereUniqueInput | stickerWhereUniqueInput[]
    update?: stickerUpdateWithWhereUniqueWithoutSocieteInput | stickerUpdateWithWhereUniqueWithoutSocieteInput[]
    updateMany?: stickerUpdateManyWithWhereWithoutSocieteInput | stickerUpdateManyWithWhereWithoutSocieteInput[]
    deleteMany?: stickerScalarWhereInput | stickerScalarWhereInput[]
  }

  export type societeCreateNestedOneWithoutEtablissementInput = {
    create?: XOR<societeCreateWithoutEtablissementInput, societeUncheckedCreateWithoutEtablissementInput>
    connectOrCreate?: societeCreateOrConnectWithoutEtablissementInput
    connect?: societeWhereUniqueInput
  }

  export type point_venteCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<point_venteCreateWithoutEtablissementInput, point_venteUncheckedCreateWithoutEtablissementInput> | point_venteCreateWithoutEtablissementInput[] | point_venteUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: point_venteCreateOrConnectWithoutEtablissementInput | point_venteCreateOrConnectWithoutEtablissementInput[]
    createMany?: point_venteCreateManyEtablissementInputEnvelope
    connect?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
  }

  export type point_venteUncheckedCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<point_venteCreateWithoutEtablissementInput, point_venteUncheckedCreateWithoutEtablissementInput> | point_venteCreateWithoutEtablissementInput[] | point_venteUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: point_venteCreateOrConnectWithoutEtablissementInput | point_venteCreateOrConnectWithoutEtablissementInput[]
    createMany?: point_venteCreateManyEtablissementInputEnvelope
    connect?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type societeUpdateOneRequiredWithoutEtablissementNestedInput = {
    create?: XOR<societeCreateWithoutEtablissementInput, societeUncheckedCreateWithoutEtablissementInput>
    connectOrCreate?: societeCreateOrConnectWithoutEtablissementInput
    upsert?: societeUpsertWithoutEtablissementInput
    connect?: societeWhereUniqueInput
    update?: XOR<XOR<societeUpdateToOneWithWhereWithoutEtablissementInput, societeUpdateWithoutEtablissementInput>, societeUncheckedUpdateWithoutEtablissementInput>
  }

  export type point_venteUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<point_venteCreateWithoutEtablissementInput, point_venteUncheckedCreateWithoutEtablissementInput> | point_venteCreateWithoutEtablissementInput[] | point_venteUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: point_venteCreateOrConnectWithoutEtablissementInput | point_venteCreateOrConnectWithoutEtablissementInput[]
    upsert?: point_venteUpsertWithWhereUniqueWithoutEtablissementInput | point_venteUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: point_venteCreateManyEtablissementInputEnvelope
    set?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    disconnect?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    delete?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    connect?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    update?: point_venteUpdateWithWhereUniqueWithoutEtablissementInput | point_venteUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: point_venteUpdateManyWithWhereWithoutEtablissementInput | point_venteUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: point_venteScalarWhereInput | point_venteScalarWhereInput[]
  }

  export type point_venteUncheckedUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<point_venteCreateWithoutEtablissementInput, point_venteUncheckedCreateWithoutEtablissementInput> | point_venteCreateWithoutEtablissementInput[] | point_venteUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: point_venteCreateOrConnectWithoutEtablissementInput | point_venteCreateOrConnectWithoutEtablissementInput[]
    upsert?: point_venteUpsertWithWhereUniqueWithoutEtablissementInput | point_venteUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: point_venteCreateManyEtablissementInputEnvelope
    set?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    disconnect?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    delete?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    connect?: point_venteWhereUniqueInput | point_venteWhereUniqueInput[]
    update?: point_venteUpdateWithWhereUniqueWithoutEtablissementInput | point_venteUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: point_venteUpdateManyWithWhereWithoutEtablissementInput | point_venteUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: point_venteScalarWhereInput | point_venteScalarWhereInput[]
  }

  export type etablissementCreateNestedOneWithoutPoint_venteInput = {
    create?: XOR<etablissementCreateWithoutPoint_venteInput, etablissementUncheckedCreateWithoutPoint_venteInput>
    connectOrCreate?: etablissementCreateOrConnectWithoutPoint_venteInput
    connect?: etablissementWhereUniqueInput
  }

  export type etablissementUpdateOneRequiredWithoutPoint_venteNestedInput = {
    create?: XOR<etablissementCreateWithoutPoint_venteInput, etablissementUncheckedCreateWithoutPoint_venteInput>
    connectOrCreate?: etablissementCreateOrConnectWithoutPoint_venteInput
    upsert?: etablissementUpsertWithoutPoint_venteInput
    connect?: etablissementWhereUniqueInput
    update?: XOR<XOR<etablissementUpdateToOneWithWhereWithoutPoint_venteInput, etablissementUpdateWithoutPoint_venteInput>, etablissementUncheckedUpdateWithoutPoint_venteInput>
  }

  export type societeCreateNestedOneWithoutLicencesInput = {
    create?: XOR<societeCreateWithoutLicencesInput, societeUncheckedCreateWithoutLicencesInput>
    connectOrCreate?: societeCreateOrConnectWithoutLicencesInput
    connect?: societeWhereUniqueInput
  }

  export type statutCreateNestedOneWithoutLicencesInput = {
    create?: XOR<statutCreateWithoutLicencesInput, statutUncheckedCreateWithoutLicencesInput>
    connectOrCreate?: statutCreateOrConnectWithoutLicencesInput
    connect?: statutWhereUniqueInput
  }

  export type societeUpdateOneRequiredWithoutLicencesNestedInput = {
    create?: XOR<societeCreateWithoutLicencesInput, societeUncheckedCreateWithoutLicencesInput>
    connectOrCreate?: societeCreateOrConnectWithoutLicencesInput
    upsert?: societeUpsertWithoutLicencesInput
    connect?: societeWhereUniqueInput
    update?: XOR<XOR<societeUpdateToOneWithWhereWithoutLicencesInput, societeUpdateWithoutLicencesInput>, societeUncheckedUpdateWithoutLicencesInput>
  }

  export type statutUpdateOneWithoutLicencesNestedInput = {
    create?: XOR<statutCreateWithoutLicencesInput, statutUncheckedCreateWithoutLicencesInput>
    connectOrCreate?: statutCreateOrConnectWithoutLicencesInput
    upsert?: statutUpsertWithoutLicencesInput
    disconnect?: statutWhereInput | boolean
    delete?: statutWhereInput | boolean
    connect?: statutWhereUniqueInput
    update?: XOR<XOR<statutUpdateToOneWithWhereWithoutLicencesInput, statutUpdateWithoutLicencesInput>, statutUncheckedUpdateWithoutLicencesInput>
  }

  export type roleCreateNestedOneWithoutUtilisateur_clientInput = {
    create?: XOR<roleCreateWithoutUtilisateur_clientInput, roleUncheckedCreateWithoutUtilisateur_clientInput>
    connectOrCreate?: roleCreateOrConnectWithoutUtilisateur_clientInput
    connect?: roleWhereUniqueInput
  }

  export type societeCreateNestedOneWithoutUtilisateur_clientInput = {
    create?: XOR<societeCreateWithoutUtilisateur_clientInput, societeUncheckedCreateWithoutUtilisateur_clientInput>
    connectOrCreate?: societeCreateOrConnectWithoutUtilisateur_clientInput
    connect?: societeWhereUniqueInput
  }

  export type statutCreateNestedOneWithoutUtilisateur_clientInput = {
    create?: XOR<statutCreateWithoutUtilisateur_clientInput, statutUncheckedCreateWithoutUtilisateur_clientInput>
    connectOrCreate?: statutCreateOrConnectWithoutUtilisateur_clientInput
    connect?: statutWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type roleUpdateOneWithoutUtilisateur_clientNestedInput = {
    create?: XOR<roleCreateWithoutUtilisateur_clientInput, roleUncheckedCreateWithoutUtilisateur_clientInput>
    connectOrCreate?: roleCreateOrConnectWithoutUtilisateur_clientInput
    upsert?: roleUpsertWithoutUtilisateur_clientInput
    disconnect?: roleWhereInput | boolean
    delete?: roleWhereInput | boolean
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUtilisateur_clientInput, roleUpdateWithoutUtilisateur_clientInput>, roleUncheckedUpdateWithoutUtilisateur_clientInput>
  }

  export type societeUpdateOneWithoutUtilisateur_clientNestedInput = {
    create?: XOR<societeCreateWithoutUtilisateur_clientInput, societeUncheckedCreateWithoutUtilisateur_clientInput>
    connectOrCreate?: societeCreateOrConnectWithoutUtilisateur_clientInput
    upsert?: societeUpsertWithoutUtilisateur_clientInput
    disconnect?: societeWhereInput | boolean
    delete?: societeWhereInput | boolean
    connect?: societeWhereUniqueInput
    update?: XOR<XOR<societeUpdateToOneWithWhereWithoutUtilisateur_clientInput, societeUpdateWithoutUtilisateur_clientInput>, societeUncheckedUpdateWithoutUtilisateur_clientInput>
  }

  export type statutUpdateOneRequiredWithoutUtilisateur_clientNestedInput = {
    create?: XOR<statutCreateWithoutUtilisateur_clientInput, statutUncheckedCreateWithoutUtilisateur_clientInput>
    connectOrCreate?: statutCreateOrConnectWithoutUtilisateur_clientInput
    upsert?: statutUpsertWithoutUtilisateur_clientInput
    connect?: statutWhereUniqueInput
    update?: XOR<XOR<statutUpdateToOneWithWhereWithoutUtilisateur_clientInput, statutUpdateWithoutUtilisateur_clientInput>, statutUncheckedUpdateWithoutUtilisateur_clientInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type societeCreateNestedOneWithoutStickersInput = {
    create?: XOR<societeCreateWithoutStickersInput, societeUncheckedCreateWithoutStickersInput>
    connectOrCreate?: societeCreateOrConnectWithoutStickersInput
    connect?: societeWhereUniqueInput
  }

  export type societeUpdateOneRequiredWithoutStickersNestedInput = {
    create?: XOR<societeCreateWithoutStickersInput, societeUncheckedCreateWithoutStickersInput>
    connectOrCreate?: societeCreateOrConnectWithoutStickersInput
    upsert?: societeUpsertWithoutStickersInput
    connect?: societeWhereUniqueInput
    update?: XOR<XOR<societeUpdateToOneWithWhereWithoutStickersInput, societeUpdateWithoutStickersInput>, societeUncheckedUpdateWithoutStickersInput>
  }

  export type societeCreateNestedOneWithoutConfigurationInput = {
    create?: XOR<societeCreateWithoutConfigurationInput, societeUncheckedCreateWithoutConfigurationInput>
    connectOrCreate?: societeCreateOrConnectWithoutConfigurationInput
    connect?: societeWhereUniqueInput
  }

  export type societeUpdateOneRequiredWithoutConfigurationNestedInput = {
    create?: XOR<societeCreateWithoutConfigurationInput, societeUncheckedCreateWithoutConfigurationInput>
    connectOrCreate?: societeCreateOrConnectWithoutConfigurationInput
    upsert?: societeUpsertWithoutConfigurationInput
    connect?: societeWhereUniqueInput
    update?: XOR<XOR<societeUpdateToOneWithWhereWithoutConfigurationInput, societeUpdateWithoutConfigurationInput>, societeUncheckedUpdateWithoutConfigurationInput>
  }

  export type societeCreateNestedManyWithoutStatutInput = {
    create?: XOR<societeCreateWithoutStatutInput, societeUncheckedCreateWithoutStatutInput> | societeCreateWithoutStatutInput[] | societeUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: societeCreateOrConnectWithoutStatutInput | societeCreateOrConnectWithoutStatutInput[]
    createMany?: societeCreateManyStatutInputEnvelope
    connect?: societeWhereUniqueInput | societeWhereUniqueInput[]
  }

  export type licenceCreateNestedManyWithoutStatutInput = {
    create?: XOR<licenceCreateWithoutStatutInput, licenceUncheckedCreateWithoutStatutInput> | licenceCreateWithoutStatutInput[] | licenceUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutStatutInput | licenceCreateOrConnectWithoutStatutInput[]
    createMany?: licenceCreateManyStatutInputEnvelope
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
  }

  export type utilisateur_clientCreateNestedManyWithoutStatutInput = {
    create?: XOR<utilisateur_clientCreateWithoutStatutInput, utilisateur_clientUncheckedCreateWithoutStatutInput> | utilisateur_clientCreateWithoutStatutInput[] | utilisateur_clientUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutStatutInput | utilisateur_clientCreateOrConnectWithoutStatutInput[]
    createMany?: utilisateur_clientCreateManyStatutInputEnvelope
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
  }

  export type societeUncheckedCreateNestedManyWithoutStatutInput = {
    create?: XOR<societeCreateWithoutStatutInput, societeUncheckedCreateWithoutStatutInput> | societeCreateWithoutStatutInput[] | societeUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: societeCreateOrConnectWithoutStatutInput | societeCreateOrConnectWithoutStatutInput[]
    createMany?: societeCreateManyStatutInputEnvelope
    connect?: societeWhereUniqueInput | societeWhereUniqueInput[]
  }

  export type licenceUncheckedCreateNestedManyWithoutStatutInput = {
    create?: XOR<licenceCreateWithoutStatutInput, licenceUncheckedCreateWithoutStatutInput> | licenceCreateWithoutStatutInput[] | licenceUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutStatutInput | licenceCreateOrConnectWithoutStatutInput[]
    createMany?: licenceCreateManyStatutInputEnvelope
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
  }

  export type utilisateur_clientUncheckedCreateNestedManyWithoutStatutInput = {
    create?: XOR<utilisateur_clientCreateWithoutStatutInput, utilisateur_clientUncheckedCreateWithoutStatutInput> | utilisateur_clientCreateWithoutStatutInput[] | utilisateur_clientUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutStatutInput | utilisateur_clientCreateOrConnectWithoutStatutInput[]
    createMany?: utilisateur_clientCreateManyStatutInputEnvelope
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
  }

  export type societeUpdateManyWithoutStatutNestedInput = {
    create?: XOR<societeCreateWithoutStatutInput, societeUncheckedCreateWithoutStatutInput> | societeCreateWithoutStatutInput[] | societeUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: societeCreateOrConnectWithoutStatutInput | societeCreateOrConnectWithoutStatutInput[]
    upsert?: societeUpsertWithWhereUniqueWithoutStatutInput | societeUpsertWithWhereUniqueWithoutStatutInput[]
    createMany?: societeCreateManyStatutInputEnvelope
    set?: societeWhereUniqueInput | societeWhereUniqueInput[]
    disconnect?: societeWhereUniqueInput | societeWhereUniqueInput[]
    delete?: societeWhereUniqueInput | societeWhereUniqueInput[]
    connect?: societeWhereUniqueInput | societeWhereUniqueInput[]
    update?: societeUpdateWithWhereUniqueWithoutStatutInput | societeUpdateWithWhereUniqueWithoutStatutInput[]
    updateMany?: societeUpdateManyWithWhereWithoutStatutInput | societeUpdateManyWithWhereWithoutStatutInput[]
    deleteMany?: societeScalarWhereInput | societeScalarWhereInput[]
  }

  export type licenceUpdateManyWithoutStatutNestedInput = {
    create?: XOR<licenceCreateWithoutStatutInput, licenceUncheckedCreateWithoutStatutInput> | licenceCreateWithoutStatutInput[] | licenceUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutStatutInput | licenceCreateOrConnectWithoutStatutInput[]
    upsert?: licenceUpsertWithWhereUniqueWithoutStatutInput | licenceUpsertWithWhereUniqueWithoutStatutInput[]
    createMany?: licenceCreateManyStatutInputEnvelope
    set?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    disconnect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    delete?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    update?: licenceUpdateWithWhereUniqueWithoutStatutInput | licenceUpdateWithWhereUniqueWithoutStatutInput[]
    updateMany?: licenceUpdateManyWithWhereWithoutStatutInput | licenceUpdateManyWithWhereWithoutStatutInput[]
    deleteMany?: licenceScalarWhereInput | licenceScalarWhereInput[]
  }

  export type utilisateur_clientUpdateManyWithoutStatutNestedInput = {
    create?: XOR<utilisateur_clientCreateWithoutStatutInput, utilisateur_clientUncheckedCreateWithoutStatutInput> | utilisateur_clientCreateWithoutStatutInput[] | utilisateur_clientUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutStatutInput | utilisateur_clientCreateOrConnectWithoutStatutInput[]
    upsert?: utilisateur_clientUpsertWithWhereUniqueWithoutStatutInput | utilisateur_clientUpsertWithWhereUniqueWithoutStatutInput[]
    createMany?: utilisateur_clientCreateManyStatutInputEnvelope
    set?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    disconnect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    delete?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    update?: utilisateur_clientUpdateWithWhereUniqueWithoutStatutInput | utilisateur_clientUpdateWithWhereUniqueWithoutStatutInput[]
    updateMany?: utilisateur_clientUpdateManyWithWhereWithoutStatutInput | utilisateur_clientUpdateManyWithWhereWithoutStatutInput[]
    deleteMany?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
  }

  export type societeUncheckedUpdateManyWithoutStatutNestedInput = {
    create?: XOR<societeCreateWithoutStatutInput, societeUncheckedCreateWithoutStatutInput> | societeCreateWithoutStatutInput[] | societeUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: societeCreateOrConnectWithoutStatutInput | societeCreateOrConnectWithoutStatutInput[]
    upsert?: societeUpsertWithWhereUniqueWithoutStatutInput | societeUpsertWithWhereUniqueWithoutStatutInput[]
    createMany?: societeCreateManyStatutInputEnvelope
    set?: societeWhereUniqueInput | societeWhereUniqueInput[]
    disconnect?: societeWhereUniqueInput | societeWhereUniqueInput[]
    delete?: societeWhereUniqueInput | societeWhereUniqueInput[]
    connect?: societeWhereUniqueInput | societeWhereUniqueInput[]
    update?: societeUpdateWithWhereUniqueWithoutStatutInput | societeUpdateWithWhereUniqueWithoutStatutInput[]
    updateMany?: societeUpdateManyWithWhereWithoutStatutInput | societeUpdateManyWithWhereWithoutStatutInput[]
    deleteMany?: societeScalarWhereInput | societeScalarWhereInput[]
  }

  export type licenceUncheckedUpdateManyWithoutStatutNestedInput = {
    create?: XOR<licenceCreateWithoutStatutInput, licenceUncheckedCreateWithoutStatutInput> | licenceCreateWithoutStatutInput[] | licenceUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: licenceCreateOrConnectWithoutStatutInput | licenceCreateOrConnectWithoutStatutInput[]
    upsert?: licenceUpsertWithWhereUniqueWithoutStatutInput | licenceUpsertWithWhereUniqueWithoutStatutInput[]
    createMany?: licenceCreateManyStatutInputEnvelope
    set?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    disconnect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    delete?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    connect?: licenceWhereUniqueInput | licenceWhereUniqueInput[]
    update?: licenceUpdateWithWhereUniqueWithoutStatutInput | licenceUpdateWithWhereUniqueWithoutStatutInput[]
    updateMany?: licenceUpdateManyWithWhereWithoutStatutInput | licenceUpdateManyWithWhereWithoutStatutInput[]
    deleteMany?: licenceScalarWhereInput | licenceScalarWhereInput[]
  }

  export type utilisateur_clientUncheckedUpdateManyWithoutStatutNestedInput = {
    create?: XOR<utilisateur_clientCreateWithoutStatutInput, utilisateur_clientUncheckedCreateWithoutStatutInput> | utilisateur_clientCreateWithoutStatutInput[] | utilisateur_clientUncheckedCreateWithoutStatutInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutStatutInput | utilisateur_clientCreateOrConnectWithoutStatutInput[]
    upsert?: utilisateur_clientUpsertWithWhereUniqueWithoutStatutInput | utilisateur_clientUpsertWithWhereUniqueWithoutStatutInput[]
    createMany?: utilisateur_clientCreateManyStatutInputEnvelope
    set?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    disconnect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    delete?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    update?: utilisateur_clientUpdateWithWhereUniqueWithoutStatutInput | utilisateur_clientUpdateWithWhereUniqueWithoutStatutInput[]
    updateMany?: utilisateur_clientUpdateManyWithWhereWithoutStatutInput | utilisateur_clientUpdateManyWithWhereWithoutStatutInput[]
    deleteMany?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
  }

  export type utilisateur_clientCreateNestedManyWithoutRoleInput = {
    create?: XOR<utilisateur_clientCreateWithoutRoleInput, utilisateur_clientUncheckedCreateWithoutRoleInput> | utilisateur_clientCreateWithoutRoleInput[] | utilisateur_clientUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutRoleInput | utilisateur_clientCreateOrConnectWithoutRoleInput[]
    createMany?: utilisateur_clientCreateManyRoleInputEnvelope
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
  }

  export type utilisateur_clientUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<utilisateur_clientCreateWithoutRoleInput, utilisateur_clientUncheckedCreateWithoutRoleInput> | utilisateur_clientCreateWithoutRoleInput[] | utilisateur_clientUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutRoleInput | utilisateur_clientCreateOrConnectWithoutRoleInput[]
    createMany?: utilisateur_clientCreateManyRoleInputEnvelope
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
  }

  export type utilisateur_clientUpdateManyWithoutRoleNestedInput = {
    create?: XOR<utilisateur_clientCreateWithoutRoleInput, utilisateur_clientUncheckedCreateWithoutRoleInput> | utilisateur_clientCreateWithoutRoleInput[] | utilisateur_clientUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutRoleInput | utilisateur_clientCreateOrConnectWithoutRoleInput[]
    upsert?: utilisateur_clientUpsertWithWhereUniqueWithoutRoleInput | utilisateur_clientUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: utilisateur_clientCreateManyRoleInputEnvelope
    set?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    disconnect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    delete?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    update?: utilisateur_clientUpdateWithWhereUniqueWithoutRoleInput | utilisateur_clientUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: utilisateur_clientUpdateManyWithWhereWithoutRoleInput | utilisateur_clientUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
  }

  export type utilisateur_clientUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<utilisateur_clientCreateWithoutRoleInput, utilisateur_clientUncheckedCreateWithoutRoleInput> | utilisateur_clientCreateWithoutRoleInput[] | utilisateur_clientUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: utilisateur_clientCreateOrConnectWithoutRoleInput | utilisateur_clientCreateOrConnectWithoutRoleInput[]
    upsert?: utilisateur_clientUpsertWithWhereUniqueWithoutRoleInput | utilisateur_clientUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: utilisateur_clientCreateManyRoleInputEnvelope
    set?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    disconnect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    delete?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    connect?: utilisateur_clientWhereUniqueInput | utilisateur_clientWhereUniqueInput[]
    update?: utilisateur_clientUpdateWithWhereUniqueWithoutRoleInput | utilisateur_clientUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: utilisateur_clientUpdateManyWithWhereWithoutRoleInput | utilisateur_clientUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type statutCreateWithoutSocietesInput = {
    uuid?: string
    code: string
    description?: string | null
    licences?: licenceCreateNestedManyWithoutStatutInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutStatutInput
  }

  export type statutUncheckedCreateWithoutSocietesInput = {
    id?: number
    uuid?: string
    code: string
    description?: string | null
    licences?: licenceUncheckedCreateNestedManyWithoutStatutInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutStatutInput
  }

  export type statutCreateOrConnectWithoutSocietesInput = {
    where: statutWhereUniqueInput
    create: XOR<statutCreateWithoutSocietesInput, statutUncheckedCreateWithoutSocietesInput>
  }

  export type configurationCreateWithoutSocieteInput = {
    uuid?: string
    cle_api_fne?: string | null
    cle_api_locale?: string | null
    production?: number
  }

  export type configurationUncheckedCreateWithoutSocieteInput = {
    id?: number
    uuid?: string
    cle_api_fne?: string | null
    cle_api_locale?: string | null
    production?: number
  }

  export type configurationCreateOrConnectWithoutSocieteInput = {
    where: configurationWhereUniqueInput
    create: XOR<configurationCreateWithoutSocieteInput, configurationUncheckedCreateWithoutSocieteInput>
  }

  export type etablissementCreateWithoutSocieteInput = {
    uuid?: string
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
    point_vente?: point_venteCreateNestedManyWithoutEtablissementInput
  }

  export type etablissementUncheckedCreateWithoutSocieteInput = {
    id?: number
    uuid?: string
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
    point_vente?: point_venteUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type etablissementCreateOrConnectWithoutSocieteInput = {
    where: etablissementWhereUniqueInput
    create: XOR<etablissementCreateWithoutSocieteInput, etablissementUncheckedCreateWithoutSocieteInput>
  }

  export type etablissementCreateManySocieteInputEnvelope = {
    data: etablissementCreateManySocieteInput | etablissementCreateManySocieteInput[]
    skipDuplicates?: boolean
  }

  export type utilisateur_clientCreateWithoutSocieteInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
    role?: roleCreateNestedOneWithoutUtilisateur_clientInput
    statut?: statutCreateNestedOneWithoutUtilisateur_clientInput
  }

  export type utilisateur_clientUncheckedCreateWithoutSocieteInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    statut_id?: number
    role_id?: bigint | number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_clientCreateOrConnectWithoutSocieteInput = {
    where: utilisateur_clientWhereUniqueInput
    create: XOR<utilisateur_clientCreateWithoutSocieteInput, utilisateur_clientUncheckedCreateWithoutSocieteInput>
  }

  export type utilisateur_clientCreateManySocieteInputEnvelope = {
    data: utilisateur_clientCreateManySocieteInput | utilisateur_clientCreateManySocieteInput[]
    skipDuplicates?: boolean
  }

  export type licenceCreateWithoutSocieteInput = {
    uuid?: string
    cle: string
    date_expiration?: Date | string | null
    statut?: statutCreateNestedOneWithoutLicencesInput
  }

  export type licenceUncheckedCreateWithoutSocieteInput = {
    id?: number
    uuid?: string
    cle: string
    date_expiration?: Date | string | null
    statut_id?: number | null
  }

  export type licenceCreateOrConnectWithoutSocieteInput = {
    where: licenceWhereUniqueInput
    create: XOR<licenceCreateWithoutSocieteInput, licenceUncheckedCreateWithoutSocieteInput>
  }

  export type licenceCreateManySocieteInputEnvelope = {
    data: licenceCreateManySocieteInput | licenceCreateManySocieteInput[]
    skipDuplicates?: boolean
  }

  export type stickerCreateWithoutSocieteInput = {
    uuid?: string
    balance_sticker?: number | null
    date_maj?: Date | string | null
  }

  export type stickerUncheckedCreateWithoutSocieteInput = {
    id?: number
    uuid?: string
    balance_sticker?: number | null
    date_maj?: Date | string | null
  }

  export type stickerCreateOrConnectWithoutSocieteInput = {
    where: stickerWhereUniqueInput
    create: XOR<stickerCreateWithoutSocieteInput, stickerUncheckedCreateWithoutSocieteInput>
  }

  export type stickerCreateManySocieteInputEnvelope = {
    data: stickerCreateManySocieteInput | stickerCreateManySocieteInput[]
    skipDuplicates?: boolean
  }

  export type statutUpsertWithoutSocietesInput = {
    update: XOR<statutUpdateWithoutSocietesInput, statutUncheckedUpdateWithoutSocietesInput>
    create: XOR<statutCreateWithoutSocietesInput, statutUncheckedCreateWithoutSocietesInput>
    where?: statutWhereInput
  }

  export type statutUpdateToOneWithWhereWithoutSocietesInput = {
    where?: statutWhereInput
    data: XOR<statutUpdateWithoutSocietesInput, statutUncheckedUpdateWithoutSocietesInput>
  }

  export type statutUpdateWithoutSocietesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    licences?: licenceUpdateManyWithoutStatutNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutStatutNestedInput
  }

  export type statutUncheckedUpdateWithoutSocietesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    licences?: licenceUncheckedUpdateManyWithoutStatutNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutStatutNestedInput
  }

  export type configurationUpsertWithoutSocieteInput = {
    update: XOR<configurationUpdateWithoutSocieteInput, configurationUncheckedUpdateWithoutSocieteInput>
    create: XOR<configurationCreateWithoutSocieteInput, configurationUncheckedCreateWithoutSocieteInput>
    where?: configurationWhereInput
  }

  export type configurationUpdateToOneWithWhereWithoutSocieteInput = {
    where?: configurationWhereInput
    data: XOR<configurationUpdateWithoutSocieteInput, configurationUncheckedUpdateWithoutSocieteInput>
  }

  export type configurationUpdateWithoutSocieteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cle_api_fne?: NullableStringFieldUpdateOperationsInput | string | null
    cle_api_locale?: NullableStringFieldUpdateOperationsInput | string | null
    production?: IntFieldUpdateOperationsInput | number
  }

  export type configurationUncheckedUpdateWithoutSocieteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    cle_api_fne?: NullableStringFieldUpdateOperationsInput | string | null
    cle_api_locale?: NullableStringFieldUpdateOperationsInput | string | null
    production?: IntFieldUpdateOperationsInput | number
  }

  export type etablissementUpsertWithWhereUniqueWithoutSocieteInput = {
    where: etablissementWhereUniqueInput
    update: XOR<etablissementUpdateWithoutSocieteInput, etablissementUncheckedUpdateWithoutSocieteInput>
    create: XOR<etablissementCreateWithoutSocieteInput, etablissementUncheckedCreateWithoutSocieteInput>
  }

  export type etablissementUpdateWithWhereUniqueWithoutSocieteInput = {
    where: etablissementWhereUniqueInput
    data: XOR<etablissementUpdateWithoutSocieteInput, etablissementUncheckedUpdateWithoutSocieteInput>
  }

  export type etablissementUpdateManyWithWhereWithoutSocieteInput = {
    where: etablissementScalarWhereInput
    data: XOR<etablissementUpdateManyMutationInput, etablissementUncheckedUpdateManyWithoutSocieteInput>
  }

  export type etablissementScalarWhereInput = {
    AND?: etablissementScalarWhereInput | etablissementScalarWhereInput[]
    OR?: etablissementScalarWhereInput[]
    NOT?: etablissementScalarWhereInput | etablissementScalarWhereInput[]
    id?: IntFilter<"etablissement"> | number
    uuid?: StringFilter<"etablissement"> | string
    societe_id?: IntFilter<"etablissement"> | number
    code_etablissement?: StringFilter<"etablissement"> | string
    libelle_etablissement?: StringFilter<"etablissement"> | string
    localite_etablissement?: StringFilter<"etablissement"> | string
    cree_le?: DateTimeFilter<"etablissement"> | Date | string
    modifie_le?: DateTimeFilter<"etablissement"> | Date | string
  }

  export type utilisateur_clientUpsertWithWhereUniqueWithoutSocieteInput = {
    where: utilisateur_clientWhereUniqueInput
    update: XOR<utilisateur_clientUpdateWithoutSocieteInput, utilisateur_clientUncheckedUpdateWithoutSocieteInput>
    create: XOR<utilisateur_clientCreateWithoutSocieteInput, utilisateur_clientUncheckedCreateWithoutSocieteInput>
  }

  export type utilisateur_clientUpdateWithWhereUniqueWithoutSocieteInput = {
    where: utilisateur_clientWhereUniqueInput
    data: XOR<utilisateur_clientUpdateWithoutSocieteInput, utilisateur_clientUncheckedUpdateWithoutSocieteInput>
  }

  export type utilisateur_clientUpdateManyWithWhereWithoutSocieteInput = {
    where: utilisateur_clientScalarWhereInput
    data: XOR<utilisateur_clientUpdateManyMutationInput, utilisateur_clientUncheckedUpdateManyWithoutSocieteInput>
  }

  export type utilisateur_clientScalarWhereInput = {
    AND?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
    OR?: utilisateur_clientScalarWhereInput[]
    NOT?: utilisateur_clientScalarWhereInput | utilisateur_clientScalarWhereInput[]
    id?: BigIntFilter<"utilisateur_client"> | bigint | number
    uuid?: StringFilter<"utilisateur_client"> | string
    email?: StringFilter<"utilisateur_client"> | string
    login?: StringFilter<"utilisateur_client"> | string
    mot_de_passe?: StringFilter<"utilisateur_client"> | string
    nom_complet?: StringFilter<"utilisateur_client"> | string
    statut_id?: IntFilter<"utilisateur_client"> | number
    societe_id?: IntNullableFilter<"utilisateur_client"> | number | null
    role_id?: BigIntNullableFilter<"utilisateur_client"> | bigint | number | null
    cree_le?: DateTimeFilter<"utilisateur_client"> | Date | string
    dernier_login?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    otp_secret?: StringNullableFilter<"utilisateur_client"> | string | null
    otp_expiration?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
    tokenVersion?: IntFilter<"utilisateur_client"> | number
    verification_token?: StringNullableFilter<"utilisateur_client"> | string | null
    verification_expiration?: DateTimeNullableFilter<"utilisateur_client"> | Date | string | null
  }

  export type licenceUpsertWithWhereUniqueWithoutSocieteInput = {
    where: licenceWhereUniqueInput
    update: XOR<licenceUpdateWithoutSocieteInput, licenceUncheckedUpdateWithoutSocieteInput>
    create: XOR<licenceCreateWithoutSocieteInput, licenceUncheckedCreateWithoutSocieteInput>
  }

  export type licenceUpdateWithWhereUniqueWithoutSocieteInput = {
    where: licenceWhereUniqueInput
    data: XOR<licenceUpdateWithoutSocieteInput, licenceUncheckedUpdateWithoutSocieteInput>
  }

  export type licenceUpdateManyWithWhereWithoutSocieteInput = {
    where: licenceScalarWhereInput
    data: XOR<licenceUpdateManyMutationInput, licenceUncheckedUpdateManyWithoutSocieteInput>
  }

  export type licenceScalarWhereInput = {
    AND?: licenceScalarWhereInput | licenceScalarWhereInput[]
    OR?: licenceScalarWhereInput[]
    NOT?: licenceScalarWhereInput | licenceScalarWhereInput[]
    id?: IntFilter<"licence"> | number
    uuid?: StringFilter<"licence"> | string
    societe_id?: IntFilter<"licence"> | number
    cle?: StringFilter<"licence"> | string
    date_expiration?: DateTimeNullableFilter<"licence"> | Date | string | null
    statut_id?: IntNullableFilter<"licence"> | number | null
  }

  export type stickerUpsertWithWhereUniqueWithoutSocieteInput = {
    where: stickerWhereUniqueInput
    update: XOR<stickerUpdateWithoutSocieteInput, stickerUncheckedUpdateWithoutSocieteInput>
    create: XOR<stickerCreateWithoutSocieteInput, stickerUncheckedCreateWithoutSocieteInput>
  }

  export type stickerUpdateWithWhereUniqueWithoutSocieteInput = {
    where: stickerWhereUniqueInput
    data: XOR<stickerUpdateWithoutSocieteInput, stickerUncheckedUpdateWithoutSocieteInput>
  }

  export type stickerUpdateManyWithWhereWithoutSocieteInput = {
    where: stickerScalarWhereInput
    data: XOR<stickerUpdateManyMutationInput, stickerUncheckedUpdateManyWithoutSocieteInput>
  }

  export type stickerScalarWhereInput = {
    AND?: stickerScalarWhereInput | stickerScalarWhereInput[]
    OR?: stickerScalarWhereInput[]
    NOT?: stickerScalarWhereInput | stickerScalarWhereInput[]
    id?: IntFilter<"sticker"> | number
    uuid?: StringFilter<"sticker"> | string
    societe_id?: IntFilter<"sticker"> | number
    balance_sticker?: IntNullableFilter<"sticker"> | number | null
    date_maj?: DateTimeNullableFilter<"sticker"> | Date | string | null
  }

  export type societeCreateWithoutEtablissementInput = {
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut?: statutCreateNestedOneWithoutSocietesInput
    configuration?: configurationCreateNestedOneWithoutSocieteInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutSocieteInput
    licences?: licenceCreateNestedManyWithoutSocieteInput
    stickers?: stickerCreateNestedManyWithoutSocieteInput
  }

  export type societeUncheckedCreateWithoutEtablissementInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut_id?: number | null
    configuration?: configurationUncheckedCreateNestedOneWithoutSocieteInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutSocieteInput
    licences?: licenceUncheckedCreateNestedManyWithoutSocieteInput
    stickers?: stickerUncheckedCreateNestedManyWithoutSocieteInput
  }

  export type societeCreateOrConnectWithoutEtablissementInput = {
    where: societeWhereUniqueInput
    create: XOR<societeCreateWithoutEtablissementInput, societeUncheckedCreateWithoutEtablissementInput>
  }

  export type point_venteCreateWithoutEtablissementInput = {
    uuid?: string
    libelle_pdv: string
    cree_le?: Date | string
  }

  export type point_venteUncheckedCreateWithoutEtablissementInput = {
    id?: number
    uuid?: string
    libelle_pdv: string
    cree_le?: Date | string
  }

  export type point_venteCreateOrConnectWithoutEtablissementInput = {
    where: point_venteWhereUniqueInput
    create: XOR<point_venteCreateWithoutEtablissementInput, point_venteUncheckedCreateWithoutEtablissementInput>
  }

  export type point_venteCreateManyEtablissementInputEnvelope = {
    data: point_venteCreateManyEtablissementInput | point_venteCreateManyEtablissementInput[]
    skipDuplicates?: boolean
  }

  export type societeUpsertWithoutEtablissementInput = {
    update: XOR<societeUpdateWithoutEtablissementInput, societeUncheckedUpdateWithoutEtablissementInput>
    create: XOR<societeCreateWithoutEtablissementInput, societeUncheckedCreateWithoutEtablissementInput>
    where?: societeWhereInput
  }

  export type societeUpdateToOneWithWhereWithoutEtablissementInput = {
    where?: societeWhereInput
    data: XOR<societeUpdateWithoutEtablissementInput, societeUncheckedUpdateWithoutEtablissementInput>
  }

  export type societeUpdateWithoutEtablissementInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: statutUpdateOneWithoutSocietesNestedInput
    configuration?: configurationUpdateOneWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutSocieteNestedInput
    licences?: licenceUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
    configuration?: configurationUncheckedUpdateOneWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutSocieteNestedInput
    licences?: licenceUncheckedUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUncheckedUpdateManyWithoutSocieteNestedInput
  }

  export type point_venteUpsertWithWhereUniqueWithoutEtablissementInput = {
    where: point_venteWhereUniqueInput
    update: XOR<point_venteUpdateWithoutEtablissementInput, point_venteUncheckedUpdateWithoutEtablissementInput>
    create: XOR<point_venteCreateWithoutEtablissementInput, point_venteUncheckedCreateWithoutEtablissementInput>
  }

  export type point_venteUpdateWithWhereUniqueWithoutEtablissementInput = {
    where: point_venteWhereUniqueInput
    data: XOR<point_venteUpdateWithoutEtablissementInput, point_venteUncheckedUpdateWithoutEtablissementInput>
  }

  export type point_venteUpdateManyWithWhereWithoutEtablissementInput = {
    where: point_venteScalarWhereInput
    data: XOR<point_venteUpdateManyMutationInput, point_venteUncheckedUpdateManyWithoutEtablissementInput>
  }

  export type point_venteScalarWhereInput = {
    AND?: point_venteScalarWhereInput | point_venteScalarWhereInput[]
    OR?: point_venteScalarWhereInput[]
    NOT?: point_venteScalarWhereInput | point_venteScalarWhereInput[]
    id?: IntFilter<"point_vente"> | number
    uuid?: StringFilter<"point_vente"> | string
    etablissement_id?: IntFilter<"point_vente"> | number
    libelle_pdv?: StringFilter<"point_vente"> | string
    cree_le?: DateTimeFilter<"point_vente"> | Date | string
  }

  export type etablissementCreateWithoutPoint_venteInput = {
    uuid?: string
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
    societe: societeCreateNestedOneWithoutEtablissementInput
  }

  export type etablissementUncheckedCreateWithoutPoint_venteInput = {
    id?: number
    uuid?: string
    societe_id: number
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type etablissementCreateOrConnectWithoutPoint_venteInput = {
    where: etablissementWhereUniqueInput
    create: XOR<etablissementCreateWithoutPoint_venteInput, etablissementUncheckedCreateWithoutPoint_venteInput>
  }

  export type etablissementUpsertWithoutPoint_venteInput = {
    update: XOR<etablissementUpdateWithoutPoint_venteInput, etablissementUncheckedUpdateWithoutPoint_venteInput>
    create: XOR<etablissementCreateWithoutPoint_venteInput, etablissementUncheckedCreateWithoutPoint_venteInput>
    where?: etablissementWhereInput
  }

  export type etablissementUpdateToOneWithWhereWithoutPoint_venteInput = {
    where?: etablissementWhereInput
    data: XOR<etablissementUpdateWithoutPoint_venteInput, etablissementUncheckedUpdateWithoutPoint_venteInput>
  }

  export type etablissementUpdateWithoutPoint_venteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    societe?: societeUpdateOneRequiredWithoutEtablissementNestedInput
  }

  export type etablissementUncheckedUpdateWithoutPoint_venteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type societeCreateWithoutLicencesInput = {
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut?: statutCreateNestedOneWithoutSocietesInput
    configuration?: configurationCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutSocieteInput
    stickers?: stickerCreateNestedManyWithoutSocieteInput
  }

  export type societeUncheckedCreateWithoutLicencesInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut_id?: number | null
    configuration?: configurationUncheckedCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementUncheckedCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutSocieteInput
    stickers?: stickerUncheckedCreateNestedManyWithoutSocieteInput
  }

  export type societeCreateOrConnectWithoutLicencesInput = {
    where: societeWhereUniqueInput
    create: XOR<societeCreateWithoutLicencesInput, societeUncheckedCreateWithoutLicencesInput>
  }

  export type statutCreateWithoutLicencesInput = {
    uuid?: string
    code: string
    description?: string | null
    societes?: societeCreateNestedManyWithoutStatutInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutStatutInput
  }

  export type statutUncheckedCreateWithoutLicencesInput = {
    id?: number
    uuid?: string
    code: string
    description?: string | null
    societes?: societeUncheckedCreateNestedManyWithoutStatutInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutStatutInput
  }

  export type statutCreateOrConnectWithoutLicencesInput = {
    where: statutWhereUniqueInput
    create: XOR<statutCreateWithoutLicencesInput, statutUncheckedCreateWithoutLicencesInput>
  }

  export type societeUpsertWithoutLicencesInput = {
    update: XOR<societeUpdateWithoutLicencesInput, societeUncheckedUpdateWithoutLicencesInput>
    create: XOR<societeCreateWithoutLicencesInput, societeUncheckedCreateWithoutLicencesInput>
    where?: societeWhereInput
  }

  export type societeUpdateToOneWithWhereWithoutLicencesInput = {
    where?: societeWhereInput
    data: XOR<societeUpdateWithoutLicencesInput, societeUncheckedUpdateWithoutLicencesInput>
  }

  export type societeUpdateWithoutLicencesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: statutUpdateOneWithoutSocietesNestedInput
    configuration?: configurationUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateWithoutLicencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
    configuration?: configurationUncheckedUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUncheckedUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUncheckedUpdateManyWithoutSocieteNestedInput
  }

  export type statutUpsertWithoutLicencesInput = {
    update: XOR<statutUpdateWithoutLicencesInput, statutUncheckedUpdateWithoutLicencesInput>
    create: XOR<statutCreateWithoutLicencesInput, statutUncheckedCreateWithoutLicencesInput>
    where?: statutWhereInput
  }

  export type statutUpdateToOneWithWhereWithoutLicencesInput = {
    where?: statutWhereInput
    data: XOR<statutUpdateWithoutLicencesInput, statutUncheckedUpdateWithoutLicencesInput>
  }

  export type statutUpdateWithoutLicencesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    societes?: societeUpdateManyWithoutStatutNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutStatutNestedInput
  }

  export type statutUncheckedUpdateWithoutLicencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    societes?: societeUncheckedUpdateManyWithoutStatutNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutStatutNestedInput
  }

  export type roleCreateWithoutUtilisateur_clientInput = {
    id: bigint | number
    uuid?: string
    code: string
    description?: string | null
  }

  export type roleUncheckedCreateWithoutUtilisateur_clientInput = {
    id: bigint | number
    uuid?: string
    code: string
    description?: string | null
  }

  export type roleCreateOrConnectWithoutUtilisateur_clientInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUtilisateur_clientInput, roleUncheckedCreateWithoutUtilisateur_clientInput>
  }

  export type societeCreateWithoutUtilisateur_clientInput = {
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut?: statutCreateNestedOneWithoutSocietesInput
    configuration?: configurationCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementCreateNestedManyWithoutSocieteInput
    licences?: licenceCreateNestedManyWithoutSocieteInput
    stickers?: stickerCreateNestedManyWithoutSocieteInput
  }

  export type societeUncheckedCreateWithoutUtilisateur_clientInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut_id?: number | null
    configuration?: configurationUncheckedCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementUncheckedCreateNestedManyWithoutSocieteInput
    licences?: licenceUncheckedCreateNestedManyWithoutSocieteInput
    stickers?: stickerUncheckedCreateNestedManyWithoutSocieteInput
  }

  export type societeCreateOrConnectWithoutUtilisateur_clientInput = {
    where: societeWhereUniqueInput
    create: XOR<societeCreateWithoutUtilisateur_clientInput, societeUncheckedCreateWithoutUtilisateur_clientInput>
  }

  export type statutCreateWithoutUtilisateur_clientInput = {
    uuid?: string
    code: string
    description?: string | null
    societes?: societeCreateNestedManyWithoutStatutInput
    licences?: licenceCreateNestedManyWithoutStatutInput
  }

  export type statutUncheckedCreateWithoutUtilisateur_clientInput = {
    id?: number
    uuid?: string
    code: string
    description?: string | null
    societes?: societeUncheckedCreateNestedManyWithoutStatutInput
    licences?: licenceUncheckedCreateNestedManyWithoutStatutInput
  }

  export type statutCreateOrConnectWithoutUtilisateur_clientInput = {
    where: statutWhereUniqueInput
    create: XOR<statutCreateWithoutUtilisateur_clientInput, statutUncheckedCreateWithoutUtilisateur_clientInput>
  }

  export type roleUpsertWithoutUtilisateur_clientInput = {
    update: XOR<roleUpdateWithoutUtilisateur_clientInput, roleUncheckedUpdateWithoutUtilisateur_clientInput>
    create: XOR<roleCreateWithoutUtilisateur_clientInput, roleUncheckedCreateWithoutUtilisateur_clientInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUtilisateur_clientInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUtilisateur_clientInput, roleUncheckedUpdateWithoutUtilisateur_clientInput>
  }

  export type roleUpdateWithoutUtilisateur_clientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roleUncheckedUpdateWithoutUtilisateur_clientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type societeUpsertWithoutUtilisateur_clientInput = {
    update: XOR<societeUpdateWithoutUtilisateur_clientInput, societeUncheckedUpdateWithoutUtilisateur_clientInput>
    create: XOR<societeCreateWithoutUtilisateur_clientInput, societeUncheckedCreateWithoutUtilisateur_clientInput>
    where?: societeWhereInput
  }

  export type societeUpdateToOneWithWhereWithoutUtilisateur_clientInput = {
    where?: societeWhereInput
    data: XOR<societeUpdateWithoutUtilisateur_clientInput, societeUncheckedUpdateWithoutUtilisateur_clientInput>
  }

  export type societeUpdateWithoutUtilisateur_clientInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: statutUpdateOneWithoutSocietesNestedInput
    configuration?: configurationUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUpdateManyWithoutSocieteNestedInput
    licences?: licenceUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateWithoutUtilisateur_clientInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
    configuration?: configurationUncheckedUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUncheckedUpdateManyWithoutSocieteNestedInput
    licences?: licenceUncheckedUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUncheckedUpdateManyWithoutSocieteNestedInput
  }

  export type statutUpsertWithoutUtilisateur_clientInput = {
    update: XOR<statutUpdateWithoutUtilisateur_clientInput, statutUncheckedUpdateWithoutUtilisateur_clientInput>
    create: XOR<statutCreateWithoutUtilisateur_clientInput, statutUncheckedCreateWithoutUtilisateur_clientInput>
    where?: statutWhereInput
  }

  export type statutUpdateToOneWithWhereWithoutUtilisateur_clientInput = {
    where?: statutWhereInput
    data: XOR<statutUpdateWithoutUtilisateur_clientInput, statutUncheckedUpdateWithoutUtilisateur_clientInput>
  }

  export type statutUpdateWithoutUtilisateur_clientInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    societes?: societeUpdateManyWithoutStatutNestedInput
    licences?: licenceUpdateManyWithoutStatutNestedInput
  }

  export type statutUncheckedUpdateWithoutUtilisateur_clientInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    societes?: societeUncheckedUpdateManyWithoutStatutNestedInput
    licences?: licenceUncheckedUpdateManyWithoutStatutNestedInput
  }

  export type societeCreateWithoutStickersInput = {
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut?: statutCreateNestedOneWithoutSocietesInput
    configuration?: configurationCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutSocieteInput
    licences?: licenceCreateNestedManyWithoutSocieteInput
  }

  export type societeUncheckedCreateWithoutStickersInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut_id?: number | null
    configuration?: configurationUncheckedCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementUncheckedCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutSocieteInput
    licences?: licenceUncheckedCreateNestedManyWithoutSocieteInput
  }

  export type societeCreateOrConnectWithoutStickersInput = {
    where: societeWhereUniqueInput
    create: XOR<societeCreateWithoutStickersInput, societeUncheckedCreateWithoutStickersInput>
  }

  export type societeUpsertWithoutStickersInput = {
    update: XOR<societeUpdateWithoutStickersInput, societeUncheckedUpdateWithoutStickersInput>
    create: XOR<societeCreateWithoutStickersInput, societeUncheckedCreateWithoutStickersInput>
    where?: societeWhereInput
  }

  export type societeUpdateToOneWithWhereWithoutStickersInput = {
    where?: societeWhereInput
    data: XOR<societeUpdateWithoutStickersInput, societeUncheckedUpdateWithoutStickersInput>
  }

  export type societeUpdateWithoutStickersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: statutUpdateOneWithoutSocietesNestedInput
    configuration?: configurationUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutSocieteNestedInput
    licences?: licenceUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateWithoutStickersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
    configuration?: configurationUncheckedUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUncheckedUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutSocieteNestedInput
    licences?: licenceUncheckedUpdateManyWithoutSocieteNestedInput
  }

  export type societeCreateWithoutConfigurationInput = {
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut?: statutCreateNestedOneWithoutSocietesInput
    etablissement?: etablissementCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutSocieteInput
    licences?: licenceCreateNestedManyWithoutSocieteInput
    stickers?: stickerCreateNestedManyWithoutSocieteInput
  }

  export type societeUncheckedCreateWithoutConfigurationInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    statut_id?: number | null
    etablissement?: etablissementUncheckedCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutSocieteInput
    licences?: licenceUncheckedCreateNestedManyWithoutSocieteInput
    stickers?: stickerUncheckedCreateNestedManyWithoutSocieteInput
  }

  export type societeCreateOrConnectWithoutConfigurationInput = {
    where: societeWhereUniqueInput
    create: XOR<societeCreateWithoutConfigurationInput, societeUncheckedCreateWithoutConfigurationInput>
  }

  export type societeUpsertWithoutConfigurationInput = {
    update: XOR<societeUpdateWithoutConfigurationInput, societeUncheckedUpdateWithoutConfigurationInput>
    create: XOR<societeCreateWithoutConfigurationInput, societeUncheckedCreateWithoutConfigurationInput>
    where?: societeWhereInput
  }

  export type societeUpdateToOneWithWhereWithoutConfigurationInput = {
    where?: societeWhereInput
    data: XOR<societeUpdateWithoutConfigurationInput, societeUncheckedUpdateWithoutConfigurationInput>
  }

  export type societeUpdateWithoutConfigurationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: statutUpdateOneWithoutSocietesNestedInput
    etablissement?: etablissementUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutSocieteNestedInput
    licences?: licenceUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateWithoutConfigurationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
    etablissement?: etablissementUncheckedUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutSocieteNestedInput
    licences?: licenceUncheckedUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUncheckedUpdateManyWithoutSocieteNestedInput
  }

  export type societeCreateWithoutStatutInput = {
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    configuration?: configurationCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientCreateNestedManyWithoutSocieteInput
    licences?: licenceCreateNestedManyWithoutSocieteInput
    stickers?: stickerCreateNestedManyWithoutSocieteInput
  }

  export type societeUncheckedCreateWithoutStatutInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
    configuration?: configurationUncheckedCreateNestedOneWithoutSocieteInput
    etablissement?: etablissementUncheckedCreateNestedManyWithoutSocieteInput
    utilisateur_client?: utilisateur_clientUncheckedCreateNestedManyWithoutSocieteInput
    licences?: licenceUncheckedCreateNestedManyWithoutSocieteInput
    stickers?: stickerUncheckedCreateNestedManyWithoutSocieteInput
  }

  export type societeCreateOrConnectWithoutStatutInput = {
    where: societeWhereUniqueInput
    create: XOR<societeCreateWithoutStatutInput, societeUncheckedCreateWithoutStatutInput>
  }

  export type societeCreateManyStatutInputEnvelope = {
    data: societeCreateManyStatutInput | societeCreateManyStatutInput[]
    skipDuplicates?: boolean
  }

  export type licenceCreateWithoutStatutInput = {
    uuid?: string
    cle: string
    date_expiration?: Date | string | null
    societe: societeCreateNestedOneWithoutLicencesInput
  }

  export type licenceUncheckedCreateWithoutStatutInput = {
    id?: number
    uuid?: string
    societe_id: number
    cle: string
    date_expiration?: Date | string | null
  }

  export type licenceCreateOrConnectWithoutStatutInput = {
    where: licenceWhereUniqueInput
    create: XOR<licenceCreateWithoutStatutInput, licenceUncheckedCreateWithoutStatutInput>
  }

  export type licenceCreateManyStatutInputEnvelope = {
    data: licenceCreateManyStatutInput | licenceCreateManyStatutInput[]
    skipDuplicates?: boolean
  }

  export type utilisateur_clientCreateWithoutStatutInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
    role?: roleCreateNestedOneWithoutUtilisateur_clientInput
    societe?: societeCreateNestedOneWithoutUtilisateur_clientInput
  }

  export type utilisateur_clientUncheckedCreateWithoutStatutInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    societe_id?: number | null
    role_id?: bigint | number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_clientCreateOrConnectWithoutStatutInput = {
    where: utilisateur_clientWhereUniqueInput
    create: XOR<utilisateur_clientCreateWithoutStatutInput, utilisateur_clientUncheckedCreateWithoutStatutInput>
  }

  export type utilisateur_clientCreateManyStatutInputEnvelope = {
    data: utilisateur_clientCreateManyStatutInput | utilisateur_clientCreateManyStatutInput[]
    skipDuplicates?: boolean
  }

  export type societeUpsertWithWhereUniqueWithoutStatutInput = {
    where: societeWhereUniqueInput
    update: XOR<societeUpdateWithoutStatutInput, societeUncheckedUpdateWithoutStatutInput>
    create: XOR<societeCreateWithoutStatutInput, societeUncheckedCreateWithoutStatutInput>
  }

  export type societeUpdateWithWhereUniqueWithoutStatutInput = {
    where: societeWhereUniqueInput
    data: XOR<societeUpdateWithoutStatutInput, societeUncheckedUpdateWithoutStatutInput>
  }

  export type societeUpdateManyWithWhereWithoutStatutInput = {
    where: societeScalarWhereInput
    data: XOR<societeUpdateManyMutationInput, societeUncheckedUpdateManyWithoutStatutInput>
  }

  export type societeScalarWhereInput = {
    AND?: societeScalarWhereInput | societeScalarWhereInput[]
    OR?: societeScalarWhereInput[]
    NOT?: societeScalarWhereInput | societeScalarWhereInput[]
    id?: IntFilter<"societe"> | number
    uuid?: StringFilter<"societe"> | string
    code_societe?: StringNullableFilter<"societe"> | string | null
    raison_sociale_societe?: StringNullableFilter<"societe"> | string | null
    ncc?: StringNullableFilter<"societe"> | string | null
    rccm?: StringNullableFilter<"societe"> | string | null
    regime_imposition?: StringNullableFilter<"societe"> | string | null
    centre_impot?: StringNullableFilter<"societe"> | string | null
    ref_bancaire?: StringNullableFilter<"societe"> | string | null
    adresse?: StringNullableFilter<"societe"> | string | null
    telephone?: StringNullableFilter<"societe"> | string | null
    email?: StringNullableFilter<"societe"> | string | null
    cree_le?: DateTimeNullableFilter<"societe"> | Date | string | null
    modifie_le?: DateTimeNullableFilter<"societe"> | Date | string | null
    bd_host?: StringNullableFilter<"societe"> | string | null
    bd_name?: StringNullableFilter<"societe"> | string | null
    bd_user?: StringNullableFilter<"societe"> | string | null
    bd_pass?: StringNullableFilter<"societe"> | string | null
    bd_port?: IntNullableFilter<"societe"> | number | null
    logo_url?: StringNullableFilter<"societe"> | string | null
    statut_id?: IntNullableFilter<"societe"> | number | null
  }

  export type licenceUpsertWithWhereUniqueWithoutStatutInput = {
    where: licenceWhereUniqueInput
    update: XOR<licenceUpdateWithoutStatutInput, licenceUncheckedUpdateWithoutStatutInput>
    create: XOR<licenceCreateWithoutStatutInput, licenceUncheckedCreateWithoutStatutInput>
  }

  export type licenceUpdateWithWhereUniqueWithoutStatutInput = {
    where: licenceWhereUniqueInput
    data: XOR<licenceUpdateWithoutStatutInput, licenceUncheckedUpdateWithoutStatutInput>
  }

  export type licenceUpdateManyWithWhereWithoutStatutInput = {
    where: licenceScalarWhereInput
    data: XOR<licenceUpdateManyMutationInput, licenceUncheckedUpdateManyWithoutStatutInput>
  }

  export type utilisateur_clientUpsertWithWhereUniqueWithoutStatutInput = {
    where: utilisateur_clientWhereUniqueInput
    update: XOR<utilisateur_clientUpdateWithoutStatutInput, utilisateur_clientUncheckedUpdateWithoutStatutInput>
    create: XOR<utilisateur_clientCreateWithoutStatutInput, utilisateur_clientUncheckedCreateWithoutStatutInput>
  }

  export type utilisateur_clientUpdateWithWhereUniqueWithoutStatutInput = {
    where: utilisateur_clientWhereUniqueInput
    data: XOR<utilisateur_clientUpdateWithoutStatutInput, utilisateur_clientUncheckedUpdateWithoutStatutInput>
  }

  export type utilisateur_clientUpdateManyWithWhereWithoutStatutInput = {
    where: utilisateur_clientScalarWhereInput
    data: XOR<utilisateur_clientUpdateManyMutationInput, utilisateur_clientUncheckedUpdateManyWithoutStatutInput>
  }

  export type utilisateur_clientCreateWithoutRoleInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
    societe?: societeCreateNestedOneWithoutUtilisateur_clientInput
    statut?: statutCreateNestedOneWithoutUtilisateur_clientInput
  }

  export type utilisateur_clientUncheckedCreateWithoutRoleInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    statut_id?: number
    societe_id?: number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_clientCreateOrConnectWithoutRoleInput = {
    where: utilisateur_clientWhereUniqueInput
    create: XOR<utilisateur_clientCreateWithoutRoleInput, utilisateur_clientUncheckedCreateWithoutRoleInput>
  }

  export type utilisateur_clientCreateManyRoleInputEnvelope = {
    data: utilisateur_clientCreateManyRoleInput | utilisateur_clientCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type utilisateur_clientUpsertWithWhereUniqueWithoutRoleInput = {
    where: utilisateur_clientWhereUniqueInput
    update: XOR<utilisateur_clientUpdateWithoutRoleInput, utilisateur_clientUncheckedUpdateWithoutRoleInput>
    create: XOR<utilisateur_clientCreateWithoutRoleInput, utilisateur_clientUncheckedCreateWithoutRoleInput>
  }

  export type utilisateur_clientUpdateWithWhereUniqueWithoutRoleInput = {
    where: utilisateur_clientWhereUniqueInput
    data: XOR<utilisateur_clientUpdateWithoutRoleInput, utilisateur_clientUncheckedUpdateWithoutRoleInput>
  }

  export type utilisateur_clientUpdateManyWithWhereWithoutRoleInput = {
    where: utilisateur_clientScalarWhereInput
    data: XOR<utilisateur_clientUpdateManyMutationInput, utilisateur_clientUncheckedUpdateManyWithoutRoleInput>
  }

  export type etablissementCreateManySocieteInput = {
    id?: number
    uuid?: string
    code_etablissement: string
    libelle_etablissement: string
    localite_etablissement: string
    cree_le?: Date | string
    modifie_le?: Date | string
  }

  export type utilisateur_clientCreateManySocieteInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    statut_id?: number
    role_id?: bigint | number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type licenceCreateManySocieteInput = {
    id?: number
    uuid?: string
    cle: string
    date_expiration?: Date | string | null
    statut_id?: number | null
  }

  export type stickerCreateManySocieteInput = {
    id?: number
    uuid?: string
    balance_sticker?: number | null
    date_maj?: Date | string | null
  }

  export type etablissementUpdateWithoutSocieteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    point_vente?: point_venteUpdateManyWithoutEtablissementNestedInput
  }

  export type etablissementUncheckedUpdateWithoutSocieteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
    point_vente?: point_venteUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type etablissementUncheckedUpdateManyWithoutSocieteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_etablissement?: StringFieldUpdateOperationsInput | string
    libelle_etablissement?: StringFieldUpdateOperationsInput | string
    localite_etablissement?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    modifie_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type utilisateur_clientUpdateWithoutSocieteInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: roleUpdateOneWithoutUtilisateur_clientNestedInput
    statut?: statutUpdateOneRequiredWithoutUtilisateur_clientNestedInput
  }

  export type utilisateur_clientUncheckedUpdateWithoutSocieteInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    statut_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_clientUncheckedUpdateManyWithoutSocieteInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    statut_id?: IntFieldUpdateOperationsInput | number
    role_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type licenceUpdateWithoutSocieteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: statutUpdateOneWithoutLicencesNestedInput
  }

  export type licenceUncheckedUpdateWithoutSocieteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type licenceUncheckedUpdateManyWithoutSocieteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stickerUpdateWithoutSocieteInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    balance_sticker?: NullableIntFieldUpdateOperationsInput | number | null
    date_maj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stickerUncheckedUpdateWithoutSocieteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    balance_sticker?: NullableIntFieldUpdateOperationsInput | number | null
    date_maj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type stickerUncheckedUpdateManyWithoutSocieteInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    balance_sticker?: NullableIntFieldUpdateOperationsInput | number | null
    date_maj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type point_venteCreateManyEtablissementInput = {
    id?: number
    uuid?: string
    libelle_pdv: string
    cree_le?: Date | string
  }

  export type point_venteUpdateWithoutEtablissementInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    libelle_pdv?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type point_venteUncheckedUpdateWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    libelle_pdv?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type point_venteUncheckedUpdateManyWithoutEtablissementInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    libelle_pdv?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type societeCreateManyStatutInput = {
    id?: number
    uuid?: string
    code_societe?: string | null
    raison_sociale_societe?: string | null
    ncc?: string | null
    rccm?: string | null
    regime_imposition?: string | null
    centre_impot?: string | null
    ref_bancaire?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    cree_le?: Date | string | null
    modifie_le?: Date | string | null
    bd_host?: string | null
    bd_name?: string | null
    bd_user?: string | null
    bd_pass?: string | null
    bd_port?: number | null
    logo_url?: string | null
  }

  export type licenceCreateManyStatutInput = {
    id?: number
    uuid?: string
    societe_id: number
    cle: string
    date_expiration?: Date | string | null
  }

  export type utilisateur_clientCreateManyStatutInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    societe_id?: number | null
    role_id?: bigint | number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type societeUpdateWithoutStatutInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    configuration?: configurationUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUpdateManyWithoutSocieteNestedInput
    licences?: licenceUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateWithoutStatutInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    configuration?: configurationUncheckedUpdateOneWithoutSocieteNestedInput
    etablissement?: etablissementUncheckedUpdateManyWithoutSocieteNestedInput
    utilisateur_client?: utilisateur_clientUncheckedUpdateManyWithoutSocieteNestedInput
    licences?: licenceUncheckedUpdateManyWithoutSocieteNestedInput
    stickers?: stickerUncheckedUpdateManyWithoutSocieteNestedInput
  }

  export type societeUncheckedUpdateManyWithoutStatutInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    code_societe?: NullableStringFieldUpdateOperationsInput | string | null
    raison_sociale_societe?: NullableStringFieldUpdateOperationsInput | string | null
    ncc?: NullableStringFieldUpdateOperationsInput | string | null
    rccm?: NullableStringFieldUpdateOperationsInput | string | null
    regime_imposition?: NullableStringFieldUpdateOperationsInput | string | null
    centre_impot?: NullableStringFieldUpdateOperationsInput | string | null
    ref_bancaire?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cree_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifie_le?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bd_host?: NullableStringFieldUpdateOperationsInput | string | null
    bd_name?: NullableStringFieldUpdateOperationsInput | string | null
    bd_user?: NullableStringFieldUpdateOperationsInput | string | null
    bd_pass?: NullableStringFieldUpdateOperationsInput | string | null
    bd_port?: NullableIntFieldUpdateOperationsInput | number | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type licenceUpdateWithoutStatutInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    societe?: societeUpdateOneRequiredWithoutLicencesNestedInput
  }

  export type licenceUncheckedUpdateWithoutStatutInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type licenceUncheckedUpdateManyWithoutStatutInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    societe_id?: IntFieldUpdateOperationsInput | number
    cle?: StringFieldUpdateOperationsInput | string
    date_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_clientUpdateWithoutStatutInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: roleUpdateOneWithoutUtilisateur_clientNestedInput
    societe?: societeUpdateOneWithoutUtilisateur_clientNestedInput
  }

  export type utilisateur_clientUncheckedUpdateWithoutStatutInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    societe_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_clientUncheckedUpdateManyWithoutStatutInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    societe_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_clientCreateManyRoleInput = {
    id?: bigint | number
    uuid?: string
    email: string
    login: string
    mot_de_passe: string
    nom_complet: string
    statut_id?: number
    societe_id?: number | null
    cree_le?: Date | string
    dernier_login?: Date | string | null
    otp_secret?: string | null
    otp_expiration?: Date | string | null
    tokenVersion?: number
    verification_token?: string | null
    verification_expiration?: Date | string | null
  }

  export type utilisateur_clientUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    societe?: societeUpdateOneWithoutUtilisateur_clientNestedInput
    statut?: statutUpdateOneRequiredWithoutUtilisateur_clientNestedInput
  }

  export type utilisateur_clientUncheckedUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    statut_id?: IntFieldUpdateOperationsInput | number
    societe_id?: NullableIntFieldUpdateOperationsInput | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateur_clientUncheckedUpdateManyWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    nom_complet?: StringFieldUpdateOperationsInput | string
    statut_id?: IntFieldUpdateOperationsInput | number
    societe_id?: NullableIntFieldUpdateOperationsInput | number | null
    cree_le?: DateTimeFieldUpdateOperationsInput | Date | string
    dernier_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp_secret?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    verification_expiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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