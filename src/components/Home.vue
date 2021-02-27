<template>
  <div>
    <b-container>
      <div>Pokedex</div>
      <b-row class="grid">
        <div v-for="(pokemon, index) in pokemons" :key="index">
          <b-card :class="`card ${pokemon.types[0].type.name}`">
            <img class="img-pokemon" :src="`${pokemon.sprites.front_default}`" alt="imagem de um pokemon">
            <div class="header-card">
              <div class="name">{{ pokemon.name }}</div>

            </div>
            <b-row class="type-pokemon" v-for="(type, index) in pokemon.types" :key="index">{{ type.type.name }}</b-row>
        </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PokedexService from '@/services/pokemons.service';

export default {
  name: 'Home',
  data() {
    return {
      pokemons: [],
    };
  },
  async mounted() {
    for (let index = 1; index <= 150; index++) {
      this.pokemons.push(await PokedexService.buscarUrl(index));
      
    }
    console.log(this.pokemons, 'meus pokemons')
  },
};


</script>
<style scoped>
.grid {
  display: grid;
  grid-area: 'card card card';
  grid-template-columns:  1fr 1fr 1fr;
}

.card {
  display: flex;
  margin: 20px;
  border: none;
  border-radius: 30px;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
  min-height: 280px;
  padding: 0px;
  max-width: 300px;
}

.name {
 font-size: 20px;
 font-weight: 700;
 text-transform: capitalize;
 color: white;
 text-align: center;
}

.indice {
  color: white;
  background: rgb(255, 255, 255, 30%);
  height: 24px;
  width: 48px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
}

.type-pokemon {
  display: flex;
  flex-direction: column;
  color: white;
  background: rgb(255, 255, 255, 20%);
  height: 28px;
  width: 80px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 12px;
}

.img-pokemon {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 120px;
  width: auto;
  border-radius: 100px;
  background-image: url("../assets/ball.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  padding-right: 0px;
}
.col {
  padding: 0px;
}
.grass {
  background-color: #2cdab1;
}

.fire {
  background-color: #fa6555;
}
.electric {
  background-color: #f1d028;
}
.water {
  background-color: #58abf6;
}
.ground {
  background-color: #e69c52;
}
.rock {
  background-color: #3f20ca;
}
.fairy {
  background-color: #df6ef3;
}
.poison {
  background-color: #4fd169;
}
.bug {
  background-color: #e99521;
}
.draggon {
  background-color: #6185c8;
}
.psychic {
  background-color: #2ed9f0;
}
.flying {
  background-color: #F5F5F5;
}
.fighting {
  background-color: #ffd071;
}
.ghost {
  background-color: #caaffd;
}
.ice {
  background-color: #539ff6;
}
.normal {
  background-color: #fdafaf;
}

@media screen and (max-width: 768px) {
  .grid {
    display: grid;
    grid-area: 'card card';
    grid-template-columns:  1fr 1fr;
  }
}

@media screen and (max-width: 460px) {
  .grid {
    display: grid;
    grid-area: 'card card';
    grid-template-columns:  1fr 1fr;
  }
}
</style>