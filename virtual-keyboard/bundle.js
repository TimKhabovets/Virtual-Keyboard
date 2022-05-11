

let caseDown = document.querySelector('.caseDown');
let caseUp = document.querySelector(".caseUp");
let capsLock = document.querySelector(".capsLock");
let shiftCaps = document.querySelector(".shiftCaps");
// Init Html 
document.addEventListener('DOMContentLoaded', (e) => {
    insertKeyboardContainer();
    
    insertTextArea();
    insertKeyboardsRows();

    toggleClassPressKey();
    toggleClassClickKey();
});

  

// insert container
const insertKeyboardContainer = () => {
    const keyboardContainerHTML = `<div class="wrapper">
    <p class = "title">RSS Виртуальная клавиатура</p>
    <div class="body_keyboard"></div>
    <p>Клавиатура создана в операционной системе Windows</p>
    <p>Для переключения языка комбинация: левыe ctrl + alt</p>
    </div>`;
    document.body.innerHTML = keyboardContainerHTML;
};



// insert textarea
const textarea = document.createElement("textarea");
textarea.className = "text_area";
const insertTextArea = () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.prepend(textarea);
};




const firstRow = [
    {
        name: "Backquote",
        rus: {
          caseDown: "ё",
          caseUp: "Ё",
          capsLock: "Ё",
          shiftCaps: "ё",
        },
        eng: {
          caseDown: "`",
          caseUp: "~",
          capsLock: "~",
          shiftCaps: "`",
        },
      },
      {
        name: "Digit1",
        rus: {
          caseDown: "1",
          caseUp: "!",
          capsLock: "!",
          shiftCaps: "1",
        },
        eng: {
          caseDown: "1",
          caseUp: "!",
          capsLock: "!",
          shiftCaps: "1",
        },
      },
      {
        name: "Digit2",
        rus: {
          caseDown: "2",
          caseUp: '"',
          capsLock: '"',
          shiftCaps: "2",
        },
        eng: {
          caseDown: "2",
          caseUp: "@",
          capsLock: "@",
          shiftCaps: "2",
        },
      },
      {
        name: "Digit3",
        rus: {
          caseDown: "3",
          caseUp: "№",
          capsLock: "№",
          shiftCaps: "3",
        },
        eng: {
          caseDown: "3",
          caseUp: "#",
          capsLock: "#",
          shiftCaps: "3",
        },
      },
      {
        name: "Digit4",
        rus: {
          caseDown: "4",
          caseUp: ";",
          capsLock: ";",
          shiftCaps: "4",
        },
        eng: {
          caseDown: "4",
          caseUp: "$",
          capsLock: "$",
          shiftCaps: "4",
        },
      },
      {
        name: "Digit5",
        rus: {
          caseDown: "5",
          caseUp: "%",
          capsLock: "%",
          shiftCaps: "5",
        },
        eng: {
          caseDown: "5",
          caseUp: "%",
          capsLock: "%",
          shiftCaps: "5",
        },
      },
      {
        name: "Digit6",
        rus: {
          caseDown: "6",
          caseUp: ":",
          capsLock: ":",
          shiftCaps: "6",
        },
        eng: {
          caseDown: "6",
          caseUp: "^",
          capsLock: "^",
          shiftCaps: "6",
        },
      },
      {
        name: "Digit7",
        rus: {
          caseDown: "7",
          caseUp: "?",
          capsLock: "?",
          shiftCaps: "7",
        },
        eng: {
          caseDown: "7",
          caseUp: "&",
          capsLock: "&",
          shiftCaps: "7",
        },
      },
      {
        name: "Digit8",
        rus: {
          caseDown: "8",
          caseUp: "*",
          capsLock: "*",
          shiftCaps: "8",
        },
        eng: {
          caseDown: "8",
          caseUp: "*",
          capsLock: "*",
          shiftCaps: "8",
        },
      },
      {
        name: "Digit9",
        rus: {
          caseDown: "9",
          caseUp: "(",
          capsLock: "(",
          shiftCaps: "9",
        },
        eng: {
          caseDown: "9",
          caseUp: "(",
          capsLock: "(",
          shiftCaps: "9",
        },
      },
      {
        name: "Digit0",
        rus: {
          caseDown: "0",
          caseUp: ")",
          capsLock: ")",
          shiftCaps: "0",
        },
        eng: {
          caseDown: "0",
          caseUp: ")",
          capsLock: ")",
          shiftCaps: "0",
        },
      },
      {
        name: "Minus",
        rus: {
          caseDown: "-",
          caseUp: "_",
          capsLock: "_",
          shiftCaps: "-",
        },
        eng: {
          caseDown: "-",
          caseUp: "_",
          capsLock: "_",
          shiftCaps: "-",
        },
      },
      {
        name: "Equal",
        rus: {
          caseDown: "=",
          caseUp: "+",
          capsLock: "+",
          shiftCaps: "=",
        },
        eng: {
          caseDown: "=",
          caseUp: "+",
          capsLock: "+",
          shiftCaps: "=",
        },
      },
      {
        name: "Backspace",
        rus: {
          caseDown: "Backspace",
          caseUp: "Backspace",
          capsLock: "Backspace",
          shiftCaps: "Backspace",
        },
        eng: {
          caseDown: "Backspace",
          caseUp: "Backspace",
          capsLock: "Backspace",
          shiftCaps: "Backspace",
        },
      },
];

