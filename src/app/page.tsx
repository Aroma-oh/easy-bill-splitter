import CreateTitleForm from '@/components/CreateTitleForm';

export default function CreateTitle() {
    return (
        <section className='centralized-container'>
            <h2 className='text-center font-semibold leading-7 text-gray-900 text-3xl mt-5'>
                무엇을 정산할까요?
            </h2>
            <CreateTitleForm />
        </section>
    );
}
