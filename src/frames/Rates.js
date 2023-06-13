const Rates = () => {

    return (
        <div className="w-full min-h-screen bg-dvanilla flex flex-col items-center pt-24" id="rates">
            <div className="w-full h-fit flex flex-col sm:flex-row items-center sm:justify-evenly">
                <div className="w-fit flex sm:block flex-col items-center">
                    <p className="text-4xl font-bold">Incall</p>
                    <BulletPoint text="- Half hour: $300" />
                    <BulletPoint text="- 1 hour: $400" />
                    <BulletPoint text="- 2 hours: $500" />
                    <BulletPoint text="- 3 hours: $600" />
                    <BulletPoint text="- 4 hours: $700" />
                    <BulletPoint text="- 6 hours: $850" />
                    <BulletPoint text="- Overnight: $1,400" />
                </div>

                <div className="w-full sm:w-[5px] h-[5px] sm:h-[600px] bg-black mt-5 sm:mt-0"></div>

                <div className="w-fit flex flex-col items-center sm:items-end mt-5 sm:mt-0">
                    <p className="text-4xl font-bold">Outcall</p>
                    <BulletPoint text="Half hour: $350 -" />
                    <BulletPoint text="1 hour: $450 -" />
                    <BulletPoint text="2 hours: $550 -" />
                    <BulletPoint text="3 hours: $650 -" />
                    <BulletPoint text="4 hours: $750 -" />
                    <BulletPoint text="6 hours: $900 -" />
                    <BulletPoint text="Overnight: $1,400 -" />
                </div>
            </div>

            <p className="text-2xl mt-10 px-5 text-center">Fly-Me-To-You: Discussed through text or email</p>

            <p className="w-full max-w-[1200px] text-center text-[6px] mt-4">ALL PICTURES & ONLINE CONTENT BELONG TO ME. PEOPLE WHO DON’T FOLLOW MY RULES WILL BE BLOCKED.<br/> DEPOSIT IS NON-REFUNDABLE AFTER ETRANSFER BEEN SENT. LOWBALLING WILL BE IGNORED.</p>

            <div className="mt-24 w-full max-w-[1000px] px-10 sm:px-24 pt-8 pb-24 bg-white">
                <p className="text-2xl">
                    For my hh, bbj and gfe is included.<br />
                    For my 1 hour rate, bbj, gfe, cim, multiple shots on goal is
                    included.<br />
                    Anything over 2 hours includes greek.<br />
                    <i>These will only be included if your hygiene is well maintained</i>
                </p>

                <p className="mt-4 text-2xl">
                    <i>For information about other extra’s and rates please ask through text or email</i>
                </p>

                <div className="w-full flex flex-col items-center mt-10">
                    <p className="text-4xl font-bold">Online Rates</p>

                    <BulletPoint text="Half hour: $110" italic={true} />
                    <BulletPoint text="1 hour: $180" italic={true} />
                    <BulletPoint text="2 hours: $250" italic={true} />
                    <p className="text-2xl mt-7 text-center">
                        <i>X-Rated Package/Bundle:</i> (includes 8 long videos) <i><s>$300</s> <span className="text-red-500">$150</span> (SALE 50% OFF)</i> BEST SELLER
                    </p>
                </div>
            </div>
        </div>
    )
}

const BulletPoint = ({
    text = "",
    italic = false
}) => {
    return (
        <p className="text-2xl mt-7 text-center">
            {
                italic ?
                    <i>{text}</i>
                    :
                    text

            }
        </p>
    )
}

export default Rates