const secondRow = [
    {
        name: "Tab",
        rus: {
            caseDown: "Tab",
            caseUp: "Tab",
            capsLock: "Tab",
            shiftCaps: "Tab",
        },
        eng: {
            caseDown: "Tab",
            caseUp: "Tab",
            capsLock: "Tab",
            shiftCaps: "Tab",
        },
    },
    {
        name: "KeyQ",
        rus: {
            caseDown: "й",
            caseUp: "Й",
            capsLock: "Й",
            shiftCaps: "й",
        },
        eng: {
            caseDown: "q",
            caseUp: "Q",
            capsLock: "Q",
            shiftCaps: "q",
        },
    },
    {
        name: "KeyW",
        rus: {
            caseDown: "ц",
            caseUp: "Ц",
            capsLock: "Ц",
            shiftCaps: "ц",
        },
        eng: {
            caseDown: "w",
            caseUp: "W",
            capsLock: "W",
            shiftCaps: "w",
        },
    },
    {
        name: "KeyE",
        rus: {
            caseDown: "у",
            caseUp: "У",
            capsLock: "У",
            shiftCaps: "у",
        },
        eng: {
            caseDown: "e",
            caseUp: "E",
            capsLock: "E",
            shiftCaps: "e",
        },
    },
    {
        name: "KeyR",
        rus: {
            caseDown: "к",
            caseUp: "К",
            capsLock: "К",
            shiftCaps: "к",
        },
        eng: {
            caseDown: "r",
            caseUp: "R",
            capsLock: "R",
            shiftCaps: "r",
        },
    },
    {
        name: "KeyT",
        rus: {
            caseDown: "е",
            caseUp: "Е",
            capsLock: "Е",
            shiftCaps: "е",
        },
        eng: {
            caseDown: "t",
            caseUp: "T",
            capsLock: "T",
            shiftCaps: "t",
        },
    },
    {
        name: "KeyY",
        rus: {
            caseDown: "н",
            caseUp: "Н",
            capsLock: "Н",
            shiftCaps: "н",
        },
        eng: {
            caseDown: "y",
            caseUp: "Y",
            capsLock: "Y",
            shiftCaps: "y",
        },
    },
    {
        name: "KeyU",
        rus: {
            caseDown: "г",
            caseUp: "Г",
            capsLock: "Г",
            shiftCaps: "г",
        },
        eng: {
            caseDown: "u",
            caseUp: "U",
            capsLock: "U",
            shiftCaps: "u",
        },
    },
    {
        name: "KeyI",
        rus: {
            caseDown: "ш",
            caseUp: "Ш",
            capsLock: "Ш",
            shiftCaps: "ш",
        },
        eng: {
            caseDown: "i",
            caseUp: "I",
            capsLock: "I",
            shiftCaps: "i",
        },
    },
    {
        name: "KeyO",
        rus: {
            caseDown: "щ",
            caseUp: "Щ",
            capsLock: "Щ",
            shiftCaps: "щ",
        },
        eng: {
            caseDown: "o",
            caseUp: "O",
            capsLock: "O",
            shiftCaps: "o",
        },
    },
    {
        name: "KeyP",
        rus: {
            caseDown: "з",
            caseUp: "З",
            capsLock: "З",
            shiftCaps: "з",
        },
        eng: {
            caseDown: "p",
            caseUp: "P",
            capsLock: "P",
            shiftCaps: "p",
        },
    },
    {
        name: "BracketLeft",
        rus: {
            caseDown: "х",
            caseUp: "Х",
            capsLock: "Х",
            shiftCaps: "х",
        },
        eng: {
            caseDown: "[",
            caseUp: "{",
            capsLock: "{",
            shiftCaps: "[",
        },
    },
    {
        name: "BracketRight",
        rus: {
            caseDown: "ъ",
            caseUp: "Ъ",
            capsLock: "Ъ",
            shiftCaps: "ъ",
        },
        eng: {
            caseDown: "]",
            caseUp: "}",
            capsLock: "}",
            shiftCaps: "]",
        },
    },
    {
        name: "Backslash",
        rus: {
            caseDown: '\'',
            caseUp: "/",
            capsLock: "/",
            shiftCaps: "&#92",
        },
        eng: {
            caseDown: `\``,
            caseUp: "|",
            capsLock: "|",
            shiftCaps: "&#92",
        },
    },
    {
        name: "Delete",
        rus: {
            caseDown: "Del",
            caseUp: "Del",
            capsLock: "Del",
            shiftCaps: "Del",
        },
        eng: {
            caseDown: "Del",
            caseUp: "Del",
            capsLock: "Del",
            shiftCaps: "Del",
        },
    },
]

