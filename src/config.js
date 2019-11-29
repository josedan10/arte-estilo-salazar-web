const WORKS_PATH = '/images/works/'
const TESTIMONIALS_PATH = '/images/testimonials/'
let i = 0

export default {
  testimonials: [
    {
      name: 'Richard Páez',
      title: 'Ex director técnico de la vinotinto',
      picture: `${TESTIMONIALS_PATH}richard.jpeg`,
      testimonial: 'Quis consequat est exercitation dolore est et elit sunt duis officia proident excepteur Lorem commodo. Anim commodo nisi ea deserunt esse est pariatur adipisicing sit nisi duis eu voluptate.',
      socialLinks: []
    },
    {
      name: 'Yimy Alvarado',
      title: 'Comerciante local y padre de familia',
      picture: `${TESTIMONIALS_PATH}yimy.jpg`,
      testimonial: 'Anim commodo nisi ea deserunt esse est pariatur adipisicing sit nisi duis eu voluptate. Commodo fugiat laborum eu aliquip. Exercitation cillum sint quis culpa. Ea sint quis occaecat cupidatat deserunt velit qui. ',
      socialLinks: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/yimyalvarado7/'
        }
      ]
    },
    {
      name: 'José Quintero',
      title: 'Desarrollador fullstack',
      picture: `${TESTIMONIALS_PATH}jose.jpg`,
      testimonial: 'Ex officia Lorem labore et nostrud occaecat magna cupidatat labore occaecat quis. Quis consequat est exercitation dolore est et elit sunt duis officia proident excepteur Lorem commodo.',
      socialLinks: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/josedanqf/'
        },
        {
          name: 'twitter',
          url: 'https://www.twitter.com/josedan_music/'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/jose-daniel-quintero-figueroa-a9b96813b/'
        }
      ]
    },
    {
      name: 'Yimy Alvarado',
      title: 'Comerciante local y padre de familia',
      picture: `${TESTIMONIALS_PATH}yimy.jpg`,
      testimonial: 'Anim commodo nisi ea deserunt esse est pariatur adipisicing sit nisi duis eu voluptate. Commodo fugiat laborum eu aliquip.',
      socialLinks: [
        {
          name: 'instagram',
          url: 'https://www.instagram.com/yimyalvarado7/'
        }
      ]
    }
  ],
  works: [
    {
      title: 'Trabajo # 1',
      images: [
        `${WORKS_PATH}/work1-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}/work1-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}/work1-${i++ % 3 + 1}.jpg`
      ]
    },
    {
      title: 'Trabajo # 2',
      images: [
        `${WORKS_PATH}/work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}/work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}/work2-${i++ % 3 + 1}.jpg`
      ]
    },
    {
      title: 'Trabajo # 3',
      images: [
        `${WORKS_PATH}/work3-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}/work3-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}/work3-${i++ % 3 + 1}.jpg`
      ]
    }
  ]
}
