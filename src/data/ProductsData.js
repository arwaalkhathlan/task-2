// ProductData.js
import naseem from '../images/naseem.jpeg';
import naseem2 from '../images/naseem_story.jpeg';

import sabra from '../images/sabra.png';
import sabra2 from '../images/sabra_story.png';
import sabra3 from '../images/sabra_story_2.png';

import fe from '../images/fe.jpeg';
import fe2 from '../images/fe_story.jpeg';
import fe3 from '../images/fe_story_2.jpeg';

const products = [
  {
    id: '1',
    name: 'صبرا',
    storyname: 'قصة صبرا',
    price: '50',
    imageUrl: sabra,
    imageUrl2: sabra2,
    imageUrl3: sabra3,
    description: 'استمتع بالجمال الفريد والتحمل الرائع مع نبتة الصبار. إن الصبار نبتة مذهلة تتميز بأوراقها اللحمية والمتشابكة وقدرتها على التكيف في ظروف النمو القاسية. إنها تنمو بشكل رائع في المناطق الجافة وتعتبر مثالية لأولئك الذين لديهم وقت محدود للعناية بالنباتات.',
    story: `في أرضٍ بعيدة، عاشت نبتة صبارية رائعة تُدعى صبرا. كانت صبرا تمتلك سحرًا خاصًا يجذب الناس إليها، فقد كانت وردة صغيرة من الصبر والأناقة في عالم النباتات. \n\nصبرا كانت لطيفة ومحبوبة من قبل الجميع. كانت تضفي أجواءً من السكينة والجمال حيثما توجد. كانت تحمل أوراقًا سميكة ومتشابكة، تشبه الذراعات المحمية بالشوك، وتعكس قوة صمودها في ظروف البيئة القاسية. \n\nكانت صبرا تتألق بألوانها الخضراء الزاهية وأشكالها الفريدة، مما يمنحها مظهرًا مدهشًا. ولكن ما جعل صبرا مميزة حقًا هي مزاياها العديدة واحتياجاتها المتدنية للعناية. كانت صبرا تحب الشمس والحرارة، وكانت تنمو بشكل رائع في المناطق الجافة. لا تحتاج إلى سقي متكرر، بل كانت تتحمل جفاف التربة وتستفيد منه. كما أن صبرا كانت قادرة على تخزين الماء في أنسجتها، مما يساعدها على البقاء على قيد الحياة في فترات الجفاف. \n\nكانت صبرا أيضًا نبتة قوية ومتينة. كانت تتحمل الظروف القاسية وتستمر في النمو حتى في ظل القليل من الموارد. كما أنها قادرة على التكيف مع مختلف البيئات، سواء كانت في الأراضي الصحراوية القاحلة أو في الحدائق العصرية. في القرية التي عاشت فيها صبرا، كان الناس يعتبرونها رمزًا للصمود والأمل. كانوا يتعلمون منها قوة الاستمرار في الحياة رغم الصعاب. تعلموا منها أيضًا أهمية القدرة على التكيف والتحمل في مواجهة التحديات. \n\nوهكذا، استمرت صبرا في إضفاء السعادة والجمال على العالم من حولها، وتذكير الناس بأهمية الصبر والقوة الداخلية. كانت قصة صبرا تعلمنا أن حتى في الظروف الصعبة، يمكننا الازدهار والنمو وتحقيق الجمال.`,
    light: [
      'تحتاج النبتة الى ضوء ساطع إلى متوسط مرشح مثل ضوء النافذة أو الانارة الصناعية للغرفة.'
    ],
    watering: [
      'لا يتم ري النبتة إلا بعد جفاف التربة.'
    ],
    temp: [
      'تحتاج النبتة الى جو معتدل يناسبها درجة حرارة الغرفة الطبيعية، والجو الدافئ حتى 35 درجة مئوية.'
    ]
  },
  {
    id: '2',
    name: 'فيّ',
    storyname: 'قصة فيّ ولينا ',
    price: '150',
    imageUrl: fe,
    imageUrl2: fe2,
    imageUrl3: fe3,
    description: 'استمتع بجمال وفوائد نبتة الألوفيرا. إن الألوفيرا نبتة مذهلة تتميز بأوراقها السميكة والمنتفخة المليئة بالجل المهدئ والمرطب. تعتبر الألوفيرا طبيعة متعددة الاستخدامات، حيث يتم استخدامها في العناية بالبشرة والشعر والصحة العامة.',
    story: `في أرضٍ بعيدة، عاشت نبتةٌ سحرية تُدعى فَيّ. كانت فَيّ تمتلك سحرًا خاصًا يجذب الناس إليها بلطفها وجمالها الفريد. كانت تنمو بأوراقها الطويلة والمتشابكة. فَيّ كانت تعتبر من أجود الألوفيرا في العالم، فهي تحمل في طياتها مزاياً عديدة وتحتاج للعناية القليلة.\n\nتعشق فَيّ أشعة الشمس الدافئة، وكانت تزدهر في المناطق الجافة والمشمسة. تمتلك القدرة الفريدة على تخزين الماء في أنسجتها، مما يمدّها بالمغذيات ويساعدها على البقاء على قيد الحياة في فترات الجفاف. فَيّ تمتاز أيضًا بصلابتها وقوتها. تتحمل الظروف القاسية وتستمر في النمو رغم قلة الموارد. تستطيع التأقلم مع مختلف البيئات، سواء كانت في الصحارى القاحلة أو في الحدائق العصرية. \n\nفي إحدى المدن، قابلت فَيّ فتاةً صغيرة تُدعى لينا. كانت لينا تعاني من ضغوط الحياة وتشعر بالتعب والإرهاق. ولكن عندما التقت بفَيّ، تغيرت حياتها تمامًا. أصبحت فَيّ رفيقةً لها، وكانت تأخذها في رحلاتٍ سحرية في عالمها الأخضر. لينا تعلمت من فَيّ الصبر والاستمرار. تعلمت أن الحياة قد تكون قاسية، ولكن لا يجب عليها أن تستسلم. في أوقات الجفاف، كانت فَيّ تذكر لينا أنها يمكنها الازدهار، حتى في ظروف صعبة. وكانت تلهمها بقوتها وجمالها الداخلي. \n\nمع مرور الوقت، أصبحت لينا وفَيّ أصدقاء مقربين. واكتسبت لينا الصبر والتحمل من خلال رؤية فَيّ وهي تواجه التحديات بثبات. وهكذا تذكرنا قصة فَيّ بأن القوة والجمال يمكن أن يتواجدا في المكان الأكثر ظروفًا قاسية، وأن العناية والاهتمام يمكن أن يجعلان العالم أكثر جمالًا وإشراقًا.`,
    light:
      [
        'تحتاج الألوفيرا إلى إضاءة ساطعة ومباشرة لمدة 6 إلى 8 ساعات يومياً. يُفضل وضعها قرب نافذة مشمسة حتى تحصل على الضوء الطبيعي الكافي.',
        ' وضع الألوفيرا في الهواء الطلق أيضًا، وخاصة في الأماكن ذات المناخ الدافئ والمعتدل.'
      ],


    watering:
      [
        'تحتاج الألوفيرا إلى ري معتدل وغير متكرر. يُنصح بالسماح للتربة بتجفيف تماماً بين جلسات الري.',
        'قم بالري عندما تشعر بأن الأرضية قد جفت تمامًا. تذكر أن الألوفيرا تخزن الماء في أوراقها اللحمية، وبالتالي يمكنها التحمل لفترات طويلة بدون ري.آن '
      ],
    temp: [
      'الألوفيرا تنمو بشكل جيد في درجات حرارة معتدلة، تتراوح بين 15 إلى 30 درجة مئوية.',
      'تفضل الألوفيرا المناطق ذات المناخ الدافئ ولكنها يمكن أن تتحمل درجات حرارة أقل في الشتاء بشرط عدم تعرضها للصقيع.'
    ]
  },
  {
    id: '3',
    name: 'نسيم',
    storyname: 'قصة نسيم ',
    price: '250',
    imageUrl: naseem,
    imageUrl2: naseem2,
    imageUrl3: naseem,
    description: 'استمتع بجمال الطبيعة في منزلك مع نبتة البونساي الرائعة. تعتبر نباتات البونساي قطعًا فنية صغيرة تجمع بين الجمال الطبيعي والأناقة الفنية. تُقدم لك فرصة لتجربة الراحة والسكينة والارتباط مع الطبيعة في مساحة داخلية صغيرة.',
    story: `كان هناك صبي صغير اسمه يوسف، كان يهوى الطبيعة والنباتات. في إحدى رحلاته في الغابة، وجد نبتة صغيرة جميلة ملفوفة بأوراق صغيرة وناعمة تشبه البونساي. لم يستطع يوسف أن يمر بجانبها دون أن يلتفت إليها، فقرر أن يأخذها معه إلى المنزل. قام يوسف بتسمية النبتة "نَسيم"، لأنها تذكره بنسيم الربيع اللطيف والمنعش.
  
    بدأ يعتني بها بعناية وبصبر، وأصبحت نَسيم جزءًا لا يتجزأ من حياته. مرت الأيام، ونَسيم بدأت تكبر وتتطور تحت رعاية يوسف اللطيف. كانت تتمتع بمزايا رائعة، فقد كانت صغيرة الحجم ومنظرها جميل ومدهش. كانت تعكس الحياة والقوة في كل ورقة صغيرة تنموها. كذلك، تعلم يوسف من نَسيم الصبر والتركيز، حيث كان يحتاج إلى رعاية مستمرة وتوفير الظروف المناسبة لنموها. مع مرور الوقت، أصبحت نَسيم مصدرًا للسلام والهدوء بالنسبة ليوسف.
  
    كانت النبتة تذكره بأهمية الحفاظ على الطبيعة ورعايتها. بفضل رعاية يوسف المستمرة، نَسيم نمت لتصبح بونساي مدهشة. كانت تشع بالجمال والأناقة. أصبحت لديها جذع قوي وأغصان متفرعة تحمل أوراقًا صغيرة ومتفتحة. كانت نَسيم تعكس القوة والصلابة على الرغم من حجمها الصغير. أصبحت نَسيم مثالًا للعناية والصبر. عندما رأى يوسف كيف تحوّلت نَسيم من نبتة صغيرة إلى بونساي رائعة، أدرك قيمة العناية والاهتمام بالأشياء الصغيرة في الحياة.
  
    وهكذا، استمرت قصة نَسيم ويوسف في النمو والتطور. تعلم يوسف الكثير من خلال رعاية هذه النبتة الصغيرة، وأصبحت نَسيم رمزًا للقوة والجمال الذي يمكن أن ينمو من خلال العناية والاهتمام المستمر.`
    ,
    light: [
      'يحتاج البونساي إلى إضاءة مشرقة ومتوسطة للحفاظ على نموه الصحي. قم بوضعها في مكان مشمس جزئيًا حيث تحصل على ضوء الشمس المباشر لبضع ساعات في اليوم.',
      'إذا لم يكن لديك وصول كافٍ للضوء الطبيعي، يمكنك استخدام مصابيح النمو الاصطناعي لتوفير الإضاءة اللازمة.'
    ],
    watering: [
      'يجب أن تكون عملية الري منتظمة ومتوازنة. قم بري البونساي عندما تكون التربة قد جفت قليلاً، ولكن تجنب جفافها الشديد أو غرقها بالماء.',
      'قم برش الماء بلطف على جميع جوانب البونساي للحفاظ على ترطيب الأوراق وتجنب جفافها'
    ],
    temp: [
      'البونساي تحتاج إلى درجات حرارة معتدلة. تكون الحرارة المثالية للبونساي في نطاق 15-25 درجة مئوية.',
      'تجنب تعريض البونساي لتقلبات حرارية حادة أو تغيرات درجة الحرارة المفرطة.'
    ]
  }
];

export default products;
