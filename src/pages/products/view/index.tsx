import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

interface Item {
  title: string;
  description: string;
  images: { fields: any }[];
}

function ProductPage(props: Item) {
  const photos = props.images.map(image => image.fields.file.url);

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Carousel width="600px" showArrows={true}>
        {photos.map((image, key) => (
          <div key={key}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductPage;
