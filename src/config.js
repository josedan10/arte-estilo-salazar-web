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
      name: 'Enma Crespo',
      title: 'Contadora y Ama de Casa',
      picture: `${TESTIMONIALS_PATH}richard.jpeg`,
      testimonial: 'Quis consequat est exercitation dolore est et elit sunt duis officia proident excepteur Lorem commodo. Anim commodo nisi ea deserunt esse est pariatu.',
      socialLinks: []
    },
    {
      name: 'José Quintero',
      title: 'Desarrollador Fullstack',
      picture: `${TESTIMONIALS_PATH}jose.jpg`,
      testimonial: 'Realmente tienen un compromiso por hacer realidad el espacio soñado de sus clientes. Estoy súper contento con mi nueva zona de trabajo',
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
      name: 'Paola De Sánchez',
      title: 'Odontólogo',
      picture: `${TESTIMONIALS_PATH}paola.jpeg`,
      testimonial: '¡Excelente trabajo! Súper responsables y comprometidos con sus clientes. ¡Nos encantó!',
      socialLinks: []
    }
  ],
  works: [ 
    {
      title: 'Sala de Entretenimiento',
      images: [
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`
      ],
      description: `<p>Cada espacio en el hogar es importante y se puede aprovechar al máximo, nuestros clientes necesitaban un mueble donde pudieran colocar su Home Theater pero que también funcionara como mueble de TV, el espacio disponible aparentemente era pequeño y con una columna.</p>

      <p>Se creó un diseño con dos repisas, una cenefa tipo repisa con luces y un mueble que va de costado a costado distribuyendo los espacios, basándonos en las dimensiones del Home Theater, en el lado de la columna se realizó en el mueble una puerta con vidrio para romper la asimetría que causaba ese espacio, ya que las otras puertas serían en laminado.</p>

      <p>La fabricación tenía un tiempo de entrega establecido de diez días hábiles, pero ya casi era navidad y nuestros clientes necesitaban el trabajo en cinco días y así fue, trabajamos en tiempo récord.</p>`
    },
    {
      title: 'Cocina en mampostería',
      images: [
        `${WORKS_PATH}cocinaNew1.png`,
        `${WORKS_PATH}cocinaNew2.png`
      ],
      description: `<p>La cocina en mampostería resulta ser un desafío, ya que el 90% de las veces existen desniveles. El reto con la carpintería es lograr la simetría con la madera en las puertas y gavetas. Nuestro cliente ya tenía el color beige determinado para el laminado, color que contrasta con la cerámica.</p>

      <p>En este tipo de proyectos, la instalación dura más que la fabricación, ya que la mayor parte del trabajo se realiza en lugar para tener un acabado perfecto.</p>`
    },
    {
      title: 'Cocina Empotrada',
      images: [
        `${WORKS_PATH}cocina${i++ % 3 + 1}.png`,
        `${WORKS_PATH}cocina${i++ % 3 + 1}.png`,
        `${WORKS_PATH}cocina${i++ % 3 + 1}.png`
      ],
      description: `<p>Muchas personas llegan a nosotros llenos de ideas pero sin la seguridad de saber que es lo que realmente quieren, y este fue el caso. Luego de una larga conversación dónde descubrimos la necesidad y gusto de nuestros clientes, les presentamos el diseño.</p>

      <p>Necesitaban renovar la cocina con la finalidad de tener mayor almacenamiento, mejor distribución de los espacios y reubicación de  los electrodomésticos. </p>
      
      <p>Para ello se crearon dos muebles bases: en el primero se encuentran los electrodomésticos principales y el segundo cuenta con tres espacios de almacenamiento y un tope en granito que funciona también como mesón comedor. Tanto los muebles de pared como la despensa y torre de horno, se fabricaron hasta el techo para aprovechar al máximo el espacio, así mismo se fabricó un mueble para empotrar ambas neveras con un espacio de almacenamiento en la parte superior.</p>
      
      <p>El color blanco alto brillo mejora la iluminación, crea la sensación de amplitud en el espacio y da el toque de elegancia, el laminado perfecto para esta cocina, ya que había muy poca luz natural en el lugar.</p>`
    },
    {
      title: 'Mueble Gavetero',
      images: [
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`,
        `${WORKS_PATH}work2-${i++ % 3 + 1}.jpg`
      ],
      description: `<p>Algunas personas solo quieren algo que sea funcional sin importar el diseño, este cliente necesitaba un mueble gavetero para almacenar más prendas.</p>
      
      <p>Fabricamos el mueble con un estilo clásico, laminado en blanco para que hubiese armonía con los otros muebles de la habitación.</p>`
    },
    {
      title: 'Zapatera',
      images: [
        `${WORKS_PATH}zapatera1.png`,
        `${WORKS_PATH}zapatera2.png`,
      ],
      description: `<p>A veces se tiene por costumbre usar cualquier espacio para guardar el calzado, pero cuando va aumentando la cantidad puede ocasionar un desorden. Nuestros clientes necesitaban algo para tener una mejor organización ya que sus zapatos estaban amontonados en un rincón de la habitación, por ende se le hicieron algunas sugerencias. En primer lugar, se pensó que lo ideal para ellos era proporcionarles una zapatera vertical de  1.80m y además, aprovechar la altura para colocar en la puerta un espejo, ya que se notó la ausencia de uno en todo el lugar.</p>

      <p>Se fabricó la zapatera laminado en blanco mate en su exterior y blanco brillante en su interior. Las divisiones internas se fabricaron cuadradas del tamaño estándar de una caja de zapatos, y ya que tenía una profundidad de 60cm se podía almacenar aproximadamente cuarenta pares. Además, se le colocó ruedas giroscopio para facilitar su movilidad al momento de limpiar o simplemente cambiarlo de lugar.</p>`
    },

  ]
}