import {PostControl} from './constants';
import TPostControl from '@utils/react/types/TPostControl';

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

export {clickOnPostControl};