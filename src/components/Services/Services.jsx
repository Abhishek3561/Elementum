import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import styles from './Services.module.css'
import curveLine from '../../assets/Vector2516.svg'

const services = [
  { id: 1, category: 'Office of multiple interest content',          title: 'Colaborative & partnership' },
  { id: 2, category: 'The hanger US Air force digital experimental', title: 'We talk about our weight' },
  { id: 3, category: 'Delta faucet content, social, digital',        title: 'Piloting digital confidence' },
]

const Services = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section className={styles.services} id="services">
      <div className={styles.curveWrapper}>
        <img src={curveLine} alt="" className={styles.curveAsset} />
      </div>

      <div className={styles.inner}>
        <h2 className={styles.title}>
          What we <span className={styles.can}>can</span><br />
          <span className={styles.offer}>offer</span> you!
        </h2>

        <div className={styles.list}>
          {services.map((s) => (
            <div key={s.id}
              className={`${styles.item} ${hovered === s.id ? styles.itemHover : ''}`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className={styles.cat}>{s.category}</span>
              <span className={styles.name}>{s.title}</span>
              <div className={styles.arrowWrapper}>
                <HiArrowRight className={styles.arrow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services