const thirdRow = [
    {
        name: "CapsLock",
        rus: {
          caseDown: "CapsLock",
          caseUp: "CapsLock",
          capsLock: "CapsLock",
          shiftCaps: "CapsLock",
        },
        eng: {
          caseDown: "CapsLock",
          caseUp: "CapsLock",
          capsLock: "CapsLock",
          shiftCaps: "CapsLock",
        },
    },
    {
        name: "KeyA",
        rus: {
          caseDown: "ф",
          caseUp: "Ф",
          capsLock: "Ф",
          shiftCaps: "ф",
        },
        eng: {
          caseDown: "a",
          caseUp: "A",
          capsLock: "A",
          shiftCaps: "a",
        },
    },
    {
        name: "KeyS",
        rus: {
          caseDown: "ы",
          caseUp: "Ы",
          capsLock: "Ы",
          shiftCaps: "ы",
        },
        eng: {
          caseDown: "s",
          caseUp: "S",
          capsLock: "S",
          shiftCaps: "s",
        },
    },
    {
        name: "KeyD",
        rus: {
          caseDown: "в",
          caseUp: "В",
          capsLock: "В",
          shiftCaps: "в",
        },
        eng: {
          caseDown: "d",
          caseUp: "D",
          capsLock: "D",
          shiftCaps: "d",
        },
    },
    {
        name: "KeyF",
        rus: {
          caseDown: "а",
          caseUp: "А",
          capsLock: "А",
          shiftCaps: "а",
        },
        eng: {
          caseDown: "f",
          caseUp: "F",
          capsLock: "F",
          shiftCaps: "f",
        },
    },
    {
        name: "KeyG",
        rus: {
          caseDown: "п",
          caseUp: "П",
          capsLock: "П",
          shiftCaps: "п",
        },
        eng: {
          caseDown: "g",
          caseUp: "G",
          capsLock: "G",
          shiftCaps: "g",
        },
    },
    {
        name: "KeyH",
        rus: {
          caseDown: "р",
          caseUp: "Р",
          capsLock: "Р",
          shiftCaps: "р",
        },
        eng: {
          caseDown: "h",
          caseUp: "H",
          capsLock: "H",
          shiftCaps: "h",
        },
    },
    {
        name: "KeyJ",
        rus: {
          caseDown: "о",
          caseUp: "О",
          capsLock: "О",
          shiftCaps: "о",
        },
        eng: {
          caseDown: "j",
          caseUp: "J",
          capsLock: "J",
          shiftCaps: "j",
        },
    },
    {
        name: "KeyK",
        rus: {
          caseDown: "л",
          caseUp: "Л",
          capsLock: "Л",
          shiftCaps: "л",
        },
        eng: {
          caseDown: "k",
          caseUp: "K",
          capsLock: "K",
          shiftCaps: "k",
        },
    },
    {
        name: "KeyL",
        rus: {
          caseDown: "д",
          caseUp: "Д",
          capsLock: "Д",
          shiftCaps: "д",
        },
        eng: {
          caseDown: "l",
          caseUp: "L",
          capsLock: "L",
          shiftCaps: "l",
        },
    },
    {
        name: "Semicolon",
        rus: {
          caseDown: "ж",
          caseUp: "Ж",
          capsLock: "Ж",
          shiftCaps: "ж",
        },
        eng: {
          caseDown: ";",
          caseUp: ":",
          capsLock: ":",
          shiftCaps: ";",
        },
    },
    {
        name: "Quote",
        rus: {
          caseDown: "э",
          caseUp: "Э",
          capsLock: "Э",
          shiftCaps: "э",
        },
        eng: {
          caseDown: "'",
          caseUp: '"',
          capsLock: '"',
          shiftCaps: "'",
        },
    },
    {
        name: "Enter",
        rus: {
          caseDown: "Enter",
          caseUp: "Enter",
          capsLock: "Enter",
          shiftCaps: "Enter",
        },
        eng: {
          caseDown: "Enter",
          caseUp: "Enter",
          capsLock: "Enter",
          shiftCaps: "Enter",
        },
    },
];

