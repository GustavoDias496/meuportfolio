<script lang="ts">
</script>

<template>
    <section class="container">
        <div class="top-container">
            <img src="../assets/eu.jpg" alt="" class="photo">
            <p class="aboutText">Olá! Meu nome é Gustavo Dias, atualmente estou cursando o 8º Período de sistemas de
                informação, meus principais interesses são em desenvolvimento web e mobile, áreas das quais busco me
                especializar cada vez mais. Nesse portfólio você vai conseguir me conhecer um pouco melhor e ver alguns
                projetos desenvolvidos.</p>
        </div>

        <div class="bottom-container">
            <img src="../assets/github.svg" alt="" class="icon">
            <img src="../assets/linkedin.svg" alt="" class="icon">
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