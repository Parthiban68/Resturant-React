import React from 'react'
import { Poly, wave } from '../../assets/Image/Image'
import AccoutButton from '../Buttons/AccoutButton'

const BgStyle = {
    backgroundImage: `url(${Poly})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative"
}

const  AboutUs = () => {
  return (
    <div>
        <div  style={BgStyle} className='py-14'>
            <div className='container min-h-[500px] relative z-10'>
                <h1 data-aos="fade-down" data-aos-delay="300" className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About Us</h1>
                <div data-aos="fade-in" data-aos-delay="700" className='bg-white/80 p-10 my-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia modi praesentium quo aut ut! Sint sapiente deserunt dolore, rerum cumque laboriosam harum, voluptatum ipsum ducimus odio perspiciatis aliquid obcaecati.
                    Ipsa sint tenetur ab corrupti? Vel voluptatum tempora dolores non, repudiandae recusandae officia aut tempore illum eius consequuntur necessitatibus illo facilis porro ducimus doloribus pariatur vitae eaque blanditiis. Inventore, ipsam.
                    Accusantium voluptas consequuntur dolore nobis sit magni officia ratione unde enim. Libero iste neque ut laudantium ullam voluptatem velit blanditiis pariatur tempore tenetur! Harum animi reprehenderit, hic perspiciatis ut eligendi!
                    Molestiae blanditiis sed, hic repellendus natus necessitatibus nemo iste perspiciatis explicabo reprehenderit dolore sequi vero laudantium ipsa consectetur esse facere illum unde. Voluptatem dolorem magnam sit minima enim veritatis animi!
                    Iusto, quidem? Libero optio eligendi excepturi modi nemo dolorem facere dolore natus unde error sed commodi ipsam beatae quod, incidunt quo dicta earum? Vitae, voluptatem quisquam quis quasi cum veritatis.
                <div className='flex justify-center pt-10'>
                    <AccoutButton/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs