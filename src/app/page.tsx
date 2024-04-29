import { Buttons } from '@/components/gcds/buttons'
import styles from './page.module.css'
import { Alerts } from '@/components/gcds/alerts'
import { Breadcrumbs } from '@/components/gcds/breadcrumbs'
import { Cards } from '@/components/gcds/card'
import { Checkbox } from '@/components/gcds/checkbox'
import { Container } from '@/components/gcds/container'
import { DateModified } from '@/components/gcds/datemodified'
import { Details } from '@/components/gcds/details'
import { ErrorMessage } from '@/components/gcds/errormessage'
import { ErrorSummary } from '@/components/gcds/errorsummary'
import { Fieldset } from '@/components/gcds/fieldset'
import { FileUploader } from '@/components/gcds/fileuploader'
import { Grid } from '@/components/gcds/grid'
import { Heading } from '@/components/gcds/heading'
import { Hint } from '@/components/gcds/hint'
import { Icon } from '@/components/gcds/icon'
import { Input } from '@/components/gcds/input'
import { Label } from '@/components/gcds/label'
import { LangToggle } from '@/components/gcds/langtoggle'
import { Link } from '@/components/gcds/link'
import { NavGroup } from '@/components/gcds/navgroup'
import { NavLink } from '@/components/gcds/navlink'
import { Pagination } from '@/components/gcds/pagination'
import { PhaseBanner } from '@/components/gcds/phasebanner'
import { Radio } from '@/components/gcds/radio'
import { Search } from '@/components/gcds/search'
import { Select } from '@/components/gcds/select'
import { SideNav } from '@/components/gcds/sidenav'
import { Signature } from '@/components/gcds/signature'
import { SrOnly } from '@/components/gcds/sronly'
import { BreadcrumbsItem } from '@/components/gcds/breadcrumbsitem'
import { Stepper } from '@/components/gcds/stepper'
import { Text } from '@/components/gcds/text'
import { Textarea } from '@/components/gcds/textarea'
import { TopNav } from '@/components/gcds/topnav'
import { TopicMenu } from '@/components/gcds/topicmenu'
import { VerifyBanner } from '@/components/gcds/verifybanner'
import { Intro } from '@/components/intro'

export default function Home() {
  return (
    <main className={styles.main}>

      <Intro />

      <Alerts />
      <Breadcrumbs />
      <BreadcrumbsItem />
      <Buttons />
      <Cards />
      <Checkbox />
      <Container />
      <DateModified />
      <Details />
      <ErrorMessage />
      <ErrorSummary />
      <Fieldset />
      <FileUploader />
      <Grid />
      <Heading />
      <Hint />
      <Icon />
      <Input />
      <Label />
      <LangToggle />
      <Link />
      <NavGroup />
      <NavLink />
      <Pagination />
      <PhaseBanner />
      <Radio />
      <Search />
      <Select />
      <SideNav />
      <Signature />
      <SrOnly />
      <Stepper />
      <Text />
      <Textarea />
      <TopNav />
      <TopicMenu />
      <VerifyBanner />
    </main>
  )
}