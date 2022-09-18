import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {

  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Duis dolore deserunt lorem ullamco dolore Duis non mollit eu mollit exercitation nostrud est sed sint aliqua. veniam tempor aute sint anim id cillum labore est commodo nulla quis veniam quis ea culpa adipiscing. sunt voluptate velit ut laboris sit ipsum esse sunt exercitation commodo ullamco in lorem sed consequat pariatur. sit Excepteur labore exercitation velit qui magna incididunt nostrud aute lorem velit reprehenderit sunt velit ipsum. ut esse sit ex quis officia tempor exercitation est ad aliquip in mollit nisi consectetur nostrud reprehenderit fugiat.
      </p>
      <Image src='/images/charizard.png' width='300' height='300' alt='Imagem do Charizard' />
    </div>
  )
}