const fourthRow = [
    {
        name: "ShiftLeft",
        rus: {
          caseDown: "Shift",
          caseUp: "Shift",
          capsLock: "Shift",
          shiftCaps: "Shift",
        },
        eng: {
          caseDown: "Shift",
          caseUp: "Shift",
          capsLock: "Shift",
          shiftCaps: "Shift",
        },
    },
    {
        name: "KeyZ",
        rus: {
          caseDown: "я",
          caseUp: "Я",
          capsLock: "Я",
          shiftCaps: "я",
        },
        eng: {
          caseDown: "z",
          caseUp: "Z",
          capsLock: "Z",
          shiftCaps: "z",
        },
    },
    {
        name: "KeyX",
        rus: {
          caseDown: "ч",
          caseUp: "Ч",
          capsLock: "Ч",
          shiftCaps: "Ч",
        },
        eng: {
          caseDown: "x",
          caseUp: "X",
          capsLock: "X",
          shiftCaps: "x",
        },
    },
    {
        name: "KeyC",
        rus: {
          caseDown: "с",
          caseUp: "С",
          capsLock: "С",
          shiftCaps: "с",
        },
        eng: {
          caseDown: "c",
          caseUp: "C",
          capsLock: "C",
          shiftCaps: "c",
        },
    },
    {
        name: "KeyV",
        rus: {
          caseDown: "м",
          caseUp: "М",
          capsLock: "М",
          shiftCaps: "м",
        },
        eng: {
          caseDown: "v",
          caseUp: "V",
          capsLock: "V",
          shiftCaps: "v",
        },
    },
    {
        name: "KeyB",
        rus: {
          caseDown: "и",
          caseUp: "И",
          capsLock: "И",
          shiftCaps: "и",
        },
        eng: {
          caseDown: "b",
          caseUp: "B",
          capsLock: "B",
          shiftCaps: "b",
        },
    },
    {
        name: "KeyN",
        rus: {
          caseDown: "т",
          caseUp: "Т",
          capsLock: "Т",
          shiftCaps: "т",
        },
        eng: {
          caseDown: "n",
          caseUp: "N",
          capsLock: "N",
          shiftCaps: "n",
        },
    },
    {
        name: "KeyM",
        rus: {
          caseDown: "ь",
          caseUp: "Ь",
          capsLock: "Ь",
          shiftCaps: "ь",
        },
        eng: {
          caseDown: "m",
          caseUp: "M",
          capsLock: "M",
          shiftCaps: "m",
        },
    },
    {
        name: "Comma",
        rus: {
          caseDown: "б",
          caseUp: "Б",
          capsLock: "Б",
          shiftCaps: "б",
        },
        eng: {
          caseDown: ",",
          caseUp: "<",
          capsLock: "<",
          shiftCaps: ",",
        },
    },
    {
        name: "Period",
        rus: {
          caseDown: "ю",
          caseUp: "Ю",
          capsLock: "Ю",
          shiftCaps: "ю",
        },
        eng: {
          caseDown: ".",
          caseUp: ">",
          capsLock: ">",
          shiftCaps: ".",
        },
    },
    {
        name: "Slash",
        rus: {
          caseDown: ".",
          caseUp: ",",
          capsLock: ",",
          shiftCaps: ".",
        },
        eng: {
          caseDown: "/",
          caseUp: "?",
          capsLock: "?",
          shiftCaps: "/",
        },
    },
    {
        name: "ArrowUp",
        rus: {
          caseDown: "▲",
          caseUp: "▲",
          capsLock: "▲",
          shiftCaps: "▲",
        },
        eng: {
          caseDown: "▲",
          caseUp: "▲",
          capsLock: "▲",
          shiftCaps: "▲",
        },
    },
    {
        name: "ShiftRight",
        rus: {
          caseDown: "Shift",
          caseUp: "Shift",
          capsLock: "Shift",
          shiftCaps: "Shift",
        },
        eng: {
          caseDown: "Shift",
          caseUp: "Shift",
          capsLock: "Shift",
          shiftCaps: "Shift",
        },
    },
];
 
