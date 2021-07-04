import * as $protobuf from "protobufjs";
/** Properties of an Article. */
export interface IArticle {

    /** Article id */
    id?: (string|null);

    /** Article authorId */
    authorId?: (string|null);

    /** Article category */
    category?: (string|null);

    /** Article markdown */
    markdown?: (string|null);

    /** Article createdAt */
    createdAt?: (google.protobuf.ITimestamp|null);

    /** Article updatedAt */
    updatedAt?: (google.protobuf.ITimestamp|null);
}

/** Represents an Article. */
export class Article implements IArticle {

    /**
     * Constructs a new Article.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArticle);

    /** Article id. */
    public id: string;

    /** Article authorId. */
    public authorId: string;

    /** Article category. */
    public category: string;

    /** Article markdown. */
    public markdown: string;

    /** Article createdAt. */
    public createdAt?: (google.protobuf.ITimestamp|null);

    /** Article updatedAt. */
    public updatedAt?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new Article instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Article instance
     */
    public static create(properties?: IArticle): Article;

    /**
     * Encodes the specified Article message. Does not implicitly {@link Article.verify|verify} messages.
     * @param message Article message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Article message, length delimited. Does not implicitly {@link Article.verify|verify} messages.
     * @param message Article message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Article message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Article;

    /**
     * Decodes an Article message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Article;

    /**
     * Verifies an Article message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Article message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Article
     */
    public static fromObject(object: { [k: string]: any }): Article;

    /**
     * Creates a plain object from an Article message. Also converts values to other types if specified.
     * @param message Article
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Article, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Article to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GetArticleByIdRequest. */
export interface IGetArticleByIdRequest {

    /** GetArticleByIdRequest id */
    id?: (string|null);
}

/** Represents a GetArticleByIdRequest. */
export class GetArticleByIdRequest implements IGetArticleByIdRequest {

    /**
     * Constructs a new GetArticleByIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetArticleByIdRequest);

    /** GetArticleByIdRequest id. */
    public id: string;

    /**
     * Creates a new GetArticleByIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetArticleByIdRequest instance
     */
    public static create(properties?: IGetArticleByIdRequest): GetArticleByIdRequest;

    /**
     * Encodes the specified GetArticleByIdRequest message. Does not implicitly {@link GetArticleByIdRequest.verify|verify} messages.
     * @param message GetArticleByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetArticleByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetArticleByIdRequest message, length delimited. Does not implicitly {@link GetArticleByIdRequest.verify|verify} messages.
     * @param message GetArticleByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetArticleByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetArticleByIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetArticleByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetArticleByIdRequest;

    /**
     * Decodes a GetArticleByIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetArticleByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetArticleByIdRequest;

    /**
     * Verifies a GetArticleByIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetArticleByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetArticleByIdRequest
     */
    public static fromObject(object: { [k: string]: any }): GetArticleByIdRequest;

    /**
     * Creates a plain object from a GetArticleByIdRequest message. Also converts values to other types if specified.
     * @param message GetArticleByIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetArticleByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetArticleByIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CreateArticleRequest. */
export interface ICreateArticleRequest {

    /** CreateArticleRequest authorId */
    authorId?: (string|null);

    /** CreateArticleRequest category */
    category?: (string|null);

    /** CreateArticleRequest markdown */
    markdown?: (string|null);
}

/** Represents a CreateArticleRequest. */
export class CreateArticleRequest implements ICreateArticleRequest {

    /**
     * Constructs a new CreateArticleRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICreateArticleRequest);

    /** CreateArticleRequest authorId. */
    public authorId: string;

    /** CreateArticleRequest category. */
    public category: string;

    /** CreateArticleRequest markdown. */
    public markdown: string;

    /**
     * Creates a new CreateArticleRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateArticleRequest instance
     */
    public static create(properties?: ICreateArticleRequest): CreateArticleRequest;

    /**
     * Encodes the specified CreateArticleRequest message. Does not implicitly {@link CreateArticleRequest.verify|verify} messages.
     * @param message CreateArticleRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICreateArticleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CreateArticleRequest message, length delimited. Does not implicitly {@link CreateArticleRequest.verify|verify} messages.
     * @param message CreateArticleRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICreateArticleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateArticleRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateArticleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CreateArticleRequest;

    /**
     * Decodes a CreateArticleRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateArticleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CreateArticleRequest;

    /**
     * Verifies a CreateArticleRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CreateArticleRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateArticleRequest
     */
    public static fromObject(object: { [k: string]: any }): CreateArticleRequest;

    /**
     * Creates a plain object from a CreateArticleRequest message. Also converts values to other types if specified.
     * @param message CreateArticleRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CreateArticleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CreateArticleRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ArticleResponse. */
export interface IArticleResponse {

    /** ArticleResponse article */
    article?: (IArticle|null);
}

/** Represents an ArticleResponse. */
export class ArticleResponse implements IArticleResponse {

    /**
     * Constructs a new ArticleResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArticleResponse);

    /** ArticleResponse article. */
    public article?: (IArticle|null);

    /**
     * Creates a new ArticleResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ArticleResponse instance
     */
    public static create(properties?: IArticleResponse): ArticleResponse;

    /**
     * Encodes the specified ArticleResponse message. Does not implicitly {@link ArticleResponse.verify|verify} messages.
     * @param message ArticleResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArticleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ArticleResponse message, length delimited. Does not implicitly {@link ArticleResponse.verify|verify} messages.
     * @param message ArticleResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IArticleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ArticleResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ArticleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ArticleResponse;

    /**
     * Decodes an ArticleResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ArticleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ArticleResponse;

    /**
     * Verifies an ArticleResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ArticleResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ArticleResponse
     */
    public static fromObject(object: { [k: string]: any }): ArticleResponse;

    /**
     * Creates a plain object from an ArticleResponse message. Also converts values to other types if specified.
     * @param message ArticleResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ArticleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ArticleResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an ArticleService */
export class ArticleService extends $protobuf.rpc.Service {

    /**
     * Constructs a new ArticleService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new ArticleService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ArticleService;

    /**
     * Calls GetArticleById.
     * @param request GetArticleByIdRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ArticleResponse
     */
    public getArticleById(request: IGetArticleByIdRequest, callback: ArticleService.GetArticleByIdCallback): void;

    /**
     * Calls GetArticleById.
     * @param request GetArticleByIdRequest message or plain object
     * @returns Promise
     */
    public getArticleById(request: IGetArticleByIdRequest): Promise<ArticleResponse>;

    /**
     * Calls CreateArticle.
     * @param request CreateArticleRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ArticleResponse
     */
    public createArticle(request: ICreateArticleRequest, callback: ArticleService.CreateArticleCallback): void;

    /**
     * Calls CreateArticle.
     * @param request CreateArticleRequest message or plain object
     * @returns Promise
     */
    public createArticle(request: ICreateArticleRequest): Promise<ArticleResponse>;
}

export namespace ArticleService {

    /**
     * Callback as used by {@link ArticleService#getArticleById}.
     * @param error Error, if any
     * @param [response] ArticleResponse
     */
    type GetArticleByIdCallback = (error: (Error|null), response?: ArticleResponse) => void;

    /**
     * Callback as used by {@link ArticleService#createArticle}.
     * @param error Error, if any
     * @param [response] ArticleResponse
     */
    type CreateArticleCallback = (error: (Error|null), response?: ArticleResponse) => void;
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
