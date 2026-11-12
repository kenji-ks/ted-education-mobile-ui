import ArticleFormat from '@/features/learn/ArticleFormat';
import { ArticleText } from '@/features/learn/data/ArticleText';

export default function treatmentScreen() {
    return (
        <ArticleFormat article={ArticleText[3]} />
    );
}