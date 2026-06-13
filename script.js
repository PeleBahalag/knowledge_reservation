// Texts.

var subject_0_headlines = ['מטרת הלומדה:',
    'איך זה עובד:', 'איך זה עובד:'
];

var subject_0_text = [
    `שימור הידע בגדוד הפיקוד לכלל בעלי התפקידים - מג”ד, מ”פים, קציני מטה.

כלל הפורמטים, המצגות הרלוונטיות, מצעים לדיון נמצאים באותו המקום וביישור קו לכל הגדוד, כך שאין שוני וקיימת ודאות מתמדת מהם הדברים על פיהם ואיתם עובדים.`,
`נוהל ש״י (שימור הידע) נמצא סה״כ ב-3 מקומות. 
1. תיקיית המקור הנמצאת אצל קצינת הצפה.
2. תיקיית העתק הנמצאת בשיתוף גדוד, משם לוקחים את כל החומרים.
3. אתר חטיבה, למען שימור הידע הנוסף ושימוש בחומרים למי שאין גישה לתיקיות בהכרח.`,
`במהלך המחזור, הקציני מטה מעדכנים את הקבצים שלהם (כל אחד בציר שלו) על תיקיית המקור אשר נמצאת אצל הקצינת צפ”ה. בסוף כל מחזור (תקופת ההכנם) קצינת הצפה מוחקת את תיקיית העתק אשר נמצאת בשיתוף גדוד ושמה שם  מחדש את כל הקבצים שנמצאים בתיקיית המקור - כי הם המעודכנים ביותר! 
וכך המנגנון נשמר כל מחזור מחדש, עם הקבצים הכי מעודכנים.
(כנ״ל על אתר החטיבה בסוף המחזור).`
];

const SUB_1_FILES_NUMBER = 14;
var subject_1_headlines = ['הסבר כללי:', 'דוגמאות:'];
var subject_1_text = [`האזור בו נמצאים דברים הקשורים להכשרה עצמה ודברים נוספים. 

דוגמאות: סק"ם חי"ג, תיקי יסוד, תיקי חניך, מצעים לדיונים כאלה ואחרים, פורמטים לישיבות וכו'.`];

const SUB_2_FILES_NUMBER = 6;
var subject_2_headlines = ['הסבר כללי:', 'דוגמאות:'];
var subject_2_text = [`כל הדברים הקשורים לעולם המבצעי.

דוגמאות: סד"פ תפיסת כוננות, הופ"א וכו'.`];

const SUB_3_FILES_NUMBER = 13;
var subject_3_headlines = ['הסבר כללי:', 'דוגמאות:'];
var subject_3_text = [`כל הדברים הקשורים לעולמות הכוח אדם.

דוגמאות: ועדות הערכה, דוחות סיכום הכשרה, כנס קקצ וכו'.`];

const SUB_4_FILES_NUMBER = 10;
var subject_4_headlines = ['הסבר כללי:', 'דוגמאות:'];
var subject_4_text = [`כל הדברים הקשורים בשגרה ושוטף.

דוגמאות: מסמך מופעים, מצע למסדרי שגרה וכו'.`];

var subject_5_headlines = ['הסבר כללי:'];
var subject_5_text = [`המקום שבו נמצאים הקישורים לכל הקבצים הקיימים בנוהל ש"י ע"פ תחומים.
    
סוג, הפלטפורמה בה הם נגישים, מי הקצין מטה האחראי על העלאת ועדכון הקובץ והכי חשוב - קישור מעודכן לקובץ.`];

NUMBER_OF_SUBJECTS = 6;

let subjectText = '';
let subjectHeadline = '';
let progressBar;
let forwardArrow;
let backwardArrow;


// Start the coding.
window.addEventListener("load", () => {
    let path = window.location.pathname;

    if (path.includes('start')) {
        initializeStart();
    } else if (path.includes('main')) {
        initializeMain();
    } else {
        console.log('error');
    }
});

const initializeStart = () => {
    document.getElementById('start-button').addEventListener('click', () => {
        window.location.href = "main.html";
    });
}

// Moving to a now html file.
const initializeMain = () => {
    subjectText = document.getElementById('subject-text');
    subjectHeadline = document.getElementById('subject-headline');
    progressBar = document.getElementById('progress-bar');
    forwardArrow = document.getElementById('forward-arrow');
    backwardArrow = document.getElementById('backward-arrow');

    for (let i = 0; i < NUMBER_OF_SUBJECTS; i++) {
        document.getElementById(`subject_${i}`).addEventListener('click', changingText);
    }
}

