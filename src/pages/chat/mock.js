import chat1 from '../../assets/image/chat1.png'
import chat2 from '../../assets/image/chat2.png'
import chat3 from '../../assets/image/chat3.png'
import chat4 from '../../assets/image/chat4.png'
import chat5 from '../../assets/image/chat5.png'
import chat6 from '../../assets/image/chat6.png'
import chat7 from '../../assets/image/chat7.png'
import chat8 from '../../assets/image/chat8.png'

// lastWrite last 0 = ты, 1 = собеседник
export const mock = [
    {
        nickname: '@BabushkaBoy',
        id: 1,
        time: '12:23',
        last_message: 'Привет вчера созванивались, собирались',
        img: chat1,
        isOnline: false,
        unread: 62,
        lastWrite: {
            last: 0,
            isRead: false
        }
    },
    {
        nickname: '@BabushkaBoy',
        id: 2,
        time: '12:23',
        last_message: 'Привет вчера созванивались, собирались',
        img: chat2,
        isOnline: false,
        unread: 0,
        isRead: false,
        lastWrite: {
            last: 0,
            isRead: true
        }
    },
    {
        nickname: '@BabushkaBoy',
        time: '12:23',
        id: 1,
        last_message: 'Привет вчера созванивались, собирались',
        img: chat3,
        isOnline: true,
        unread: 0,
        isRead: false,
        lastWrite: {
            last: 0,
            isRead: false
        }
    },
    {
        nickname: '@BabushkaBoy',
        time: '12:23',
        id: 2,
        last_message: 'Привет вчера созванивались, собирались  Привет вчера созванивались, собирались',
        img: chat4,
        isOnline: true,
        unread: 203,
        isRead: false,
        lastWrite: {
            last: 0,
            isRead: false
        }
    },
    {
        nickname: '@BabushkaBoy',
        time: '12:23',
        id: 1,
        last_message: 'Привет вчера созванивались, собирались',
        img: chat5,
        isOnline: false,
        unread: 0,
        isRead: false,
        lastWrite: {
            last: 1,
            isRead: false
        }
    },
    {
        nickname: '@BabushkaBoy',
        time: '12:23',
        id: 2,
        last_message: 'Привет вчера созванивались, собирались --- Привет вчера созванивались, собиралисьПривет вчера созванивались, собирались',
        img: chat6,
        isOnline: false,
        unread: 0,
        isRead: false,
        lastWrite: {
            last: 1,
            isRead: false
        }
    },
    {
        nickname: 'Наш Любимый Коля Басков лучший чел на свете',
        time: '12:23',
        id: 1,
        last_message: 'Привет вчера созванивались, собирались',
        img: chat7,
        isOnline: false,
        unread: 1,
        isRead: false,
        lastWrite: {
            last: 1,
            isRead: false
        }
    },
    {
        nickname: '@BabushkaBoy',
        time: '12:23',
        id: 2,
        last_message: 'Привет вчера созванивались, собирались',
        img: chat8,
        isOnline: false,
        unread: 0,
        isRead: false,
        lastWrite: {
            last: 0,
            isRead: false
        }
    },
]
