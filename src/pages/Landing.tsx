import Content from '../components/Content';
import Card from '../components/Card';

interface LandingProps {

}

const Landing = (props: LandingProps) => {

    return (
        <Content>
            <Card>
                <p>
                    Squeeze bottles, droppers, syringes, spray cans that I
                    can load up with my own mixed oils. Pieces of wood. My
                    hands, squeegees, drywall trowels, rags--anything that
                    can hold paint, I'll use. Drips collect in trays under
                    the painting, and wind up poured over a canvas. Rollers,
                    oil sticks, paint markers. I move super-fast. I'm listening
                    to music, loud. It calms me. I load up a section of my
                    canvas with a few colors of oil paint, drench them in
                    mineral spirits, varnish, or linseed oil and watch the
                    paint feather and run fast with the spirits and slow and
                    steady with the varnish and linseed oil. I'm in a trance,
                    maybe a meditation, maybe a full-body contact sport.
                </p>
                <p>
                    It's really not enough to say that my paintbrush is an
                    extension of my arm. It's an extension of my history, of
                    my ancestors. My grandmother painted Plein Air, her mother
                    exploded with still lives and etchings, and her mother
                    painted scenes of the her father's endeavors while they
                    forged up the the west coast in the late 1800s. Still
                    the history of female artists in my family goes even
                    further back. They were all artists. I can't not paint.
                </p>
                <p>
                    I can't not paint but also I can't paint-- I'm doing
                    something else. My mind goes elsewhere and there is no
                    space or time. It is as if I am too focused to be aware
                    and then I put down my brush and open my eyes and I have
                    left a part of myself on the canvas. Relief, reprieve,
                    release.
                </p>
                <p>
                    <em>If you're not constantly experimenting with your art it's
                    too easy to end up in a box</em>
                    --Humans of New York
                </p>
                <p>
                    I painted landscapes for 16 years and then one day while half
                    way through a piece I was working on, I put down my brush,
                    grabbed the biggest canvas I had in my studio and started
                    experimenting with abstraction. My abstract works still read
                    as landscapes to me.
                </p>
                <p>
                    Large. The bigger the canvas the better. No, bigger than the
                    canvas, beyond it, into the street. The sides of buildings are
                    becoming the arena for my kind of controlled chaos. The biggest
                    yet is 93' long x 8' high. Watch me. I've only started.
                </p>
            </Card>
            <Card>
                <img src={'./in_action.jpeg'} alt="in_action" />
                <p>
                    Painting without brushes... I can be as raw as I want, or need,
                    to be with a giant abstract. Sometimes I even close my eyes;
                    sometimes I feel the need to meticulously focus on the detail of
                    it. In the end, I leave it to the viewer to interpret--internalize--it.
                    Or sometimes I could go on forever in conversation about how every
                    little part of it has meaning... Every bit of paint was intentional,
                    meant something on its own, at the time whether I realized it or not.
                </p>
            </Card>
            <Card>
                <p>
                    My process is chaos; nothing is wasted. What doesn't make it onto one
                    canvas becomes a part of another.
                </p>
                <img src={'./workstation.jpeg'} alt="workstation" />
            </Card>
        </Content >
    );
}

export default Landing;