const fifthRow = [
    {
        name: "ControlLeft",
        rus: {
          caseDown: "Ctrl",
          caseUp: "Ctrl",
          capsLock: "Ctrl",
          shiftCaps: "Ctrl",
        },
        eng: {
          caseDown: "Ctrl",
          caseUp: "Ctrl",
          capsLock: "Ctrl",
          shiftCaps: "Ctrl ",
        },
    },
    {
        name: "MetaLeft",
        rus: {
          caseDown: "Win",
          caseUp: "Win",
          capsLock: "Win",
          shiftCaps: "Win",
        },
        eng: {
          caseDown: "Win",
          caseUp: "Win",
          capsLock: "Win",
          shiftCaps: "Win",
        },
    },
    {
        name: "AltLeft",
        rus: {
          caseDown: "Alt",
          caseUp: "Alt",
          capsLock: "Alt",
          shiftCaps: "Alt",
        },
        eng: {
          caseDown: "Alt",
          caseUp: "Alt",
          capsLock: "Alt",
          shiftCaps: "Alt",
        },
    },
    {
        name: "Space",
        rus: {
          caseDown: " ",
          caseUp: " ",
          capsLock: " ",
          shiftCaps: " ",
        },
        eng: {
          caseDown: " ",
          caseUp: " ",
          capsLock: " ",
          shiftCaps: " ",
        },
    },
    {
        name: "AltRight",
        rus: {
          caseDown: "Alt",
          caseUp: "Alt",
          capsLock: "Alt",
          shiftCaps: "Alt",
        },
        eng: {
          caseDown: "Alt",
          caseUp: "Alt",
          capsLock: "Alt",
          shiftCaps: "Alt",
        },
    },
    {
        name: "ArrowLeft",
        rus: {
          caseDown: "◄",
          caseUp: "◄",
          capsLock: "◄",
          shiftCaps: "◄",
        },
        eng: {
          caseDown: "◄",
          caseUp: "◄",
          capsLock: "◄",
          shiftCaps: "◄",
        },
    },
    {
        name: "ArrowDown",
        rus: {
          caseDown: "▼",
          caseUp: "▼",
          capsLock: "▼",
          shiftCaps: "▼",
        },
        eng: {
          caseDown: "▼",
          caseUp: "▼",
          capsLock: "▼",
          shiftCaps: "▼",
        },
    },
    {
        name: "ArrowRight",
        rus: {
          caseDown: "►",
          caseUp: "►",
          capsLock: "►",
          shiftCaps: "►",
        },
        eng: {
          caseDown: "►",
          caseUp: "►",
          capsLock: "►",
          shiftCaps: "►",
        },
    },
    {
        name: "ControlRight",
        rus: {
          caseDown: "Ctrl",
          caseUp: "Ctrl",
          capsLock: "Ctrl",
          shiftCaps: "Ctrl",
        },
        eng: {
          caseDown: "Ctrl",
          caseUp: "Ctrl",
          capsLock: "Ctrl",
          shiftCaps: "Ctrl",
        },
    },
];

const rows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];




