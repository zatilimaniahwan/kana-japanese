import Vue from 'vue'
import Router from 'vue-router'
import ThemeFive from '@/themes/theme-five'
import Login from '@/components/Accounts/Login/login'
import SignUp from '@/components/Accounts/SignUp/signup'
import Forgot from '@/components/Accounts/Forgot/forgot'
import SeiOnHiragana from '@/components/Modules/Hiragana/sei-on/SeiOn'
import SeiOnKatakana from '@/components/Modules/Katakana/sei-on/SeiOn'
import Numbers from '@/components/Modules/Numbers/Number'
import UnitOne from '@/components/Modules/extraPractices/unit1/unitOne'
import UnitTwo from '@/components/Modules/extraPractices/unit2/unitTwo'
import Nouns from '@/components/Modules/extraPractices/writing/Nouns'
import Adjectives from '@/components/Modules/extraPractices/writing/Adjectives'
import Verbs from '@/components/Modules/extraPractices/writing/Verbs'
import ExtraVocab from '@/components/Modules/extraPractices/extravocab/Extra'
import Tips from '@/components/Modules/Tips/Tips'
import Greeting from '@/components/Modules/Greetings/Greeting'
import Malaysia from '@/components/Modules/Malaysia/Malaysia'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ThemeFive',
      component: ThemeFive
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/hiragana-sei-on',
      name: 'SeiOn Hiragana',
      component: SeiOnHiragana
    },
    {
      path: '/katakana-sei-on',
      name: 'SeiOn Katakana',
      component: SeiOnKatakana
    },
    {
      path: '/number',
      name: 'Number',
      component: Numbers
    },
    {
      path: '/unit-one',
      name: 'UnitOne',
      component: UnitOne
    },
    {
      path: '/unit-two',
      name: 'UnitTwo',
      component: UnitTwo
    },
    {
      path: '/Nouns',
      name: 'Nouns',
      component: Nouns
    },
    {
      path: '/adjectives',
      name: 'Adjectives',
      component: Adjectives
    },
    {
      path: '/verbs',
      name: 'Verbs',
      component: Verbs
    },
    {
      path: '/extravocab',
      name: 'ExtraVocab',
      component: ExtraVocab
    },
    {
      path: '/tips',
      name: 'Tips',
      component: Tips
    },
    {
      path: '/greetings',
      name: 'Greetings',
      component: Greeting
    },
    {
      path: '/katakana-malaysia',
      name: 'Katakana Malaysia',
      component: Malaysia
    }
  ]
})
