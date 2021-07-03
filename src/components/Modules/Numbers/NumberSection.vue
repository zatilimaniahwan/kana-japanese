<template>
  <section class="number-area ptb_50">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="card text-center text-white bg-warning">
            <div class="card-body">{{$t('learning.moduleNum.contents.numbers')}}</div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-warning">
            <div class="card-body">{{$t('learning.moduleNum.contents.romaji')}}</div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-warning">
            <div class="card-body">{{$t('learning.moduleNum.contents.kana')}}</div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-warning">
            <div class="card-body">{{$t('learning.moduleNum.contents.numbers')}}</div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-warning">
            <div class="card-body">{{$t('learning.moduleNum.contents.romaji')}}</div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-warning">
            <div class="card-body">{{$t('learning.moduleNum.contents.kana')}}</div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-2">
          <div class="card text-center text-white bg-secondary">
            <div v-for="number in 10" :key="number" class="card-body">
              <div class="card-text">
                {{ number - 1 }}
              </div>
            </div>
            <div v-for="number in [10, 11, 12]" :key="number" class="card-body">
              <div class="card-text">
                {{ number }}
              </div>
            </div>
            <div class="card-body">
              <div class="card-text">...</div>
            </div>
            <div
              v-for="number in [20, 30, 40, 50, 60, 70, 80, 90]"
              :key="number"
              class="card-body"
            >
              <div class="card-text">
                {{ number }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-info">
            <div v-for="romaji1 in romajis1" :key="romaji1" class="card-body">
              <div class="card-text">
                {{ romaji1 }}
              </div>
            </div>
            <div v-for="romaji2 in romajis2" :key="romaji2" class="card-body">
              <div class="card-text">
                {{ romaji2 }}
              </div>
            </div>
            <div class="card-body">
              <div class="card-text">...</div>
            </div>
            <div v-for="romaji3 in romajis3" :key="romaji3" class="card-body">
              <div class="card-text">
                {{ romaji3 }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 syllable">
          <div class="card text-center text-white bg-success">
            <div v-for="kana1 in kanas1" :key="kana1" class="card-body">
              <div class="card-text">
                 <a style="cursor:pointer;" @click="play(kana1)"><u>{{kana1 }}</u></a>
              </div>
            </div>
            <div v-for="kana2 in kanas2" :key="kana2" class="card-body">
              <div class="card-text">
               <a style="cursor:pointer;" @click="play(kana2)"><u>{{kana2 }}</u></a>
              </div>
            </div>
            <div class="card-body">
              <div class="card-text">...</div>
            </div>
            <div v-for="kana3 in kanas3" :key="kana3" class="card-body">
              <div class="card-text">
                <a style="cursor:pointer;" @click="play(kana3)"><u>{{kana3 }}</u></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-secondary">
            <div
              v-for="number in [100, 200, 300, 400, 500, 600, 700, 800, 900]"
              :key="number"
              class="card-body"
            >
              <div class="card-text">
                {{ number }}
              </div>
            </div>
            <div
              v-for="number in [
                1000,
                2000,
                3000,
                4000,
                5000,
                6000,
                7000,
                8000,
                9000,
              ]"
              :key="number"
              class="card-body"
            >
              <div class="card-text">
                {{ number }}
              </div>
            </div>
            <div
              v-for="number in [10000, 100000, 1000000, 10000000]"
              :key="number"
              class="card-body"
            >
              <div class="card-text">
                {{ number }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card text-center text-white bg-info">
            <div v-for="romaji4 in romajis4" :key="romaji4" class="card-body">
              <div class="card-text">
                {{ romaji4 }}
              </div>
            </div>
            <div v-for="romaji5 in romajis5" :key="romaji5" class="card-body">
              <div class="card-text">
                {{ romaji5 }}
              </div>
            </div>
            <div v-for="romaji6 in romajis6" :key="romaji6" class="card-body">
              <div class="card-text">
                {{ romaji6 }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 syllable3">
          <div class="card text-center text-white bg-success">
            <div v-for="kana4 in kanas4" :key="kana4" class="card-body">
              <div class="card-text">
                <a style="cursor:pointer;" @click="play(kana4)"><u>{{kana4 }}</u></a>
              </div>
            </div>
            <div v-for="kana5 in kanas5" :key="kana5" class="card-body">
              <div class="card-text">
                <a style="cursor:pointer;" @click="play(kana5)"><u>{{kana5 }}</u></a>
              </div>
            </div>
            <div v-for="kana6 in kanas6" :key="kana6" class="card-body">
              <div class="card-text">
              <a style="cursor:pointer;" @click="play(kana6)"><u>{{kana6 }}</u></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NumberSection',
  data () {
    return {
      romajis1: [
        'zero/rei',
        'ichi',
        'ni',
        'san',
        'yon/shi',
        'go',
        'roku',
        'nana/shichi',
        'hachi',
        'kyuu/ku'
      ],
      romajis2: ['jyuu', 'jyuiichi', 'jyuuni'],
      romajis3: [
        'nijyuu',
        'sanjyuu',
        'yonjyuu',
        'gojyuu',
        'rokujyuu',
        'nanajyuu',
        'hachijyuu',
        'kyuujyuu'
      ],
      romajis4: [
        'hyaku',
        'nihyaku',
        'sanbyaku',
        'yonhyaku',
        'gohyaku',
        'roppyaku',
        'nanahyaku',
        'happyaku',
        'kyuuhyaku'
      ],
      romajis5: [
        'sen',
        'nisen',
        'sanzen',
        'yonsen',
        'gosen',
        'rokusen',
        'nanasen',
        'hassen',
        'kyuusen'
      ],
      romajis6: ['ichiman', 'jyuuman', 'hyakuman', 'senman'],
      kanas1: [
        'ゼロ／れい',
        'いち',
        'に',
        'さん',
        'よん／し',
        'ご',
        'ろく',
        'なな／しち',
        'はち',
        'きゅう／く'
      ],
      kanas2: ['じゅう', 'じゅういち', 'じゅうに'],
      kanas3: [
        'にじゅう',
        'さんじゅう',
        'よんじゅう',
        'ごじゅう',
        'ろくじゅう',
        'ななじゅう',
        'はちじゅう',
        'きゅうじゅう'
      ],
      kanas4: [
        'ひゃく',
        'にひゃく',
        'さんびゃく',
        'よんひゃく',
        'ごひゃく',
        'ろっぴゃく',
        'ななひゃく',
        'はっぴゃく',
        'きゅうひゃく'
      ],
      kanas5: [
        'せん',
        'にせん',
        'さんぜん',
        'よんせん',
        'ごせん',
        'ろくせん',
        'ななせん',
        'はっせん',
        'きゅうせん'
      ],
      kanas6: [
        'いちまん',
        'じゅうまん',
        'ひゃくまん',
        'いっせんまん'
      ],
      soundSrc: ''
    }
  },
  methods: {
    play (val) {
      switch (val) {
      case 'ゼロ／れい':
        this.soundSrc = '/assets/sounds/Number/zero-rei.mp3'
        break
      case 'いち':
        this.soundSrc = '/assets/sounds/Number/1_ichi.mp3'
        break
      case 'に':
        this.soundSrc = '/assets/sounds/Number/2_ni.mp3'
        break
      case 'さん':
        this.soundSrc = '/assets/sounds/Number/3_san.mp3'
        break
      case 'よん／し':
        this.soundSrc = '/assets/sounds/Number/yon-shi.mp3'
        break
      case 'ご':
        this.soundSrc = '/assets/sounds/Number/5_go.mp3'
        break
      case 'ろく':
        this.soundSrc = '/assets/sounds/Number/6_roku.mp3'
        break
      case 'なな／しち':
        this.soundSrc = '/assets/sounds/Number/nana-shichi.mp3'
        break
      case 'はち':
        this.soundSrc = '/assets/sounds/Number/8_hachi.mp3'
        break
      case 'きゅう／く':
        this.soundSrc = '/assets/sounds/Number/kyuu-ku.mp3'
        break
      case 'じゅう':
        this.soundSrc = '/assets/sounds/Number/10_jyuu.mp3'
        break
      case 'じゅういち':
        this.soundSrc = '/assets/sounds/Number/11_jyuuichi.mp3'
        break
      case 'じゅうに':
        this.soundSrc = '/assets/sounds/Number/12_jyuuni.mp3'
        break
      case 'にじゅう':
        this.soundSrc = '/assets/sounds/Number/20_nijyuu.mp3'
        break
      case 'さんじゅう':
        this.soundSrc = '/assets/sounds/Number/30_sanjyuu.mp3'
        break
      case 'よんじゅう':
        this.soundSrc = '/assets/sounds/Number/40_yonjyuu.mp3'
        break
      case 'ごじゅう':
        this.soundSrc = '/assets/sounds/Number/50_gojyuu.mp3'
        break
      case 'ろくじゅう':
        this.soundSrc = '/assets/sounds/Number/60_rokujyuu.mp3'
        break
      case 'ななじゅう':
        this.soundSrc = '/assets/sounds/Number/70_nanajyuu.mp3'
        break
      case 'はちじゅう':
        this.soundSrc = '/assets/sounds/Number/80_hachijyuu.mp3'
        break
      case 'きゅうじゅう':
        this.soundSrc = '/assets/sounds/Number/90_kyuujyuu.mp3'
        break
      case 'ひゃく':
        this.soundSrc = '/assets/sounds/Number/100_hyaku.mp3'
        break
      case 'にひゃく':
        this.soundSrc = '/assets/sounds/Number/200_nihyaku.mp3'
        break
      case 'さんびゃく':
        this.soundSrc = '/assets/sounds/Number/300_sanbyaku.mp3'
        break
      case 'よんひゃく':
        this.soundSrc = '/assets/sounds/Number/400_yonhyaku.mp3'
        break
      case 'ごひゃく':
        this.soundSrc = '/assets/sounds/Number/500_gohyaku.mp3'
        break
      case 'ろっぴゃく':
        this.soundSrc = '/assets/sounds/Number/600_roppyaku.mp3'
        break
      case 'ななひゃく':
        this.soundSrc = '/assets/sounds/Number/700_nanahyaku.mp3'
        break
      case 'はっぴゃく':
        this.soundSrc = '/assets/sounds/Number/800_happyaku.mp3'
        break
      case 'きゅうひゃく':
        this.soundSrc = '/assets/sounds/Number/900_kyuuhyaku.mp3'
        break
      case 'せん':
        this.soundSrc = '/assets/sounds/Number/1000_sen.mp3'
        break
      case 'にせん':
        this.soundSrc = '/assets/sounds/Number/2000_nisen.mp3'
        break
      case 'さんぜん':
        this.soundSrc = '/assets/sounds/Number/3000_sanzen.mp3'
        break
      case 'よんせん':
        this.soundSrc = '/assets/sounds/Number/4000_yonsen.mp3'
        break
      case 'ごせん':
        this.soundSrc = '/assets/sounds/Number/5000_gosen.mp3'
        break
      case 'ろくせん':
        this.soundSrc = '/assets/sounds/Number/6000_rokusen.mp3'
        break
      case 'ななせん':
        this.soundSrc = '/assets/sounds/Number/7000_nanasen.mp3'
        break
      case 'はっせん':
        this.soundSrc = '/assets/sounds/Number/8000_hassen.mp3'
        break
      case 'きゅうせん':
        this.soundSrc = '/assets/sounds/Number/9000_kyuusen.mp3'
        break
      case 'いちまん':
        this.soundSrc = '/assets/sounds/Number/10000_ichiman.mp3'
        break
      case 'じゅうまん':
        this.soundSrc = '/assets/sounds/Number/10000_jyuuman.mp3'
        break
      case 'ひゃくまん':
        this.soundSrc = '/assets/sounds/Number/1000000_hyakuman.mp3'
        break
      case 'いっせんまん':
        this.soundSrc = '/assets/sounds/Number/10000000_senman.mp3'
        break
      }
      const audio = new Audio(this.soundSrc)
      audio.play()
    }
  }
}
</script>
