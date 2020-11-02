// functional components: for when you don't need state.
// Think of this as just the render() method.

const Gallery = (props) => {
  return (
    <div>
      { props.images.map( (url) => <img src={ url } key={ url } alt="Copyright Flickr" /> ) }
    </div>
  );
};

export default Gallery;
