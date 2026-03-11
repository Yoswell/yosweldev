import LinkIcon from '@/components/utils/icons/LinkIcon.astro'
import HearthIcon from '@/components/utils/icons/HearthIcon.astro'
import SendIcon from '@/components/utils/icons/SendIcon.astro'

export const QUICK_ACCESS_LIST = [
    {
        link: '/uned',
        head: 'Uned',
        content: 'University community',
        icon: LinkIcon
    },
    {
        link: '/attribution',
        head: 'Attribution',
        content: 'Journey to create this site',
        icon: HearthIcon
    },
    {
        link: '/contact',
        head: 'Contact',
        content: "Let's talk, open to projects & collaborations",
        icon: SendIcon
    }
]