// Mock Data cho giao diện Danh mục & Bài tập Dictation
export const DICTATION_CATEGORIES = [
  {
    id: 'short-stories',
    title: 'Short Stories',
    titleVi: 'Truyện Ngắn Thiếu Nhi & Đời Sống',
    description: 'Tuyển tập truyện kể sinh động với ngữ điệu tự nhiên, từ vựng gần gũi và phát âm rõ ràng, phù hợp cho người mới bắt đầu.',
    badge: 'A1 - B1',
    iconName: 'BookOpen',
    exercises: [
      { id: 'beauty-and-the-beast', title: 'Beauty And The Beast', level: 'B1', totalSentences: 182, duration: '12:35', mediaType: 'youtube' },
      { id: 'first-snowfall', title: '1. First snowfall', level: 'A1', totalSentences: 12, duration: '02:15', mediaType: 'audio' },
      { id: 'jessicas-first-day', title: "2. Jessica's first day of school", level: 'A1', totalSentences: 14, duration: '02:40', mediaType: 'audio' },
      { id: 'my-flower-garden', title: '3. My flower garden', level: 'A2', totalSentences: 16, duration: '03:10', mediaType: 'audio' },
      { id: 'going-camping', title: '4. Going camping', level: 'A2', totalSentences: 18, duration: '03:30', mediaType: 'audio' },
      { id: 'my-house', title: '5. My house', level: 'A1', totalSentences: 15, duration: '02:50', mediaType: 'audio' },
      { id: 'the-clever-monkey', title: '6. The Clever Monkey & Crocodile', level: 'A2', totalSentences: 22, duration: '04:15', mediaType: 'audio' },
      { id: 'the-little-red-hen', title: '7. The Little Red Hen', level: 'A1', totalSentences: 20, duration: '03:45', mediaType: 'audio' },
    ]
  },
  {
    id: 'daily-conversations',
    title: 'Daily Conversations',
    titleVi: 'Hội Thoại Giao Tiếp Hàng Ngày',
    description: 'Các đoạn hội thoại ngắn, tự nhiên trong các tình huống thực tế: chào hỏi, gia đình, nhà hàng, mua sắm và công sở.',
    badge: 'A1 - B2',
    iconName: 'MessageSquare',
    exercises: [
      { id: 'at-home-1', title: '1. At home (1)', level: 'A1', totalSentences: 10, duration: '01:45', mediaType: 'audio' },
      { id: 'at-home-2', title: '2. At home (2)', level: 'A1', totalSentences: 12, duration: '02:10', mediaType: 'audio' },
      { id: 'my-favorite-photographs', title: '3. My Favorite Photographs (1)', level: 'A2', totalSentences: 10, duration: '02:00', mediaType: 'audio' },
      { id: 'location-directions', title: '4. Location & Directions', level: 'A2', totalSentences: 15, duration: '02:45', mediaType: 'audio' },
      { id: 'location-2', title: '5. Location (2)', level: 'A2', totalSentences: 14, duration: '02:30', mediaType: 'audio' },
      { id: 'ordering-food', title: '6. Ordering Food at a Restaurant', level: 'B1', totalSentences: 16, duration: '03:00', mediaType: 'audio' },
      { id: 'hotel-checkin', title: '7. Hotel Check-in & Inquiries', level: 'B1', totalSentences: 18, duration: '03:20', mediaType: 'audio' },
    ]
  },
  {
    id: 'toeic-listening',
    title: 'TOEIC Listening',
    titleVi: 'Luyện Nghe TOEIC Part 3 & 4',
    description: 'Tập hợp các đoạn Short Conversations và Short Talks thương mại, hỗ trợ bắt từ khóa và luyện phản xạ gõ chuẩn xác.',
    badge: '450 - 800+ TOEIC',
    iconName: 'Award',
    exercises: [
      { id: 'toeic-conv-1', title: 'Conversation 1: Office Renovation', level: 'TOEIC 550+', totalSentences: 12, duration: '01:50', mediaType: 'audio' },
      { id: 'toeic-conv-2', title: 'Conversation 2: Rescheduling Delivery', level: 'TOEIC 650+', totalSentences: 15, duration: '02:20', mediaType: 'audio' },
      { id: 'toeic-conv-3', title: 'Conversation 3: Marketing Strategy', level: 'TOEIC 700+', totalSentences: 14, duration: '02:15', mediaType: 'audio' },
      { id: 'toeic-conv-4', title: 'Conversation 4: Travel Expenses Claim', level: 'TOEIC 750+', totalSentences: 16, duration: '02:35', mediaType: 'audio' },
      { id: 'toeic-talk-1', title: 'Short Talk 1: Airport Delay Notice', level: 'TOEIC 600+', totalSentences: 10, duration: '01:40', mediaType: 'audio' },
      { id: 'toeic-talk-2', title: 'Short Talk 2: Radio Weather Forecast', level: 'TOEIC 650+', totalSentences: 12, duration: '01:55', mediaType: 'audio' },
      { id: 'toeic-talk-3', title: 'Short Talk 3: Museum Tour Intro', level: 'TOEIC 700+', totalSentences: 14, duration: '02:10', mediaType: 'audio' },
      { id: 'toeic-talk-4', title: 'Short Talk 4: Conference Keynote Welcome', level: 'TOEIC 800+', totalSentences: 15, duration: '02:25', mediaType: 'audio' },
    ]
  },
  {
    id: 'ielts-listening',
    title: 'IELTS Listening',
    titleVi: 'Luyện Nghe Chép Chính Tả IELTS',
    description: 'Chuyên đề luyện chép chính tả bắt chính xác danh từ số nhiều, chữ số, tên riêng và từ vựng học thuật Section 1 đến Section 4.',
    badge: 'IELTS 5.0 - 8.0',
    iconName: 'GraduationCap',
    exercises: [
      { id: 'ielts-sec1-rental', title: 'Section 1: Accommodation Inquiry & Form Completion', level: 'IELTS 5.5', totalSentences: 14, duration: '02:30', mediaType: 'audio' },
      { id: 'ielts-sec2-park', title: 'Section 2: City Botanical Garden Guide Map', level: 'IELTS 6.5', totalSentences: 16, duration: '03:00', mediaType: 'audio' },
      { id: 'ielts-sec3-assignment', title: 'Section 3: Environmental Science Research Project', level: 'IELTS 7.0', totalSentences: 20, duration: '03:45', mediaType: 'audio' },
      { id: 'ielts-sec4-wildlife', title: 'Section 4: Marine Biology Academic Lecture', level: 'IELTS 7.5+', totalSentences: 22, duration: '04:10', mediaType: 'audio' },
    ]
  },
  {
    id: 'youtube-real-english',
    title: 'YouTube & Real English',
    titleVi: 'Video Thực Tế Native Speakers',
    description: 'Học tiếng Anh chuẩn qua các video kiến thức thú vị, TED-Ed, câu chuyện đời sống từ các kênh nổi tiếng thế giới.',
    badge: 'B1 - C1',
    iconName: 'Youtube',
    exercises: [
      { id: 'the-egg-story', title: 'The Egg - Short Story', level: 'B2', totalSentences: 48, duration: '07:30', mediaType: 'youtube' },
      { id: 'art-balancing-stones', title: 'The Art of Balancing Stones', level: 'B1', totalSentences: 28, duration: '04:20', mediaType: 'youtube' },
      { id: 'why-boredom-is-good', title: 'Why Boredom is Good For You', level: 'B2', totalSentences: 52, duration: '08:15', mediaType: 'youtube' },
      { id: 'tumbleweeds-tumble', title: 'Why Do Tumbleweeds Tumble?', level: 'B1', totalSentences: 34, duration: '05:10', mediaType: 'youtube' },
      { id: 'wolf-pack-hunts', title: 'Wolf Pack Hunts A Hare in Arctic', level: 'B2', totalSentences: 26, duration: '04:00', mediaType: 'youtube' },
      { id: 'leonardo-da-vinci', title: 'Leonardo da Vinci: Genius of the Renaissance', level: 'B2', totalSentences: 44, duration: '06:40', mediaType: 'youtube' },
      { id: 'orange-juice-factory', title: 'How Orange Juice Is Made in Modern Factories', level: 'B1', totalSentences: 36, duration: '05:30', mediaType: 'youtube' },
    ]
  }
];

