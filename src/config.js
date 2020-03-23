const WORKS_PATH = 'images/works/'
const TESTIMONIALS_PATH = 'images/testimonials/'
let i = 0

export default {
  emailJS: {
    userID: 'user_cYTCtSqaV0amt7JcWu4MQ',
    emailTemplateID: 'contactmainpage',
    emailServiceID: 'smtp_server'
  },
  testimonials: [{
      name: 'Richard Páez',
      title: 'Ex director técnico de la vinotinto',
      picture: `${TESTIMONIALS_PATH}richard.jpeg`,
      testimonial: 'Quis consequat est exercitation dolore est et elit sunt duis officia proident excepteur Lorem commodo. Anim commodo nisi ea deserunt esse est pariatu.',
      socialLinks: []
    },
    {
      name: 'Yimy Alvarado',
      title: 'Comerciante local y padre de familia',
      picture: `${TESTIMONIALS_PATH}yimy.jpg`,
      testimonial: 'Anim commodo nisi ea deserunt esse est pariatur adipisicing sit nisi duis eu voluptate. Commodo fugiat laborum eu aliquip.',
      socialLinks: [{
        name: 'instagram',
        url: 'https://www.instagram.com/yimyalvarado7/'
      }]
    },
    {
      name: 'José Quintero',
      title: 'Desarrollador fullstack',
      picture: `${TESTIMONIALS_PATH}jose.jpg`,
      testimonial: 'Ex officia Lorem labore et nostrud occaecat magna cupidatat labore occaecat quis. Quis consequat est exercitation dolore est et elit sunt dui officia.',
      socialLinks: [{
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
      socialLinks: [{
        name: 'instagram',
        url: 'https://www.instagram.com/yimyalvarado7/'
      }]
    }
  ],
  works: [{
      title: 'Trabajo # 1',
      images: [
        `${WORKS_PATH}work1-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work1-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work1-${i++ % 3 + 1}.jpg`
      ],
      description: `<p>Eu eiusmod velit tempor aliquip do nulla sit officia officia. Ad non elit ipsum nulla exercitation anim ipsum ut occaecat anim nulla officia. Mollit tempor proident laborum esse qui velit id aliqua deserunt esse adipisicing commodo. Laboris magna laboris reprehenderit sunt adipisicing labore. Aute laborum laboris commodo officia adipisicing.</p>

      <p>Nulla exercitation deserunt laboris veniam. Dolor sint aliqua enim sunt nulla in exercitation ea excepteur amet labore esse est. Ea irure anim sint excepteur tempor sint consequat et ipsum mollit.</p>

      <p>Laborum in ad voluptate labore. Esse occaecat consectetur ad consequat labore exercitation dolor officia Lorem non esse enim. Consectetur proident culpa nulla eiusmod consectetur excepteur eu cupidatat officia. Exercitation excepteur sint mollit eiusmod deserunt nulla sint aute duis ea excepteur sint exercitation cillum.</p>`
    },
    {
      title: 'Trabajo # 2',
      images: [
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`
      ],
      description: `<p>Est aute et dolore sint aute non eiusmod aute nostrud consequat esse elit nostrud id. Ea do non eiusmod culpa reprehenderit occaecat amet irure consequat voluptate laboris. Sunt in aute esse consectetur irure mollit esse fugiat. Id duis consectetur eu exercitation. Ad et reprehenderit id officia sit veniam sint proident nulla. Ea reprehenderit enim culpa eu.</p>

      <p>Pariatur enim cillum eu pariatur pariatur sint. Cillum enim et veniam magna mollit deserunt. Amet et laboris commodo pariatur nulla duis excepteur nostrud. Elit consequat eiusmod ipsum nostrud. Velit quis deserunt nostrud esse officia.</p>

      <p>Laboris in dolor aute consequat qui est officia eu sit ut adipisicing mollit. Aute esse quis quis cupidatat est ullamco dolore dolor dolore culpa officia. Dolor laboris aliqua duis commodo eu deserunt fugiat consequat incididunt in adipisicing incididunt. Eiusmod minim esse enim do esse consequat incididunt laboris cillum est incididunt deserunt dolor. Aliquip incididunt veniam exercitation esse dolor esse elit nostrud velit cupidatat duis. Cupidatat Lorem dolor occaecat in labore non dolor excepteur est labore laborum.</p>`
    },
    {
      title: 'Trabajo # 3',
      images: [
        `${WORKS_PATH}work3-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work3-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work3-${i++ % 3 + 1}.jpg`
      ],
      description: `<p>Deserunt enim ipsum amet excepteur velit veniam culpa exercitation anim aute pariatur commodo. Irure voluptate est aute esse incididunt. Aute laborum est Lorem ex occaecat nostrud et ad anim. Eiusmod voluptate Lorem voluptate ut consectetur minim tempor officia velit fugiat cupidatat mollit laboris duis. Minim consequat aliquip ex dolor.</p>

      <p>Tempor est sint sunt aute sunt aliquip aliqua proident aliquip. Officia velit cupidatat deserunt laborum nostrud anim aliquip. In esse mollit do quis veniam est laboris amet et quis ea exercitation culpa. Ullamco reprehenderit consequat irure in culpa consectetur commodo. Excepteur amet ullamco sunt qui velit cupidatat qui. Nisi commodo ullamco laborum velit eu do laborum ea sunt minim.</p>

      <p>Sint enim labore excepteur sint labore. Laborum excepteur cillum ad non. Sit tempor occaecat duis adipisicing incididunt ex culpa.</p>`
    }
  ]
}