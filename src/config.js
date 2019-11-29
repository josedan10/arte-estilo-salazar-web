const WORKS_PATH = '/images/works/'
let i = 0

export default {
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