// Chi tiết mẫu 1 bài học phục vụ giao diện Dictation Practice
export const SAMPLE_LESSON_DETAILS = {
  'beauty-and-the-beast': {
    id: 'beauty-and-the-beast',
    categoryId: 'short-stories',
    categoryTitle: 'Stories for Kids',
    title: 'Beauty And The Beast',
    level: 'B1',
    mediaType: 'youtube',
    youtubeId: 'VzpHyWq_g6A',
    audioUrl: '',
    duration: '12:35',
    totalSentences: 182,
    currentSentenceIndex: 0,
    sentences: [
      {
        id: 1,
        startTime: '0:00',
        endTime: '0:04',
        text: 'Once upon a time, there lived a very rich man.',
        translation: 'Ngày xửa ngày xưa, có một người đàn ông rất giàu có sinh sống.'
      },
      {
        id: 2,
        startTime: '0:04',
        endTime: '0:08',
        text: 'He had three daughters.',
        translation: 'Ông có ba người con gái.'
      },
      {
        id: 3,
        startTime: '0:09',
        endTime: '0:14',
        text: 'Two of them were really greedy and self centered girls.',
        translation: 'Hai người trong số họ là những cô gái thực sự tham lam và chỉ biết nghĩ cho bản thân.'
      },
      {
        id: 4,
        startTime: '0:15',
        endTime: '0:19',
        text: 'But the third one had a heart full of love and kindness.',
        translation: 'Nhưng cô con gái thứ ba lại có một trái tim tràn đầy tình yêu thương và lòng tốt.'
      },
      {
        id: 5,
        startTime: '0:20',
        endTime: '0:26',
        text: 'One day their dad received the news that his ships had sunk due to the storm.',
        translation: 'Một ngày nọ, người cha nhận được tin rằng những con tàu chở hàng của ông đã bị bão đánh chìm.'
      },
      {
        id: 6,
        startTime: '0:27',
        endTime: '0:33',
        text: 'Poor man had lost everything and was left with only his little house in the village.',
        translation: 'Người đàn ông tội nghiệp mất hết tất cả và chỉ còn lại căn nhà nhỏ ở trong làng.'
      },
      {
        id: 7,
        startTime: '0:34',
        endTime: '0:40',
        text: 'The two greedy sisters were of course not pleased with this situation.',
        translation: 'Hai người chị tham lam dĩ nhiên không hề hài lòng với hoàn cảnh cơ cực này.'
      }
    ]
  },
  'at-home-1': {
    id: 'at-home-1',
    categoryId: 'daily-conversations',
    categoryTitle: 'Conversations',
    title: '1. At home (1)',
    level: 'A1',
    mediaType: 'audio',
    youtubeId: '',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg',
    duration: '01:45',
    totalSentences: 10,
    currentSentenceIndex: 0,
    sentences: [
      {
        id: 1,
        startTime: '0:00',
        endTime: '0:03',
        text: 'Where are you going, mom?',
        translation: 'Mẹ đang đi đâu đấy ạ?'
      },
      {
        id: 2,
        startTime: '0:03',
        endTime: '0:07',
        text: 'I am going to the supermarket to buy some fresh vegetables.',
        translation: 'Mẹ đang ra siêu thị để mua một ít rau củ tươi.'
      },
      {
        id: 3,
        startTime: '0:07',
        endTime: '0:11',
        text: 'Can you please buy me some orange juice and apples?',
        translation: 'Mẹ có thể mua giúp con ít nước cam và táo được không?'
      },
      {
        id: 4,
        startTime: '0:12',
        endTime: '0:15',
        text: 'Sure, honey! Is there anything else you need for dinner?',
        translation: 'Chắc chắn rồi con yêu! Con có cần thêm gì cho bữa tối nữa không?'
      },
      {
        id: 5,
        startTime: '0:16',
        endTime: '0:20',
        text: 'No, that will be enough. Thank you so much!',
        translation: 'Dạ thế là đủ rồi ạ. Con cảm ơn mẹ nhiều!'
      }
    ]
  }
};
