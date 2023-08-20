import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Link
} from "@nextui-org/react";
import Mario from "../../Assets/Mario.jpg";
import Blas from "../../Assets/Blas.jpg";
import Quim from "../../Assets/Quim.jpg";
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";

function Team() {
  return (
    <div className="pb-12 px-32">
      <h1 className="text-6xl font-medium text-center py-10">Our Team</h1>
      <div className="flex justify-between ">
        <Card className="w-80 bg-success text-black">
          <CardHeader className="flex flex-col py-4 gap-2 font-bold text-2xl"> 
          <h1>Mario</h1> 
            <Image isBlurred width={250} src={Mario} alt="NextUI Album Cover" />  
          </CardHeader>

          <CardBody className="text-center font-medium px-5 py-0 flex-none">
          <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              accusantium consectetur facere. Repudiandae, iste modi magnam
              consectetur, soluta asperiores perspiciatis vel voluptates numquam
              commodi reprehenderit non. Possimus beatae exercitationem corporis.
            </h2>
          </CardBody>

          <CardFooter className="flex justify-center gap-5 py-4">

          <Link
            isExternal
            showAnchorIcon
            href="https://www.linkedin.com/in/mariojimenezmoreno/"
            anchorIcon={<LinkedinIcon/>}
          >
          </Link>

            <Divider className="bg-black" orientation="vertical"/>

            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/MarioJimenezMoreno"
              anchorIcon={<GithubIcon/>}
            >
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-80 bg-danger text-black flex justify-between">
          <CardHeader className="flex flex-col py-4 gap-2 font-bold text-2xl"> 
          <h1>Quim</h1> 
            <Image isBlurred width={250} src={Quim} alt="NextUI Album Cover" />  
          </CardHeader>
          <CardBody className="text-center font-medium px-5 py-0 flex-none">
          <h2>
          Лорем ипсум долор сит амет цонсецтетур адиписицинг елит. Илло аккусантиум цонсецтетур фацере. Репудиандае, исте моди магнам цонсецтетур, солута аспериорес перспициатис вел волуптатес нумкуам коммоди репрехендерит нон. Поссимус беатае екзерцитатионем корпорис.
            </h2>
          </CardBody>
          <CardFooter className="flex justify-center gap-5 py-4">
          <Link
        isExternal
        showAnchorIcon
        href="https://www.linkedin.com/in/mariojimenezmoreno/"
        anchorIcon={<LinkedinIcon/>}
      >
      </Link>
            <Divider className="bg-black" orientation="vertical"/>
            <Link
        isExternal
        showAnchorIcon
        href="https://github.com/MarioJimenezMoreno"
        anchorIcon={<GithubIcon/>}
      >
      </Link>
          </CardFooter>
        </Card>

        <Card className="w-80 bg-warning text-black flex justify-between">
          <CardHeader className="flex flex-col py-4 gap-2 font-bold text-2xl"> 
          <h1>Blas</h1> 
            <Image isBlurred width={250} src={Blas} alt="NextUI Album Cover" />  
          </CardHeader>
          <CardBody className="text-center font-medium px-5 py-0 flex-none">
          <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              accusantium consectetur facere. Repudiandae, iste modi magnam
              consectetur, soluta asperiores perspiciatis vel voluptates numquam
              commodi reprehenderit non. Possimus beatae exercitationem corporis.
            </h2>
          </CardBody>
          <CardFooter className="flex justify-center gap-5 py-4">
          <Link
        isExternal
        showAnchorIcon
        href="https://www.linkedin.com/in/mariojimenezmoreno/"
        anchorIcon={<LinkedinIcon/>}
      >
      </Link>
            <Divider className="bg-black" orientation="vertical"/>
            <Link
        isExternal
        showAnchorIcon
        href="https://github.com/MarioJimenezMoreno"
        anchorIcon={<GithubIcon/>}
      >
      </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export default Team;