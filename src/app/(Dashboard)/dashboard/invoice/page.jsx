import Image from 'next/image';
import plus from '/public/images/plus.png'
import Link from 'next/link';
import InvoiceList from '../invoiceList/page';

const InvoicePage = () => {
    return (
        <div>
            {/* top section  */}
            <section className=' ml-7  py-8  pr-0 flex justify-between items-center '>
                <div>
                    <h1 className="font-poppins text-2xl font-semibold leading-10"> Invoices </h1>
                    <p className="font-poppins text-base font-normal leading-6">invoices </p>
                </div>




                <div>
                    <Link href="/dashboard/invoice/addInvoice " className="w-[250px] flex justify-center items-center h-[64px]  py-2 rounded-[34.67px] bg-[#CAE138] text-white ">
                        <span className="border-2  border-white rounded-full p-1 m-2">
                            <Image alt="" className="" src={plus} />
                        </span>
                        <p className="font-poppins text-base font-semibold leading-6">Add Invoice</p>
                    </Link>
                </div>
            </section>




            {/* bottom section  */}
            <InvoiceList></InvoiceList>
        </div>
    );
};

export default InvoicePage;