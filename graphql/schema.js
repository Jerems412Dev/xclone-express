const { gql } = require('apollo-server');

const typeDefs = gql`
    type Media {
        idMedia: ID!
        type: MediaType!
        link: String!
        tweet: Tweet
    }

    enum MediaType {
        VIDEO
        PICTURE
    }

    type Quote {
        idQuote: ID!
        tweetQuoted: Tweet
    }

    type Repost {
        idRepost: ID!
        tweetReposted: Tweet
    }

    type Tag {
        idTag: ID!
        content: String!
        tweets: [Tweet]
    }

    type Tweet {
        idTweet: ID!
        content: String!
        publishDate: String!
        autor: User
        tweetlikeds: [UserLikeTweet]
        tweetParent: Tweet
        responses: [Tweet]
        quotes: [Quote]
        reposts: [Repost]
        medias: [Media]
        tags: [Tag]
        lockers: [TweetLock]
    }

    type TweetLock {
        id: ID!
        tweetlocker: User
        locked: Tweet
    }

    type User {
        idUser: ID!
        location: String
        gender: String
        birth: String
        website: String
        name: String!
        bio: String
        profilePicture: String
        coverPicture: String
        username: String!
        password: String!
        following: [UserFollow]
        followers: [UserFollow]
        locking: [UserLock]
        lockers: [UserLock]
        userlikeds: [UserLikeTweet]
        tweet: [Tweet]
        tweetlocking: [TweetLock]
    }

    type UserFollow {
        id: ID!
        follower: User
        followed: User
    }

    type UserLikeTweet {
        idLike: ID!
        userliked: User
        tweetliked: Tweet
    }

    type UserLock {
        id: ID!
        locker: User
        locked: User
    }

    #input type

    input LoginInput {
        username: String
        password: String
    }

    input RegisterInput {
        idUser: ID!
        location: String
        gender: String
        birth: String
        website: String
        name: String
        bio: String
        profilePicture: String
        coverPicture: String
        username: String
        password: String
    }

    input MediaInput {
        idMedia: ID!
        type: MediaType!
        link: String!
        tweet: TweetInput
    }

    input QuoteInput {
        idQuote: ID!
        tweetQuoted: TweetInput
    }

    input RepostInput {
        idRepost: ID!
        tweetReposted: TweetInput
    }

    input TagInput {
        idTag: ID!
        content: String!
        tweets: [TweetInput]
    }

    input TweetInput {
        idTweet: ID!
        content: String!
        publishDate: String!
        autor: UserInput
        tweetlikeds: [UserLikeTweetInput]
        tweetParent: TweetInput
        responses: [TweetInput]
        quotes: [QuoteInput]
        reposts: [RepostInput]
        medias: [MediaInput]
        tags: [TagInput]
        lockers: [TweetLockInput]
    }

    input TweetLockInput {
        id: ID!
        tweetlocker: UserInput
        locked: TweetInput
    }

    input UserInput {
        idUser: ID!
        location: String
        gender: String
        birth: String
        website: String
        name: String!
        bio: String
        profilePicture: String
        coverPicture: String
        username: String!
        password: String!
        following: [UserFollowInput]
        followers: [UserFollowInput]
        locking: [UserLockInput]
        lockers: [UserLockInput]
        userlikeds: [UserLikeTweetInput]
        tweet: [TweetInput]
        tweetlocking: [TweetLockInput]
    }

    input UserFollowInput {
        id: ID!
        follower: UserInput
        followed: UserInput
    }

    input UserLikeTweetInput {
        idLike: ID!
        userliked: UserInput
        tweetliked: TweetInput
    }

    input UserLockInput {
        id: ID!
        locker: UserInput
        locked: UserInput
    }

    type Query {
        findAllMedia: [Media]
        findAllQuote: [Quote]
        findAllRepost: [Repost]
        findAllTag: [Tag]
        findAllTweet: [Tweet]
        findAllTweetLock: [TweetLock]
        findAllUser: [User]
        findAllUserFollow: [UserFollow]
        findAllUserLikeTweet: [UserLikeTweet]
        findAllUserLock: [UserLock]

        findMediaById(id: ID!): Media
        findQuoteById(id: ID!): Quote
        findRepostById(id: ID!): Repost
        findTagById(id: ID!): Tag
        findTweetById(id: ID!): Tweet
        findTweetLockById(id: ID!): TweetLock
        findUserById(id: ID!): User
        findUserFollowById(id: ID!): UserFollow
        findUserLikeTweetById(id: ID!): UserLikeTweet
        findUserLockById(id: ID!): UserLock
    }

    type Mutation {
        createMedia(media: MediaInput!): Boolean
        createQuote(quote: QuoteInput!): Boolean
        createRepost(repost: RepostInput!): Boolean
        createTag(tag: TagInput!): Boolean
        createTweet(tweet: TweetInput!): Boolean
        createTweetLock(tweetlock: TweetLockInput!): Boolean
        createUser(user: UserInput!): Boolean
        createUserFollow(userfollow: UserFollowInput!): Boolean
        createUserLikeTweet(userliketweet: UserLikeTweetInput!): Boolean
        createUserLock(userlock: UserLockInput!): Boolean
        register(register: RegisterInput!): String
        login(login: LoginInput!): String
    }
`;

module.exports = typeDefs;
