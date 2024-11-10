import React, { useEffect, useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import Comments from './Comments';

export default function ViewBlog() {
  const [topPercentage, setTopPercentage] = useState(0);
  const [bottomPercentage, setBottomPercentage] = useState(0);
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    function updateScroller() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100);
      const bottom = Math.round(
        ((scrollY + viewportHeight - documentHeight) / (documentHeight - viewportHeight)) * 100
      );

      setTopPercentage(top);
      setBottomPercentage(bottom);

      if (viewportHeight + window.pageYOffset > 1.2 * viewportHeight) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    }

    window.addEventListener("scroll", updateScroller);
    window.addEventListener("resize", updateScroller);
    updateScroller(); // Initial call to set values on load

    return () => {
      window.removeEventListener("scroll", updateScroller);
      window.removeEventListener("resize", updateScroller);
    };
  }, []);

  return (
    <div className="singleBlogBody">
      <div className="ruler">
        <div className="mask one">{topPercentage}%</div>
        <div className="mask two">{bottomPercentage}%</div>
        <div className="lines">
          {[...Array(25)].map((_, i) => <span key={i} />)}
        </div>
      </div>
      <Link to={'/'} className='homeBtn'> <i className="fa fa-home"></i></Link>
      <main id="main" className='py-3 px-2'>
        <h1 className="h1">Title</h1>
        <div className="d-flex justify-content-between w-100 mb-2">
          <span className="date fw-bold fs-4">Date : 2 Nov 2024</span>
          <span className="author fw-bold fs-4">Author : Syed Ali Moiz</span>
        </div>
        <p className="m-0 p-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque architecto nobis facere fugit eos impedit quisquam, deserunt repudiandae dolores harum. Sed perferendis quidem, dicta quos soluta quod voluptates atque consequatur sint, repellat unde, maxime voluptatum veritatis architecto placeat labore. Aliquid temporibus voluptate, commodi possimus tenetur facere a praesentium. Quam delectus laborum unde quod laboriosam dolorum neque cupiditate! Officia laudantium magni iste vel, magnam cumque, exercitationem eaque inventore, debitis illum rerum dolorum corporis voluptas! Commodi ad architecto unde nobis quisquam doloremque distinctio fuga veniam neque quis consectetur porro quaerat facilis voluptas assumenda quibusdam ipsum, minus praesentium? Explicabo similique incidunt quo ea delectus porro exercitationem et, voluptatibus cupiditate impedit iusto soluta vero voluptates aut animi reprehenderit quae dolor asperiores beatae possimus laborum excepturi! Laudantium cupiditate, necessitatibus nostrum est ullam suscipit repudiandae, itaque quod cumque nam vero enim sapiente, minus unde facilis quisquam doloribus doloremque! Vitae, a ea magnam dolor maiores dolorem totam quasi vel assumenda labore cum. Recusandae ab, provident officiis delectus in illo dolorum magni amet reiciendis veniam incidunt ullam corporis vitae nulla omnis libero fugiat labore quae! Quia soluta illo officia quis non quos ex exercitationem similique pariatur saepe! Maiores sint amet quidem. Iste, recusandae perferendis. Quos, inventore ad.
        </p>
      </main>
      <Comments/>
      <a
        className="scroll"
        href="#main"
        style={{ opacity: scrollVisible ? 1 : 0 }}
      >
        <div className="container">
          {[...Array(8)].map((_, i) => <div key={i} className="rectangle" />)}
        </div>
        <span className="text">Throttle up</span>
      </a>
    </div>
  );
}
