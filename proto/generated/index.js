/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Article = (function() {

    /**
     * Properties of an Article.
     * @exports IArticle
     * @interface IArticle
     * @property {string|null} [id] Article id
     * @property {string|null} [authorId] Article authorId
     * @property {string|null} [category] Article category
     * @property {string|null} [markdown] Article markdown
     * @property {google.protobuf.ITimestamp|null} [createdAt] Article createdAt
     * @property {google.protobuf.ITimestamp|null} [updatedAt] Article updatedAt
     */

    /**
     * Constructs a new Article.
     * @exports Article
     * @classdesc Represents an Article.
     * @implements IArticle
     * @constructor
     * @param {IArticle=} [properties] Properties to set
     */
    function Article(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Article id.
     * @member {string} id
     * @memberof Article
     * @instance
     */
    Article.prototype.id = "";

    /**
     * Article authorId.
     * @member {string} authorId
     * @memberof Article
     * @instance
     */
    Article.prototype.authorId = "";

    /**
     * Article category.
     * @member {string} category
     * @memberof Article
     * @instance
     */
    Article.prototype.category = "";

    /**
     * Article markdown.
     * @member {string} markdown
     * @memberof Article
     * @instance
     */
    Article.prototype.markdown = "";

    /**
     * Article createdAt.
     * @member {google.protobuf.ITimestamp|null|undefined} createdAt
     * @memberof Article
     * @instance
     */
    Article.prototype.createdAt = null;

    /**
     * Article updatedAt.
     * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
     * @memberof Article
     * @instance
     */
    Article.prototype.updatedAt = null;

    /**
     * Creates a new Article instance using the specified properties.
     * @function create
     * @memberof Article
     * @static
     * @param {IArticle=} [properties] Properties to set
     * @returns {Article} Article instance
     */
    Article.create = function create(properties) {
        return new Article(properties);
    };

    /**
     * Encodes the specified Article message. Does not implicitly {@link Article.verify|verify} messages.
     * @function encode
     * @memberof Article
     * @static
     * @param {IArticle} message Article message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Article.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.authorId != null && Object.hasOwnProperty.call(message, "authorId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.authorId);
        if (message.category != null && Object.hasOwnProperty.call(message, "category"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.category);
        if (message.markdown != null && Object.hasOwnProperty.call(message, "markdown"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.markdown);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
            $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Article message, length delimited. Does not implicitly {@link Article.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Article
     * @static
     * @param {IArticle} message Article message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Article.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Article message from the specified reader or buffer.
     * @function decode
     * @memberof Article
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Article} Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Article.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Article();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.authorId = reader.string();
                break;
            case 3:
                message.category = reader.string();
                break;
            case 4:
                message.markdown = reader.string();
                break;
            case 5:
                message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 6:
                message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Article message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Article
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Article} Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Article.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Article message.
     * @function verify
     * @memberof Article
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Article.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.authorId != null && message.hasOwnProperty("authorId"))
            if (!$util.isString(message.authorId))
                return "authorId: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.markdown != null && message.hasOwnProperty("markdown"))
            if (!$util.isString(message.markdown))
                return "markdown: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
            var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
            if (error)
                return "createdAt." + error;
        }
        if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
            var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
            if (error)
                return "updatedAt." + error;
        }
        return null;
    };

    /**
     * Creates an Article message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Article
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Article} Article
     */
    Article.fromObject = function fromObject(object) {
        if (object instanceof $root.Article)
            return object;
        var message = new $root.Article();
        if (object.id != null)
            message.id = String(object.id);
        if (object.authorId != null)
            message.authorId = String(object.authorId);
        if (object.category != null)
            message.category = String(object.category);
        if (object.markdown != null)
            message.markdown = String(object.markdown);
        if (object.createdAt != null) {
            if (typeof object.createdAt !== "object")
                throw TypeError(".Article.createdAt: object expected");
            message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
        }
        if (object.updatedAt != null) {
            if (typeof object.updatedAt !== "object")
                throw TypeError(".Article.updatedAt: object expected");
            message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
        }
        return message;
    };

    /**
     * Creates a plain object from an Article message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Article
     * @static
     * @param {Article} message Article
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Article.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.authorId = "";
            object.category = "";
            object.markdown = "";
            object.createdAt = null;
            object.updatedAt = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.authorId != null && message.hasOwnProperty("authorId"))
            object.authorId = message.authorId;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.markdown != null && message.hasOwnProperty("markdown"))
            object.markdown = message.markdown;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
        if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
            object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
        return object;
    };

    /**
     * Converts this Article to JSON.
     * @function toJSON
     * @memberof Article
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Article.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Article;
})();

$root.GetArticleByIdRequest = (function() {

    /**
     * Properties of a GetArticleByIdRequest.
     * @exports IGetArticleByIdRequest
     * @interface IGetArticleByIdRequest
     * @property {string|null} [id] GetArticleByIdRequest id
     */

    /**
     * Constructs a new GetArticleByIdRequest.
     * @exports GetArticleByIdRequest
     * @classdesc Represents a GetArticleByIdRequest.
     * @implements IGetArticleByIdRequest
     * @constructor
     * @param {IGetArticleByIdRequest=} [properties] Properties to set
     */
    function GetArticleByIdRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetArticleByIdRequest id.
     * @member {string} id
     * @memberof GetArticleByIdRequest
     * @instance
     */
    GetArticleByIdRequest.prototype.id = "";

    /**
     * Creates a new GetArticleByIdRequest instance using the specified properties.
     * @function create
     * @memberof GetArticleByIdRequest
     * @static
     * @param {IGetArticleByIdRequest=} [properties] Properties to set
     * @returns {GetArticleByIdRequest} GetArticleByIdRequest instance
     */
    GetArticleByIdRequest.create = function create(properties) {
        return new GetArticleByIdRequest(properties);
    };

    /**
     * Encodes the specified GetArticleByIdRequest message. Does not implicitly {@link GetArticleByIdRequest.verify|verify} messages.
     * @function encode
     * @memberof GetArticleByIdRequest
     * @static
     * @param {IGetArticleByIdRequest} message GetArticleByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetArticleByIdRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        return writer;
    };

    /**
     * Encodes the specified GetArticleByIdRequest message, length delimited. Does not implicitly {@link GetArticleByIdRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetArticleByIdRequest
     * @static
     * @param {IGetArticleByIdRequest} message GetArticleByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetArticleByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetArticleByIdRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetArticleByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetArticleByIdRequest} GetArticleByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetArticleByIdRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetArticleByIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetArticleByIdRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetArticleByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetArticleByIdRequest} GetArticleByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetArticleByIdRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetArticleByIdRequest message.
     * @function verify
     * @memberof GetArticleByIdRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetArticleByIdRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        return null;
    };

    /**
     * Creates a GetArticleByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetArticleByIdRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetArticleByIdRequest} GetArticleByIdRequest
     */
    GetArticleByIdRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetArticleByIdRequest)
            return object;
        var message = new $root.GetArticleByIdRequest();
        if (object.id != null)
            message.id = String(object.id);
        return message;
    };

    /**
     * Creates a plain object from a GetArticleByIdRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetArticleByIdRequest
     * @static
     * @param {GetArticleByIdRequest} message GetArticleByIdRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetArticleByIdRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this GetArticleByIdRequest to JSON.
     * @function toJSON
     * @memberof GetArticleByIdRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetArticleByIdRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetArticleByIdRequest;
})();

$root.CreateArticleRequest = (function() {

    /**
     * Properties of a CreateArticleRequest.
     * @exports ICreateArticleRequest
     * @interface ICreateArticleRequest
     * @property {string|null} [authorId] CreateArticleRequest authorId
     * @property {string|null} [category] CreateArticleRequest category
     * @property {string|null} [markdown] CreateArticleRequest markdown
     */

    /**
     * Constructs a new CreateArticleRequest.
     * @exports CreateArticleRequest
     * @classdesc Represents a CreateArticleRequest.
     * @implements ICreateArticleRequest
     * @constructor
     * @param {ICreateArticleRequest=} [properties] Properties to set
     */
    function CreateArticleRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CreateArticleRequest authorId.
     * @member {string} authorId
     * @memberof CreateArticleRequest
     * @instance
     */
    CreateArticleRequest.prototype.authorId = "";

    /**
     * CreateArticleRequest category.
     * @member {string} category
     * @memberof CreateArticleRequest
     * @instance
     */
    CreateArticleRequest.prototype.category = "";

    /**
     * CreateArticleRequest markdown.
     * @member {string} markdown
     * @memberof CreateArticleRequest
     * @instance
     */
    CreateArticleRequest.prototype.markdown = "";

    /**
     * Creates a new CreateArticleRequest instance using the specified properties.
     * @function create
     * @memberof CreateArticleRequest
     * @static
     * @param {ICreateArticleRequest=} [properties] Properties to set
     * @returns {CreateArticleRequest} CreateArticleRequest instance
     */
    CreateArticleRequest.create = function create(properties) {
        return new CreateArticleRequest(properties);
    };

    /**
     * Encodes the specified CreateArticleRequest message. Does not implicitly {@link CreateArticleRequest.verify|verify} messages.
     * @function encode
     * @memberof CreateArticleRequest
     * @static
     * @param {ICreateArticleRequest} message CreateArticleRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateArticleRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.authorId != null && Object.hasOwnProperty.call(message, "authorId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorId);
        if (message.category != null && Object.hasOwnProperty.call(message, "category"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.category);
        if (message.markdown != null && Object.hasOwnProperty.call(message, "markdown"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.markdown);
        return writer;
    };

    /**
     * Encodes the specified CreateArticleRequest message, length delimited. Does not implicitly {@link CreateArticleRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CreateArticleRequest
     * @static
     * @param {ICreateArticleRequest} message CreateArticleRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CreateArticleRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CreateArticleRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CreateArticleRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CreateArticleRequest} CreateArticleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateArticleRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CreateArticleRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.authorId = reader.string();
                break;
            case 2:
                message.category = reader.string();
                break;
            case 3:
                message.markdown = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CreateArticleRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CreateArticleRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CreateArticleRequest} CreateArticleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CreateArticleRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CreateArticleRequest message.
     * @function verify
     * @memberof CreateArticleRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CreateArticleRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.authorId != null && message.hasOwnProperty("authorId"))
            if (!$util.isString(message.authorId))
                return "authorId: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isString(message.category))
                return "category: string expected";
        if (message.markdown != null && message.hasOwnProperty("markdown"))
            if (!$util.isString(message.markdown))
                return "markdown: string expected";
        return null;
    };

    /**
     * Creates a CreateArticleRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CreateArticleRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CreateArticleRequest} CreateArticleRequest
     */
    CreateArticleRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CreateArticleRequest)
            return object;
        var message = new $root.CreateArticleRequest();
        if (object.authorId != null)
            message.authorId = String(object.authorId);
        if (object.category != null)
            message.category = String(object.category);
        if (object.markdown != null)
            message.markdown = String(object.markdown);
        return message;
    };

    /**
     * Creates a plain object from a CreateArticleRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CreateArticleRequest
     * @static
     * @param {CreateArticleRequest} message CreateArticleRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CreateArticleRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.authorId = "";
            object.category = "";
            object.markdown = "";
        }
        if (message.authorId != null && message.hasOwnProperty("authorId"))
            object.authorId = message.authorId;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.markdown != null && message.hasOwnProperty("markdown"))
            object.markdown = message.markdown;
        return object;
    };

    /**
     * Converts this CreateArticleRequest to JSON.
     * @function toJSON
     * @memberof CreateArticleRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CreateArticleRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CreateArticleRequest;
})();

$root.ArticleResponse = (function() {

    /**
     * Properties of an ArticleResponse.
     * @exports IArticleResponse
     * @interface IArticleResponse
     * @property {IArticle|null} [article] ArticleResponse article
     */

    /**
     * Constructs a new ArticleResponse.
     * @exports ArticleResponse
     * @classdesc Represents an ArticleResponse.
     * @implements IArticleResponse
     * @constructor
     * @param {IArticleResponse=} [properties] Properties to set
     */
    function ArticleResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ArticleResponse article.
     * @member {IArticle|null|undefined} article
     * @memberof ArticleResponse
     * @instance
     */
    ArticleResponse.prototype.article = null;

    /**
     * Creates a new ArticleResponse instance using the specified properties.
     * @function create
     * @memberof ArticleResponse
     * @static
     * @param {IArticleResponse=} [properties] Properties to set
     * @returns {ArticleResponse} ArticleResponse instance
     */
    ArticleResponse.create = function create(properties) {
        return new ArticleResponse(properties);
    };

    /**
     * Encodes the specified ArticleResponse message. Does not implicitly {@link ArticleResponse.verify|verify} messages.
     * @function encode
     * @memberof ArticleResponse
     * @static
     * @param {IArticleResponse} message ArticleResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ArticleResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.article != null && Object.hasOwnProperty.call(message, "article"))
            $root.Article.encode(message.article, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ArticleResponse message, length delimited. Does not implicitly {@link ArticleResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ArticleResponse
     * @static
     * @param {IArticleResponse} message ArticleResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ArticleResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ArticleResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ArticleResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ArticleResponse} ArticleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ArticleResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ArticleResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.article = $root.Article.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ArticleResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ArticleResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ArticleResponse} ArticleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ArticleResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ArticleResponse message.
     * @function verify
     * @memberof ArticleResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ArticleResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.article != null && message.hasOwnProperty("article")) {
            var error = $root.Article.verify(message.article);
            if (error)
                return "article." + error;
        }
        return null;
    };

    /**
     * Creates an ArticleResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ArticleResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ArticleResponse} ArticleResponse
     */
    ArticleResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ArticleResponse)
            return object;
        var message = new $root.ArticleResponse();
        if (object.article != null) {
            if (typeof object.article !== "object")
                throw TypeError(".ArticleResponse.article: object expected");
            message.article = $root.Article.fromObject(object.article);
        }
        return message;
    };

    /**
     * Creates a plain object from an ArticleResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ArticleResponse
     * @static
     * @param {ArticleResponse} message ArticleResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ArticleResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.article = null;
        if (message.article != null && message.hasOwnProperty("article"))
            object.article = $root.Article.toObject(message.article, options);
        return object;
    };

    /**
     * Converts this ArticleResponse to JSON.
     * @function toJSON
     * @memberof ArticleResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ArticleResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ArticleResponse;
})();

$root.ArticleService = (function() {

    /**
     * Constructs a new ArticleService service.
     * @exports ArticleService
     * @classdesc Represents an ArticleService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function ArticleService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (ArticleService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ArticleService;

    /**
     * Creates new ArticleService service using the specified rpc implementation.
     * @function create
     * @memberof ArticleService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {ArticleService} RPC service. Useful where requests and/or responses are streamed.
     */
    ArticleService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link ArticleService#getArticleById}.
     * @memberof ArticleService
     * @typedef GetArticleByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ArticleResponse} [response] ArticleResponse
     */

    /**
     * Calls GetArticleById.
     * @function getArticleById
     * @memberof ArticleService
     * @instance
     * @param {IGetArticleByIdRequest} request GetArticleByIdRequest message or plain object
     * @param {ArticleService.GetArticleByIdCallback} callback Node-style callback called with the error, if any, and ArticleResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ArticleService.prototype.getArticleById = function getArticleById(request, callback) {
        return this.rpcCall(getArticleById, $root.GetArticleByIdRequest, $root.ArticleResponse, request, callback);
    }, "name", { value: "GetArticleById" });

    /**
     * Calls GetArticleById.
     * @function getArticleById
     * @memberof ArticleService
     * @instance
     * @param {IGetArticleByIdRequest} request GetArticleByIdRequest message or plain object
     * @returns {Promise<ArticleResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ArticleService#createArticle}.
     * @memberof ArticleService
     * @typedef CreateArticleCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ArticleResponse} [response] ArticleResponse
     */

    /**
     * Calls CreateArticle.
     * @function createArticle
     * @memberof ArticleService
     * @instance
     * @param {ICreateArticleRequest} request CreateArticleRequest message or plain object
     * @param {ArticleService.CreateArticleCallback} callback Node-style callback called with the error, if any, and ArticleResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ArticleService.prototype.createArticle = function createArticle(request, callback) {
        return this.rpcCall(createArticle, $root.CreateArticleRequest, $root.ArticleResponse, request, callback);
    }, "name", { value: "CreateArticle" });

    /**
     * Calls CreateArticle.
     * @function createArticle
     * @memberof ArticleService
     * @instance
     * @param {ICreateArticleRequest} request CreateArticleRequest message or plain object
     * @returns {Promise<ArticleResponse>} Promise
     * @variation 2
     */

    return ArticleService;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
