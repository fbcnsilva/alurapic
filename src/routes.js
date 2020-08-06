import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    { path: '', name: 'Home', component: Home },
    { path: '/cadastro', name: 'Cadastro', component: Cadastro }
];