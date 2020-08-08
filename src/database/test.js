const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async(db) => {
    proffyValue = {
        name: "Miguel Cassimiro",
        avatar: "https://avatars0.githubusercontent.com/u/64820512?s=460&u=f04a3fedcbf4823011d59f3994367c64c48932fe&v=4",
        whatsapp: "997751916",
        bio: "Iniciando no desenvolvimento Front End e voando baixo ja",
    }
    classValue = {
        subject: 1,
        cost: "15",
    }
    classScheduleValues = [{
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues });

    // const seletedProffys = await db.all("SELECT * FROM proffys");
    // console.log(seletedProffys);

    const selectedClassesProffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1
      ORDER BY proffys.name;
    `)
        // console.log(selectedClassesProffys);

    const selectedClassesSchedules = await db.all(`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = "1"
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "520"
      AND class_schedule.time_to > "520";
    `)
})