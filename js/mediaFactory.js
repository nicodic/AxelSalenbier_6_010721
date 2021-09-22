import MediaVideo from './videoFactory';
import MediaPhoto from './photoFactory';

// Create media according to his type
export default class MediaFactory {
  constructor(type, data, handleLikeChange) {
    switch (type) {
      case 'photo':
        return new MediaPhoto(data, handleLikeChange);
      case 'video':
        return new MediaVideo(data, handleLikeChange);
      default:
        throw new Error('Entrez un parametre valide');
    }
  }
}
