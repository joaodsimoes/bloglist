const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return {};
  }
  const dict = { i: -1 };// used as initial value, there can never be a user named i.

  const reducer = (topAuthor, current) => {
    dict[current.author] = dict[current.author]
      ? dict[current.author] + current.likes
      : current.likes;

    if (dict[current.author] > dict[topAuthor]) {
      return current.author;
    }
    return topAuthor;
  };

  const mostAuthor = blogs.reduce(reducer, 'i');
  return { author: mostAuthor, likes: dict[mostAuthor] };
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return {};
  }
  const dict = { i: -1 };// used as initial value, there can never be a user named i.

  const reducer = (topAuthor, current) => {
    dict[current.author] = dict[current.author]
      ? dict[current.author] + 1
      : 1;

    if (dict[current.author] > dict[topAuthor]) {
      return current.author;
    }
    return topAuthor;
  };

  const mostAuthor = blogs.reduce(reducer, 'i');
  return { author: mostAuthor, blogs: dict[mostAuthor] };
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return {};
  }
  const reducer = (fav, blog) => (blog.likes > fav.likes ? blog : fav);
  const favorite = blogs.reduce(reducer, { likes: 0 });
  const formattedFavorite = (({ title, author, likes }) => ({ title, author, likes }))(favorite);
  return formattedFavorite;
};

const totalLikes = (blogs) => {
  const reducer = (sum, item) => sum + item.likes;
  return blogs.reduce(reducer, 0);
};

const dummy = (blogs) => {
  // eslint-disable-next-line no-unused-vars
  const b = blogs;
  return 1;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
