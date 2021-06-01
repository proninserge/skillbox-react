import {PostControl} from './constants';
import TPostControl from '@utils/react/types/TPostControl';
import {IPostsDataKeyData, IPostsData} from '@utils/react/hooks/usePostsData';
import moment from 'moment';

const clickOnPostControl = (controlId: TPostControl, postId: string | undefined) : void => {
    switch (controlId) {
      case PostControl.COMMENTS:
        console.log(`${controlId} for post ID ${postId}`);
        break;
      case PostControl.SHARE:
        console.log(`${controlId} for post ID ${postId}`);
        break;
      case PostControl.HIDE:
        console.log(`${controlId} for post ID ${postId}`);
        break;
      case PostControl.SAVE:
        console.log(`${controlId} for post ID ${postId}`);
        break;
      case PostControl.COMPLAIN:
        console.log(`${controlId} for post ID ${postId}`);
        break;
      case PostControl.CLOSE:
        console.log(`${controlId} for post ID ${postId}`);
        break;
      default:
        console.log(postId);
    }
  };

  const toReadableDate = (date: string) => moment(moment.unix(Number(date))).fromNow();

  const getPostRating = (ups: string, downs: string) => Number(ups) - Number(downs);

  const getPosts = (postsArray: Array<IPostsData>) : Array<IPostsDataKeyData> => postsArray.map((post: IPostsData) => post.data);

export {clickOnPostControl, toReadableDate, getPostRating, getPosts};