const changingText = (event) => {
    document.querySelectorAll('.cerrent-subject').forEach(element => {
        element.classList.remove('cerrent-subject')
    });

    progressBar.src = 'sources/images/progress bar 0.svg';
    progressBar.style.opacity = '1';
    forwardArrow.style.opacity = '1';
    backwardArrow.style.opacity = '0';
        
    let value = event.target.textContent;
    let id = event.target.id;
    let number = id.slice(8,9);

    if(number.includes('5')) {
        progressBar.style.opacity = '0';
        forwardArrow.style.opacity = '0';
    }

    if(number.includes('2')) {
        progressBar.src = 'sources/images/progress bar small 0.svg';
    }

    event.target.classList.add('cerrent-subject');
    document.getElementById('sub-headline').innerText = `${value}:`;

    console.log(`${event}, ${value}, ${id}, ${number}`);
    const curHeadline = window[`subject_${number}_headlines`];
    const curText = window[`subject_${number}_text`];
    const curNext = window[`subject${number}`];

    subjectHeadline.innerText = curHeadline[0];
    subjectText.innerText = curText[0];

    // document.getElementById('forward-arrow').addEventListener('click', curNext);
    forwardArrow.onclick = curNext;
}




// פתיח
var subject0 = () => {
    forwardArrow.onclick = null;

    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';
    forwardArrow.style.opacity = '1';

    backwardArrow.onclick = subject0Old;

    subjectHeadline.innerText = subject_0_headlines[1];
    subjectText.innerText = subject_0_text[1];

    forwardArrow.onclick = subject0Next;
}

const subject0Next = () => {
    forwardArrow.onclick = null;
    backwardArrow.onclick = subject0;
    // document.removeEventListener("click", subject0Next);
    progressBar.src = 'sources/images/progress bar 2.svg';
    forwardArrow.style.opacity = '0';

    subjectHeadline.innerText = subject_0_headlines[2];
    subjectText.innerText = subject_0_text[2];
}

const subject0Old = () => {
    forwardArrow.onclick = null;
    progressBar.src = 'sources/images/progress bar 0.svg';
    backwardArrow.style.opacity = '0';
    forwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_0_headlines[0];
    subjectText.innerText = subject_0_text[0];

    forwardArrow.onclick = subject0;
}



// הכשרה
var subject1 = () => {
    forwardArrow.onclick = null;
    forwardArrow.style.opacity = '1';

    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_1_headlines[1];
    subjectText.innerText = '';

    for(let i = 1; i <= 8; i++) {
        const newImage = document.createElement('img');
        newImage.src = `sources/images/תיקיות/‏‏subject_1/${i}.svg`;
        newImage.classList = 'foldersImg';
        newImage.id = `foldersImg_sub1_${i}`;
        
        subjectText.appendChild(newImage);
    }
    
    forwardArrow.onclick = subject1Next;
    backwardArrow.onclick = subject1Old;
}

const subject1Next = () => {
    forwardArrow.onclick = null;

    progressBar.src = 'sources/images/progress bar 2.svg';
    forwardArrow.style.opacity = '0';

    subjectHeadline.innerText = subject_1_headlines[1];
    subjectText.innerText = '';

    for(let i = 9; i <= SUB_1_FILES_NUMBER; i++) {
        const newImage = document.createElement('img');
        newImage.src = `sources/images/תיקיות/‏‏subject_1/${i}.svg`;
        newImage.classList = 'foldersImg';
        newImage.id = `foldersImg_sub1_${i}`;
        
        subjectText.appendChild(newImage);
    }

    backwardArrow.onclick = subject1;
}

const subject1Old = () => {
    forwardArrow.onclick = null;

    progressBar.src = 'sources/images/progress bar 0.svg';
    backwardArrow.style.opacity = '0';
    forwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_1_headlines[0];
    subjectText.innerText = subject_1_text[0];

    forwardArrow.onclick = subject1;
}





// מבצעי
var subject2 = () => {
    progressBar.src = 'sources/images/progress bar small 1.svg';
    backwardArrow.style.opacity = '1';
    forwardArrow.style.opacity = '0'

    subjectHeadline.innerText = subject_2_headlines[1];
    subjectText.innerText = '';

    for(let i = 1; i <= SUB_2_FILES_NUMBER; i++) {
        const newImage = document.createElement('img');
        newImage.src = `sources/images/תיקיות/‏‏subject_2/${i}.svg`;
        newImage.classList = 'foldersImg';
        newImage.id = `foldersImg_sub2_${i}`;
        
        subjectText.appendChild(newImage);
    }

    backwardArrow.onclick = subject2Old;
}

const subject2Old = () => {
    forwardArrow.onclick = null;
    
    progressBar.src = 'sources/images/progress bar small 0.svg';
    backwardArrow.style.opacity = '0';
    forwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_2_headlines[0];
    subjectText.innerText = subject_2_text[0];

    forwardArrow.onclick = subject2;
}



