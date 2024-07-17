const User = require('./User');
const UserFollow = require('./UserFollow');
const UserLock = require('./UserLock');
const Tweet = require('./Tweet');
const UserLikeTweet = require('./UserLikeTweet');
const TweetLock = require('./TweetLock');
const Quote = require('./Quote');
const Repost = require('./Repost');
const Tag = require('./Tag');
const Media = require('./Media');

// User relations
User.hasMany(UserFollow, { as: 'following', foreignKey: 'follower_id' });
User.hasMany(UserFollow, { as: 'followers', foreignKey: 'followed_id' });
User.hasMany(UserLock, { as: 'locking', foreignKey: 'locker_id' });
User.hasMany(UserLock, { as: 'lockers', foreignKey: 'locked_id' });
User.hasMany(UserLikeTweet, { as: 'userlikeds', foreignKey: 'user_id' });
User.hasMany(Tweet, { as: 'tweet', foreignKey: 'user_id' });
User.hasMany(TweetLock, { as: 'tweetlocking', foreignKey: 'locker_id' });

// Tweet relations
Tweet.hasMany(UserLikeTweet, { as: 'tweetlikeds', foreignKey: 'tweet_id' });
Tweet.belongsTo(Tweet, { as: 'tweetParent', foreignKey: 'parent_id' });
Tweet.hasMany(Tweet, { as: 'responses', foreignKey: 'parent_id' });
Tweet.hasMany(Quote, { as: 'quotes', foreignKey: 'tweetQuoted_id' });
Tweet.hasMany(Repost, { as: 'reposts', foreignKey: 'tweetReposted_id' });
Tweet.hasMany(Media, { as: 'medias', foreignKey: 'tweet_id' });
Tweet.belongsToMany(Tag, { through: 'TweetTags', as: 'tags' });
Tweet.hasMany(TweetLock, { as: 'lockers', foreignKey: 'tweetlocked_id' });

// Media relations
Media.belongsTo(Tweet, { as: 'tweet', foreignKey: 'tweet_id' });

// Tag relations
Tag.belongsToMany(Tweet, { through: 'TweetTags', as: 'tweets' });

module.exports = {
    User,
    UserFollow,
    UserLock,
    Tweet,
    UserLikeTweet,
    TweetLock,
    Quote,
    Repost,
    Tag,
    Media,
};
