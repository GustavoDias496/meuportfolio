<script lang="ts">
</script>

<template>
    <section class="container" id="inicio">
        <div class="top-container">
            <img src="../assets/eu.jpg" alt="" class="photo">
            <p class="aboutText">Olá! Meu nome é Gustavo Dias, sou bacharel em Sistemas de Informação pelo IFNMG – Campus Salinas. Tenho grande interesse nas áreas de desenvolvimento web e mobile, nas quais estou em constante busca de aperfeiçoamento e especialização.

Durante minha graduação, fui membro da SIFSoft Júnior, a empresa júnior da instituição, onde atuei como Diretor de Projetos e desenvolvedor backend.

Neste portfólio, você poderá me conhecer melhor e explorar alguns dos projetos que desenvolvi ao longo da minha trajetória.</p>
        </div>

        <div class="bottom-container">
            <a href="https://github.com/GustavoDias496" target="_blank"><img src="../assets/github.svg" alt="" class="icon"></a>
            <a href="https://www.linkedin.com/in/gustavodias66/" target="_blank"><img src="../assets/linkedin.svg" alt="" class="icon"></a>
        </div>
        <div class="bottom-container">

        </div>
    </section>
</template>

<style scoped>
.container {
    margin-top: 2em;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.top-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.photo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid var(--color-border);
}

.aboutText {
    margin-top: 4em;
    color: var(--color-text-primary);
    text-align: justify;
}

.bottom-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    color: var(--color-text-primary);
    margin-top: 4em;
}

.icon:hover {
    cursor: pointer;
}

@media (min-width: 768px) {

    .container {
        margin-top: 10em;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
    }

    .top-container {
        width: 70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .aboutText {
        width: 40%;
    }

    .bottom-container {
        margin-top: 6em;
    }
}
</style>