// כוח אדם
var subject3 = () => {
    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_1_headlines[1];
    subjectText.innerText = '';

    for(let i = 1; i <= 8; i++) {
        const newImage = document.createElement('img');
        newImage.src = `sources/images/תיקיות/‏‏subject_3/${i}.svg`;
        newImage.classList = 'foldersImg';
        newImage.id = `foldersImg_sub1_${i}`;
        
        subjectText.appendChild(newImage);
    }
    
    forwardArrow.onclick = subject3Next;
    backwardArrow.onclick = subject3Old;
}

const subject3Next = () => {
    forwardArrow.onclick = null;

    progressBar.src = 'sources/images/progress bar 2.svg';
    forwardArrow.style.opacity = '0';

    subjectHeadline.innerText = subject_3_headlines[1];
    subjectText.innerText = '';

    for(let i = 9; i <= SUB_3_FILES_NUMBER; i++) {
        const newImage = document.createElement('img');
        newImage.src = `sources/images/תיקיות/‏‏subject_3/${i}.svg`;
        newImage.classList = 'foldersImg';
        newImage.id = `foldersImg_sub3_${i}`;
        
        subjectText.appendChild(newImage);
        
        if(i === 13) {
            newImage.addEventListener('click', sub3Info);
        }
    }

    backwardArrow.onclick = subject3;
}

const subject3Old = () => {
    forwardArrow.onclick = null;

    progressBar.src = 'sources/images/progress bar 0.svg';
    backwardArrow.style.opacity = '0';
    forwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_3_headlines[0];
    subjectText.innerText = subject_3_text[0];

    forwardArrow.onclick = subject3;
}

const sub3Info = () => {
    const newText = document.createElement('p');
    newText.innerText = 'קיימות מגוון פקאות למופעים שונים - טקסי סיום, קליטות, מסעות וכדומה.';
    subjectText.appendChild(newText);
    console.log('hey');
}



// שיגרה
var subject4 = () => {
    // document.remove(forwardArrow);
    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_1_headlines[1];
    subjectText.innerText = '';

    for(let i = 1; i <= 8; i++) {
        const newImage = document.createElement('img');
        newImage.src = `sources/images/תיקיות/‏‏subject_4/${i}.svg`;
        newImage.classList = 'foldersImg';
        newImage.id = `foldersImg_sub1_${i}`;
        
        subjectText.appendChild(newImage);

        if(i === 8) {
            newImage.addEventListener('click', sub4Info1);
        }
    }
    forwardArrow.onclick = subject4Next;
    backwardArrow.onclick = subject4Old;
}

const subject4Next = () => {
    forwardArrow.onclick = null;

    progressBar.src = 'sources/images/progress bar 2.svg';
    forwardArrow.style.opacity = '0';

    subjectHeadline.innerText = subject_4_headlines[1];
    subjectText.innerText = '';

    for(let i = 9; i <= SUB_4_FILES_NUMBER; i++) {
        const newImage = document.createElement('img');
        newImage.src = `sources/images/תיקיות/‏‏subject_4/${i}.svg`;
        newImage.classList = 'foldersImg';
        newImage.id = `foldersImg_sub4_${i}`;
        
        subjectText.appendChild(newImage);

        if(i === 10) {
            newImage.addEventListener('click', sub4Info2);
        }
    }

    backwardArrow.onclick = subject4;
}

const subject4Old = () => {
    forwardArrow.onclick = null;

    progressBar.src = 'sources/images/progress bar 0.svg';
    backwardArrow.style.opacity = '0';
    forwardArrow.style.opacity = '1';

    subjectHeadline.innerText = subject_4_headlines[0];
    subjectText.innerText = subject_4_text[0];

    forwardArrow.onclick = subject4;
}

const sub4Info1 = () => {
    const newText = document.createElement('p');
    newText.innerText = 'ישנם מגוון פורמטים למצגות עבור ישיבות שונות.';
    subjectText.appendChild(newText);
    console.log('hey');
}

const sub4Info2 = () => {
    const newText = document.createElement('p');
    newText.innerText = 'ישיבת מטה שבועית, ישיבת מפקדים, ישיבת תכנון חודשית, מג”ד שיגרה, סגירת לו”ז, סטטוס בו”ם גדודי, פ”ע ק’ מטה שבועי, קפ”ק 2 לשבוע הבא.';
    subjectText.appendChild(newText);
    console.log('hey');
}


// // תוכן עיניינים
// var subject5 = () => {
//     // document.removeEventListener('click', subject5);
//     progressBar.style.opacity = '0';
//     forwardArrow.style.opacity = '0';

//     subjectHeadline.innerText = subject_1_headlines[1];
//     subjectText.innerText = '';
//     // console.log('sub5');
// }