// insert  rows
const insertKeyboardsRows = () => {
    const keyboardRowsHTML = rows
        .map(
            (row) => 
            `<div class = "keyboard_row row">${row
                .map( 
                    (item) => 
                    `<div class="keyboard_key key ${item.name}">
                       <span class="rus hidden">
                           <span class="caseDown">${item.rus.caseDown}</span>
                           <span class="caseUp hidden">${item.rus.caseUp}</span>
                           <span class="capsLock hidden">${item.rus.capsLock}</span>
                           <span class="shiftCaps hidden">${item.rus.shiftCaps}</span>
                       </span>
                       <span class="eng ">
                           <span class="caseDown">${item.eng.caseDown}</span>
                           <span class="caseUp hidden">${item.eng.caseUp}</span>
                           <span class="capsLock hidden">${item.eng.capsLock}</span>
                           <span class="shiftCaps hidden">${item.eng.shiftCaps}</span>
                       </span>
                    </div>`
                )
                .reduce((prevItem, currentItem) => prevItem + currentItem, "")} 
            </div>`
        )
        .reduce((prevItem, currentItem) => prevItem + currentItem, "");
        const keyboardContainer = document.querySelector(".body_keyboard");
        keyboardContainer.innerHTML = keyboardRowsHTML;
};


// Add EventListener when pressed a key
const toggleClassPressKey = () => {
    
    let ctrll, altl;
    document.addEventListener("keydown", (e) => {
      const code = e.code;
      if( code == 'ControlLeft'){
        ctrll = true;
      };
      if(code == 'AltLeft'){
        altl = true;
      };
      if(code == 'ShiftLeft' || code == 'ShiftRight'){
        document.querySelectorAll('.caseDown').forEach((el) => {
          el.classList.toggle("hidden");
        });
        document.querySelectorAll('.caseUp').forEach((el) => {
          el.classList.toggle("hidden");
        });
        return;
      };

    });
    document.addEventListener("keydown", (e) => {
      const code = e.code;
      let active = document.querySelector(`.${code}`).classList.contains("active");
      let rowss = rows.flat();

      if(code == 'CapsLock'){
        document.querySelectorAll('.caseDown').forEach((el) => {
          el.classList.toggle("hidden");
        });
        document.querySelectorAll('.capsLock').forEach((el) => {
          el.classList.toggle("hidden");
        });
          if(active == true){
            document.querySelector(`.${code}`).classList.remove("active");
          } else {
            document.querySelector(`.${code}`).classList.add("active");
          }
        return;
      };

      // Add active class to the pressed key
      document.querySelector(`.${code}`).classList.add("active");

      if(code == 'AltLeft' && ctrll == true){
        document.querySelectorAll('.eng').forEach((el) => {
          el.classList.toggle("hidden");
        });
        document.querySelectorAll('.rus').forEach((el) => {
          el.classList.toggle("hidden");
        });
        return;
      };
      if(code == 'ControlLeft' && altl == true){
        document.querySelectorAll('.eng').forEach((el) => {
          el.classList.toggle("hidden");
        });
        document.querySelectorAll('.rus').forEach((el) => {
          el.classList.toggle("hidden");
        });
        return;
      };

      if(code == 'ShiftLeft' || code == 'ShiftRight' || code == "ControlLeft" || code == 'AltLeft' || code == 'MetaLeft' || code == 'ControlRight' || code == 'AltRight' || code == 'Delete' ){ return; };
      
      if(code == "Backspace"){
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        return;
      };
      if(code == 'Tab') {
        textarea.value += "\t";
        return;
      };
      if(code == 'Enter'){
        textarea.value += "\n";
        return;
      };
      
      
      for(let i = 0; i < rowss.length; i++){ 
        if(code == rowss[i].name){
          textarea.value += rowss[i].eng.caseDown; 
        }
      };      
    });

    //Delete active class 
    document.addEventListener("keyup", (e) => {
        ctrll = false,
        altl = false;
        const code = e.code;
        if(code == 'CapsLock'){
          return;
        };
        if(code == 'ShiftLeft' || code == 'ShiftRight'){
          document.querySelectorAll('.caseUp').forEach((el) => {
            el.classList.toggle("hidden");
          });
          document.querySelectorAll('.caseDown').forEach((el) => {
            el.classList.toggle("hidden");
          });
        };
        document.querySelector(`.${code}`).classList.remove("active");
    })
};


// Add EventListener when clicked a key
const toggleClassClickKey = () => {
    const keyboard = document.querySelector(".body_keyboard");
    keyboard.addEventListener("mousedown", (e) => {
      if (e.target.tagName !== "SPAN") {
        return;
      };
  
      textarea.value += e.target.innerHTML;
  
      const key = e.target.closest(".key");
      key.classList.add("active");
    });
    keyboard.addEventListener("mouseup", (e) => {
        const key = e.target.closest(".key");
        key.classList.remove("active");
    });
};