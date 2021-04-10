const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: [],
        };
    },
    methods: {
        pushNote(event) {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        deleteNote(idx, $event) {
            this.notes.splice(idx, 1);
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2;
        }
    },
    watch: {
        inputValue(value) {
            console.log(value);
        }
    }
};

const app = Vue.createApp(App);

app.mount('#app');