import ArticleFormat from '@/features/learn/ArticleFormat';
import { ArticleText } from '@/features/learn/data/ArticleText';

export default function specialistScreen() {
    return (
        <ArticleFormat article={ArticleText[4]} />
    );
}