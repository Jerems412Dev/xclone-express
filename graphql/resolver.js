const {
    User,
    UserFollow,
    UserLock,
    Tweet,
    UserLikeTweet,
    TweetLock,
    Quote,
    Repost,
    Tag,
    Media
} = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
    Query: {
        findAllMedia: () => Media.findAll(),
        findAllQuote: () => Quote.findAll(),
        findAllRepost: () => Repost.findAll(),
        findAllTag: () => Tag.findAll(),
        findAllTweet: () => Tweet.findAll(),
        findAllTweetLock: () => TweetLock.findAll(),
        findAllUser: () => User.findAll(),
        findAllUserFollow: () => UserFollow.findAll(),
        findAllUserLikeTweet: () => UserLikeTweet.findAll(),
        findAllUserLock: () => UserLock.findAll(),

        findMediaById: (_, { id }) => Media.findByPk(id),
        findQuoteById: (_, { id }) => Quote.findByPk(id),
        findRepostById: (_, { id }) => Repost.findByPk(id),
        findTagById: (_, { id }) => Tag.findByPk(id),
        findTweetById: (_, { id }) => Tweet.findByPk(id),
        findTweetLockById: (_, { id }) => TweetLock.findByPk(id),
        findUserById: (_, { id }) => User.findByPk(id),
        findUserFollowById: (_, { id }) => UserFollow.findByPk(id),
        findUserLikeTweetById: (_, { id }) => UserLikeTweet.findByPk(id),
        findUserLockById: (_, { id }) => UserLock.findByPk(id),
    },
    Mutation: {
        createMedia: async (_, { media }) => {
            await Media.create(media);
            return true;
        },
        createQuote: async (_, { quote }) => {
            await Quote.create(quote);
            return true;
        },
        createRepost: async (_, { repost }) => {
            await Repost.create(repost);
            return true;
        },
        createTag: async (_, { tag }) => {
            await Tag.create(tag);
            return true;
        },
        createTweet: async (_, { tweet }) => {
            await Tweet.create(tweet);
            return true;
        },
        createTweetLock: async (_, { tweetlock }) => {
            await TweetLock.create(tweetlock);
            return true;
        },
        createUser: async (_, { user }) => {
            await User.create(user);
            return true;
        },
        createUserFollow: async (_, { userfollow }) => {
            await UserFollow.create(userfollow);
            return true;
        },
        createUserLikeTweet: async (_, { userliketweet }) => {
            await UserLikeTweet.create(userliketweet);
            return true;
        },
        createUserLock: async (_, { userlock }) => {
            await UserLock.create(userlock);
            return true;
        },

        async register(_, { register }) {
            const {
                idUser,
                location,
                gender,
                birth,
                website,
                name,
                bio,
                profilePicture,
                coverPicture,
                username,
                password
            } = register;
            const userExists = await User.findOne({ where: { username } });
            if (userExists) {
                throw new Error('Username already exists');
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = await User.create({
                idUser,
                location,
                gender,
                birth,
                website,
                name,
                bio,
                profilePicture,
                coverPicture,
                username,
                password: hashedPassword
            });
            return 'Registration successful';
        },

        async login(_, { login }) {
            const { username, password } = login;
            const user = await User.findOne({ where: { username } });
            if (!user) {
                throw new Error('User not found');
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('Incorrect password');
            }
            const token = jwt.sign({ userId: user.idUser }, '59d407208c0bfb4fc52780506cdecd71cbde23b4dd622bc80d84b66e9efc4dd2', { expiresIn: '1h' });
            return token;
        }
    }
};

module.exports = resolvers;
