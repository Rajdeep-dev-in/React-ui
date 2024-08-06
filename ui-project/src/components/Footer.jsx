import {resourcesLinks} from '../constants/Index'
import {platformLinks } from '../constants/Index'
import {communityLinks  } from '../constants/Index'

function Footer(){
    return(
        <>
            <footer className="mt-20 border-t py-10 border-neutral-700">
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div>
                        <h3 className='text-md font-semibold mb-4'>Resources</h3>
                        <ul>
                            {
                                resourcesLinks.map((resource, index) => (
                                    <li key={index} className=' list-none mt-2 '>
                                        {resource.text}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-md font-semibold mb-4'>Platforms</h3>
                        <ul>
                            {
                                platformLinks.map((platform, index) => (
                                    <li key={index} className=' list-none mt-2 '>
                                        {platform.text}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-md font-semibold mb-4'>Community</h3>
                        <ul>
                            {
                                communityLinks.map((community, index) => (
                                    <li key={index} className=' list-none mt-2 '>
                                        {community.text}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </footer>
        
        </>
    )
}

export default Footer