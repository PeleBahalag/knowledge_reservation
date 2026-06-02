// Text.
// Open;
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

var subject_1_headlines = ['הסבר כללי:'];
var subject_1_text = [`האזור בו נמצאים דברים הקשורים להכשרה עצמה ודברים נוספים. 

דוגמאות: סק"ם חי"ג, תיקי יסוד, תיקי חניך, מצעים לדיונים כאלה ואחרים, פורמטים לישיבות וכו'.`];

var subject_2_headlines = ['הסבר כללי:'];
var subject_2_text = [`כל הדברים הקשורים לעולם המבצעי.

דוגמאות: סד"פ תפיסת כוננות, הופ"א וכו'.`];

var subject_3_headlines = ['הסבר כללי:'];
var subject_3_text = [`כל הדברים הקשורים לעולמות הכוח אדם.

דוגמאות: ועדות הערכה, דוחות סיכום הכשרה, כנס קקצ וכו' `];

var subject_4_headlines = ['הסבר כללי:'];
var subject_4_text = [`כל הדברים הקשורים בשגרה ושוטף.

'דוגמאות: מסמך מופעים, מצע למסדרי שגרה וכו.`];

var subject_5_headlines = ['הסבר כללי:'];
var subject_5_text = [`המקום שבו נמצאים הקישורים לכל הקבצים הקיימים בנוהל ש"י ע"פ תחומים.
    
סוג, הפלטפורמה בה הם נגישים, מי הקצין מטה האחראי על העלאת ועדכון הקובץ והכי חשוב - קישור מעודכן לקובץ.`];

NUMBER_OF_SUBJECTS = 6;

let subjectText = '';
let subjectHeadline = '';

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

const initializeMain = () => {
    subjectText = document.getElementById('subject-text');
    subjectHeadline = document.getElementById('subject-headline');

    for (let i = 0; i < NUMBER_OF_SUBJECTS; i++) {
        document.getElementById(`subject_${i}`).addEventListener('click', changingText);
    }
}

const changingText = (event) => {
    let value = event.target.textContent;
    let id = event.target.id;
    let number = id.slice(8,9);

    console.log(value);
    console.log(id);
    console.log(number);

    // document.querySelectorAll('.cerrent-subject').forEach(element => {
    //     if (element.classList.contains)
    // })
    // forEach(element => {
        
    // })
    event.target.style.textDecoration = 'underline';

    document.getElementById('sub-headline').innerText = `${value}:`;

    switch (id) {
        case `subject_0`:
            subject0();
            break;
        case `subject_1`:
            subject1();
            break;
        case `subject_2`:
            subject2();
            break;
        case `subject_3`:
            subject3();
            break;
        case `subject_4`:
            subject4();
            break;
        case `subject_5`:
            subject5();
            break;
        default:
            console.log("error");
            break;
    }
}

const subject0 = () => {
    subjectHeadline.innerText = subject_0_headlines[0];
    subjectText.innerText = subject_0_text[0];
}

const subject1 = () => {
    subjectHeadline.innerText = subject_1_headlines[0];
    subjectText.innerText = subject_1_text[0];
}

const subject2 = () => {
    subjectHeadline.innerText = subject_2_headlines[0];
    subjectText.innerText = subject_2_text[0];
}

const subject3 = () => {
    subjectHeadline.innerText = subject_3_headlines[0];
    subjectText.innerText = subject_3_text[0];
}

const subject4 = () => {
    subjectHeadline.innerText = subject_4_headlines[0];
    subjectText.innerText = subject_4_text[0];
}

const subject5 = () => {
    subjectHeadline.innerText = subject_5_headlines[0];
    subjectText.innerText = subject_5_text[0];
}